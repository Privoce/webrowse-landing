/**
 * @author: laoona
 * @date:  2022-03-01
 * @time: 15:12
 * @contact: laoona.com
 * @description: #
 */

import React, { useEffect, useState, useContext } from "react"
import {
  LEAVE,
  UPDATE_CURRENT_USR, UPDATE_PERMISSION_STATE, VoiceContext,
  UPDATE_EXT_USERS,
} from "./reducer"
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
      .then((devices) => {
        setDevices(devices)
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
    const handleMessage = async (ev) => {
      const {
        source,
        event,
        payload,
      } = ev.data || {}

      console.log("user message", ev.data)

      // 监听来自 webrowse.ext 的消息
      if (!(source === "webrowse.ext")) return

      switch (event) {
        case "webrows_users":
          const users = payload?.users || []
          const currentUser = payload?.currentUser || {}

          dispatch({
            type: UPDATE_CURRENT_USR,
            payload: currentUser,
          })

          dispatch({
            type: UPDATE_EXT_USERS,
            payload: users,
          })

          break
        case "leave":
          dispatch({
            type: LEAVE,
          })
          break

        default:
          break
      }
    }

    window.addEventListener("message", handleMessage)

    return () => {
      window.removeEventListener("message", handleMessage)
    }
  }, [])

  useEffect(() => {
    if (permissionStatus === undefined) return

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
