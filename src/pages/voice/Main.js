/**
 * @author: laoona
 * @date:  2022-03-01
 * @time: 15:12
 * @contact: laoona.com
 * @description: #
 */

import React, { useEffect, useState, useContext } from "react"
import { UPDATE_PERMISSION_STATE, VoiceContext } from "./reducer"
import Meeting from "./Meeting"
import Devices from "./components/Devices"
import AgoraRTC from "agora-rtc-sdk-ng"
import { Helmet } from "react-helmet"

const Main = () => {
  const { state, dispatch } = useContext(VoiceContext)
  const [permissionStatus, setPermissionStatus] = useState(undefined)
  const [devices, setDevices] = useState([])

  const accessDevices = () => {
    AgoraRTC.getDevices()
      .then(() => {

        (async () => {
          const devices = await AgoraRTC.getDevices()
          setDevices(devices)
        })()

        setPermissionStatus("allow")
      }).catch((e) => {
      let status = "denied"
      switch (true) {
        case e.toString().indexOf("Permission dismissed") > -1:
          status = "dismissed"
          break
        case e.toString().indexOf("Permission denied") > -1:
          status = "denied"
          break

        default:
          break
      }
      setPermissionStatus(status)
    })
  }

  useEffect(() => {
    accessDevices()
  }, [])

  useEffect(() => {
    if (permissionStatus === undefined) return;

    dispatch?.({
      type: UPDATE_PERMISSION_STATE,
      payload: permissionStatus,
    })
  }, [permissionStatus])

  const { permissionState } = state || {}

  console.log(permissionState, "permissionState")

  if (permissionState === undefined) return null

  return <>
    <Helmet
      bodyAttributes={{
        class: "view-voice",
      }}>
    </Helmet>
    {permissionState === "complete" ? <Meeting /> : <Devices devices={devices} access={accessDevices} />}
  </>
}

export default Main
