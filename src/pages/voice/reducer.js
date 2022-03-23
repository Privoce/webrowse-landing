/**
 * @author: laoona
 * @date:  2022-03-18
 * @time: 17:37
 * @contact: laoona.com
 * @description: #
 */

import React, { createContext, useReducer } from "react"

/**
 * status enums ['disconnected', 'will-join', 'connecting', 'connected', 'leave']
 * @type {{localAudioTrack: null, localVideoTrack: null, joinState: boolean, client: null, users: *[], status: string}}
 */
const initValue = {
  users: [],
  joinState: false,
  localVideoTrack: null,
  localAudioTrack: null,
  client: null,
  status: "disconnected",
  devices: [],
  permissionState: undefined, // enums ['dismissed', 'denied', 'allow', 'complete']
  videoEnabled: true,
  audioEnabled: true,
  cameraId: undefined,
  microphoneId: undefined,
  currentUser: {}, // 当前扩展登录的用户
  extUsers: [], // 当前扩展 Webrowse 用户列表
}

const UPDATE_USERS = "UPDATE_USERS"
const UPDATE_LOCAL_VIDEO_TRACK = "UPDATE_LOCAL_VIDEO_TRACK"
const UPDATE_LOCAL_AUDIO_TRACK = "UPDATE_LOCAL_AUDIO_TRACK"
const UPDATE_JOIN_STATE = "UPDATE_JOIN_STATE"
const LEAVE = "LEAVE"
const UPDATE_CLIENT = "UPDATE_CLIENT"
const UPDATE_STATUS = "UPDATE_STATUS"
const UPDATE_PERMISSION_STATE = "UPDATE_PERMISSION_STATE"
const UPDATE_DEVICES = "UPDATE_DEVICES"
const UPDATE_DEVICES_ENABLED = "UPDATE_DEVICES_ENABLED"
const UPDATE_DEVICES_ID = "UPDATE_DEVICES_ID"
const UPDATE_CURRENT_USR = "UPDATE_CURRENT_USR"
const UPDATE_EXT_USERS = "UPDATE_EXT_USERS"

const reducer = (state, action) => {
  const { localAudioTrack, localVideoTrack, client } = state
  switch (action.type) {
    case UPDATE_USERS:
      return {
        ...state,
        users: action.payload,
      }

    case UPDATE_LOCAL_VIDEO_TRACK:
      return {
        ...state,
        localVideoTrack: action.payload,
      }
    case UPDATE_LOCAL_AUDIO_TRACK:
      return {
        ...state,
        localAudioTrack: action.payload,
      }

    case UPDATE_JOIN_STATE:
      return {
        ...state,
        joinState: action.payload,
      }

    case LEAVE:
      (async function leave() {
        if (localAudioTrack) {
          localAudioTrack.stop()
          localAudioTrack.close()
        }
        if (localVideoTrack) {
          localVideoTrack.stop()
          localVideoTrack.close()
        }
        await client?.leave()
      })()
      return {
        ...state,
        users: [],
        joinState: false,
        status: "leave",
      }
    case UPDATE_CLIENT:
      return {
        ...state,
        client: action.payload,
      }
    case UPDATE_STATUS:
      return {
        ...state,
        status: action.payload,
      }

    case UPDATE_PERMISSION_STATE:
      return {
        ...state,
        permissionState: action.payload,
      }

    case UPDATE_DEVICES:
      return {
        ...state,
        devices: action.payload,
      }

    case UPDATE_DEVICES_ENABLED:
      const {
        devices = '',
        enabled = undefined,
      } = action.payload;

      return {
        ...state,
        [`${devices}Enabled`]: enabled,
      }

    case UPDATE_DEVICES_ID:
      const {
        type = '',
        id = undefined,
      } = action.payload;

      return {
        ...state,
        [`${type}Id`]: id,
      }

    case UPDATE_CURRENT_USR:
      return {
        ...state,
        currentUser: action.payload,
      }

    case UPDATE_EXT_USERS:
      return {
        ...state,
        extUsers: action.payload,
      }
    default:
      return state
  }
}

const VoiceContext = createContext(initValue)

const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initValue, val => val)
  return (<VoiceContext.Provider value={{ state, dispatch }}>
    {props.children}
  </VoiceContext.Provider>)
}

export default ContextProvider

export {
  VoiceContext,
  UPDATE_USERS,

  UPDATE_LOCAL_VIDEO_TRACK,
  UPDATE_LOCAL_AUDIO_TRACK,
  UPDATE_JOIN_STATE,
  LEAVE,
  UPDATE_CLIENT,
  UPDATE_STATUS,
  UPDATE_PERMISSION_STATE,
  UPDATE_DEVICES,
  UPDATE_DEVICES_ENABLED,
  UPDATE_DEVICES_ID,
  UPDATE_CURRENT_USR,
  UPDATE_EXT_USERS,
}

