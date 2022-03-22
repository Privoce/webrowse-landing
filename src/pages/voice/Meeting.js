/**
 * @author: laoona
 * @date:  2022-03-21
 * @time: 19:06
 * @contact: laoona.com
 * @description: #
 */

import React, { useEffect, useState, useContext } from "react"

import AgoraRTC from "agora-rtc-sdk-ng"
import useAgora from "../hooks/useAgora"
import RoomFooter from "./components/RoomFooter"
import StyledWrapper from "./styles"
import Users from "./components/Users"
import {
  VoiceContext,
  UPDATE_LOCAL_VIDEO_TRACK,
  UPDATE_LOCAL_AUDIO_TRACK,
  UPDATE_JOIN_STATE,
  UPDATE_USERS,
  UPDATE_CLIENT,
  UPDATE_STATUS,
  LEAVE,
} from "./reducer"
import { JoinRoom } from "./components/Icon"

const client = AgoraRTC.createClient({ codec: "h264", mode: "rtc" })

/**
 * 随机生成uid
 * @returns {number}
 */
const genUid = () => {
  const soup = "123456789"
  const length = 9
  const soupLength = soup.length
  const id = []
  for (let i = 0; i < length; i++) {
    id[i] = soup.charAt(Math.random() * soupLength)
  }

  return +id.join("")
}

const Meeting = () => {
  const { dispatch, state } = useContext(VoiceContext)
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  const { status } = state || {}
  const { user: localUser } = { user: { intId: 1 } }

  const params = new URLSearchParams(location.search)
  const uid = genUid() || +params.get("uid") || 1
  const cid = params.get("cid") || "test"

  const {
    localAudioTrack,
    localVideoTrack,
    join,
    joinState,
    remoteUsers,
  } = useAgora(client, uid)

  useEffect(() => {
    dispatch({
      type: UPDATE_CLIENT,
      payload: client,
    })
  }, [])

  useEffect(() => {
    if (!uid || !cid) return
    // join(cid, uid);
  }, [uid, cid])

  useEffect(() => {
    if (!localVideoTrack || !localAudioTrack) return

    dispatch({
      type: UPDATE_LOCAL_VIDEO_TRACK,
      payload: localVideoTrack,
    })

    dispatch({
      type: UPDATE_LOCAL_AUDIO_TRACK,
      payload: localAudioTrack,
    })
  }, [localVideoTrack, localAudioTrack])

  useEffect(() => {
    dispatch({
      type: UPDATE_JOIN_STATE,
      payload: joinState,
    })
  }, [joinState])

  useEffect(() => {
    const message = {
      source: "webrow.se/voice",
      payload: {
        status: state?.status,
      },
      event: "connect",
    }

    // 向扩展发送连接消息
    window?.postMessage(message, "*")
  }, [state?.status])

  useEffect(() => {
    (async () => {
      if (state?.status === 'will-join') {
        await handleJoin()
      }
    })();
  }, [state?.status]);

  useEffect(() => {
    dispatch({
      type: UPDATE_USERS,
      payload: remoteUsers,
    })

    const message = {
      source: "webrow.se/voice",
      payload: {
        remoteUsers: remoteUsers.map(item => ({uid: item.uid})),
      },
      event: "remote_users",
    }

    // 向扩展发送连接消息
    window?.postMessage(message, "*")
  }, [remoteUsers])

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

          setUsers(users)
          setCurrentUser(currentUser)

          if (!state?.joinState && state?.status === 'disconnected') {
            await handleJoin();
          }
          break;
        case "leave":
          dispatch({
            type: LEAVE,
          })
          break;

        default:
          break;
      }
    }

    window.addEventListener("message", handleMessage)

    return () => {
      window.removeEventListener("message", handleMessage)
    }
  }, [state?.status])

  const handleJoin = async () => {
    dispatch({
      type: UPDATE_STATUS,
      payload: "connecting",
    })

    await join(cid, uid)

    dispatch({
      type: UPDATE_JOIN_STATE,
      payload: true,
    })

    dispatch({
      type: UPDATE_STATUS,
      payload: "connected",
    })
  }

  return (
    <StyledWrapper>
      <header className="header">
        <h1 className="title">Webrowse</h1>
        <h2 className="sub_title">
          Sync tabs with your teammates!
        </h2>
      </header>

      {
        state?.joinState ? <>
            <Users />
            <RoomFooter />
          </>
          :
          <div className="joinWrap">
            <button
              disabled={status === "connecting"}
              className="button"
              onClick={handleJoin}
            >
              <div className="inner">
                <JoinRoom />
              </div>
              {status === "connecting" ? "connecting" : "Join"}
            </button>
          </div>
      }

    </StyledWrapper>
  )
}

export default Meeting