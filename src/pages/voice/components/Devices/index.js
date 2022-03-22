/**
 * @author: laoona
 * @date:  2022-03-21
 * @time: 14:06
 * @contact: laoona.com
 * @description: #
 */
import React, { useState, useEffect, useContext, useRef } from "react"
import StyledDevices from "./styles"
import Selector from "./Selector"
import { Camera, Mic, Speaker } from "../Icon"
import { VoiceContext, UPDATE_PERMISSION_STATE, UPDATE_STATUS } from "../../reducer"
import MediaPlayer from "../MediaPlayer"
import AgoraRTC from "agora-rtc-sdk-ng"
import Button from "../RoomFooter/Button"

const Devices = (
  {
    devices = [], access = () => {
  },
  }) => {
  let timer = useRef(null)

  const { state, dispatch } = useContext(VoiceContext)
  const [audioInputValue, setAudioInputValue] = useState("")
  const [audioOutputValue, setAudioOutputValue] = useState("")
  const [videoInputValue, setVideoInputValue] = useState("")

  const [audioTrack, setAudioTrack] = useState(null)
  const [videoTrack, setVideoTrack] = useState(null)
  const [level, setLevel] = useState(0)

  const permissionStatus = state?.permissionState

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
        { microphoneId: audioInputValue }, {})
      setAudioTrack(microphoneTrack)
      setVideoTrack(cameraTrack)

      timer = setInterval(() => {
        const level = microphoneTrack?.getVolumeLevel()
        console.log("local stream audio level", level)
        setLevel(level)
      }, 200)
    })()

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
  }
  console.log(permissionStatus, "permissionStatus")

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
    // const [disabled, setDisabled] = useState(false)

    return <div className="playerWrap">
      <MediaPlayer videoTrack={videoTrack} audioTrack={null} />
      <div className="buttons">
        <Button
          // onClick={() => setDisabled(false)}
          type="cam"
          label={null} disabled={false} />

        <Button
          // onClick={() => setDisabled(false)}
          label={null} volumeLevel={level} disabled={false} />
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

export default Devices
