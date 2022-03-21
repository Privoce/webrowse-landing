/**
 * @author: laoona
 * @date:  2022-03-21
 * @time: 14:06
 * @contact: laoona.com
 * @description: #
 */
import React, { useState, useEffect, useContext } from "react"
import StyledDevices from "./styles"
import Selector from "./Selector"
import { Mic, Speaker } from "../Icon"
import { VoiceContext } from "../../reducer"

const Devices = (
  {
    devices = [], access = () => {
  },
  }) => {
  const { state } = useContext(VoiceContext)
  const [audioInputValue, setAudioInputValue] = useState("")
  const [audioOutputValue, setAudioOutputValue] = useState("")

  const permissionStatus = state?.permissionState

  useEffect(() => {
    const audioInput = devices.find(item => item.deviceId === "default" && item.kind === "audioinput")?.deviceId
    setAudioInputValue(audioInput)

    const audioOutput = devices.find(item => item.deviceId === "default" && item.kind === "audioinput")?.deviceId
    setAudioOutputValue(audioOutput)
  }, [devices])

  const devicesList = (devices = []) => {
    if (!devices.length) return null
    return <>
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
  return <StyledDevices>
    <div className="modal">
      <h3 className="title">Privoce Daily Meeting</h3>

      {devicesList(devices)}

      <div className="statusText">
        {
          permissionStatus === "allow" ? "In order for others to hear you, your browser will request microphone" +
            " access." : "We don’t" +
            " have access to your Microphone and Mic."
        }
      </div>

      <div className="descText">
        Warning: Voice only works in one tab, Make sure do not close the tab you started Voice with, once you close the
        tab, you have to restart again.
      </div>

      <button className="button" onClick={access}>Request access</button>
    </div>
  </StyledDevices>
}

export default Devices
