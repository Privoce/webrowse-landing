/**
 * @author: laoona
 * @date:  2022-03-01
 * @time: 15:12
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

const Main = ({ users = [] }) => {
  const { dispatch, state } = useContext(VoiceContext)

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
    volumes,
  } = useAgora(client, uid)

  // console.log(localVideoTrack.audioTrack.getVolumeLevel())
  console.log(
    localVideoTrack, localAudioTrack?.getVolumeLevel(), "haha", users,
    client,
  )

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
    dispatch({
      type: UPDATE_USERS,
      payload: remoteUsers,
    })
  }, [remoteUsers])

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
              className="button"
              onClick={() => {
                join(cid, uid)
              }}
            >
              <div className="inner">
                <JoinRoom />
              </div>
              Join
            </button>
          </div>
      }

    </StyledWrapper>
  )
}

export default Main
