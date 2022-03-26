/**
 * @author: laoona
 * @date:  2022-03-21
 * @time: 14:06
 * @contact: laoona.com
 * @description: #
 */
import React, {
  useState, useEffect, useContext, useRef,
  useImperativeHandle, forwardRef,
} from "react"
import StyledDevices from "./styles"
import Selector from "./Selector"
import { Camera, Mic, Speaker } from "../Icon"
import {
  VoiceContext,
  UPDATE_DEVICES_ENABLED,
  UPDATE_PERMISSION_STATE,
  UPDATE_STATUS,
  UPDATE_DEVICES_ID,
} from "../../reducer"
import MediaPlayer from "../MediaPlayer"
import AgoraRTC from "agora-rtc-sdk-ng"
import Button from "../RoomFooter/Button"

const Devices = (
  {
    devices = [], access = () => {
  },
  }, ref) => {
  let timer = useRef(null)

  const { state, dispatch } = useContext(VoiceContext)
  const [audioInputValue, setAudioInputValue] = useState("")
  const [audioOutputValue, setAudioOutputValue] = useState("")
  const [videoInputValue, setVideoInputValue] = useState("")

  const [audioTrack, setAudioTrack] = useState(null)
  const [videoTrack, setVideoTrack] = useState(null)
  const [level, setLevel] = useState(0)

  const permissionStatus = state?.permissionState
  const { videoEnabled, audioEnabled } = state || {}

  useEffect(() => {
    const audioInput = devices.find(item => item.kind === "audioinput")?.deviceId
    setAudioInputValue(audioInput)

    const audioOutput = devices.find(item => item.kind === "audioinput")?.deviceId
    setAudioOutputValue(audioOutput)

    const videoInput = devices.find(item => item.kind === "videoinput")?.deviceId
    setVideoInputValue(videoInput)
  }, [devices])

  useEffect(() => {
    if (!audioInputValue || !videoInputValue) return

    let microphoneTrack, cameraTrack;
    (async () => {

      [microphoneTrack, cameraTrack] = await AgoraRTC.createMicrophoneAndCameraTracks(
        { microphoneId: audioInputValue },
        { cameraId: videoInputValue })

      setAudioTrack(microphoneTrack)
      setVideoTrack(cameraTrack)

      timer = setInterval(() => {
        const level = microphoneTrack?.getVolumeLevel()
        console.log("local stream audio level", level)
        setLevel(level)
      }, 200)
    })()

    dispatch({
      type: UPDATE_DEVICES_ID,
      payload: {
        type: "camera",
        id: videoInputValue,
      },
    })

    dispatch({
      type: UPDATE_DEVICES_ID,
      payload: {
        type: "microphone",
        id: audioInputValue,
      },
    })

    return () => {
      microphoneTrack = null
      cameraTrack = null
      clearInterval(timer)
      audioTrack?.close()
      videoTrack?.close()
    }
  }, [audioInputValue, videoInputValue])

  const handleJoinMeeting = () => {
    dispatch({
      type: UPDATE_PERMISSION_STATE,
      payload: "complete",
    })

    dispatch({
      type: UPDATE_STATUS,
      payload: "will-join",
    })

    audioTrack?.close()
    videoTrack?.close()
  }

  console.log(permissionStatus, "permissionStatus")

  useImperativeHandle(ref, () => ({
    join() {
      handleJoinMeeting()
    },
  }))


  const devicesList = (devices = []) => {
    if (!devices.length) return null
    return <>
      <Selector
        value={videoInputValue}
        icon={<Camera />}
        data={devices.filter(item => item.kind === "videoinput")}
        onChange={(v) => {
          setVideoInputValue(v)
        }}
      />
      <div className="space" />
      <Selector
        value={audioInputValue}
        icon={<Mic />}
        data={devices.filter(item => item.kind === "audioinput")}
        onChange={(v) => {
          setAudioInputValue(v)
        }}
      />
      <div className="space" />
      <Selector
        value={audioOutputValue}
        icon={<Speaker />}
        data={devices.filter(item => item.kind === "audiooutput")}
        onChange={(v) => {
          setAudioOutputValue(v)
        }}
      /></>
  }
  const renderTestPlayer = () => {
    return <div className="playerWrap">
      <MediaPlayer videoTrack={videoTrack} audioTrack={null} />
      <div className="buttons">
        <Button
          onClick={() => dispatch({
            type: UPDATE_DEVICES_ENABLED,
            payload: { devices: "video", enabled: !videoEnabled },
          })}
          type="cam"
          label={null} disabled={!videoEnabled} />

        <Button
          onClick={() => dispatch({
            type: UPDATE_DEVICES_ENABLED,
            payload: { devices: "audio", enabled: !audioEnabled },
          })}
          label={null} volumeLevel={level} disabled={!audioEnabled} />
      </div>
    </div>
  }

  return <StyledDevices>
    <div className="modal">
      <div>

        <h3 className="title">Privoce Daily Meeting</h3>

        {permissionStatus === "allow" && renderTestPlayer()}

        {devicesList(devices)}
        <div className="statusText">
          {
            permissionStatus === "allow" ? "In order for others to hear you, your browser will request microphone" +
              " access." : "We don’t" +
              " have access to your Microphone and Mic."
          }
        </div>

        <div className="descText">
          Warning: Voice only works in one tab, Make sure do not close the tab you started Voice with, once you close
          the
          tab, you have to restart again.
        </div>
      </div>
      <div>

        {permissionStatus === "allow" ?
          <button className="button" onClick={handleJoinMeeting}>Join Meeting</button> :
          <button className="button" onClick={access}>Request access</button>
        }
      </div>
    </div>
  </StyledDevices>
}

export default forwardRef(Devices)
