/**
 * @author: laoona
 * @date:  2022-03-18
 * @time: 17:37
 * @contact: laoona.com
 * @description: #
 */

import React, { createContext, useReducer } from "react"

const initValue = {
  users: [],
  joinState: false,
  localVideoTrack: null,
  localAudioTrack: null,
  client: null,
  status: 'normal',
}

const UPDATE_USERS = "UPDATE_USERS"
const UPDATE_LOCAL_VIDEO_TRACK = "UPDATE_LOCAL_VIDEO_TRACK"
const UPDATE_LOCAL_AUDIO_TRACK = "UPDATE_LOCAL_AUDIO_TRACK"
const UPDATE_JOIN_STATE = "UPDATE_JOIN_STATE"
const LEAVE = "LEAVE"
const UPDATE_CLIENT = "UPDATE_CLIENT"
const UPDATE_STATUS = "UPDATE_STATUS"

const reducer = (state, action) => {
  const {localAudioTrack, localVideoTrack, client} = state;
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
        localAudioTrack.stop();
        localAudioTrack.close();
      }
      if (localVideoTrack) {
        localVideoTrack.stop();
        localVideoTrack.close();
      }
      await client?.leave();
    })();
      return {
        ...state,
        users: [],
        joinState: false,
        status: 'leave',
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
}

