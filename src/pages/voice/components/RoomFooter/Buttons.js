/**
 * @author: laoona
 * @date:  2022-03-18
 * @time: 16:47
 * @contact: laoona.com
 * @description: #
 */

import React, { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import { VoiceContext, LEAVE } from "../../reducer"
import { Video, Audio, VideoClose, AudioClose, Exit } from "../Icon"

const StyledWrap = styled.div`
  .buttonMain {

  }

  .button {
    border: none;
    background: none;
    cursor: pointer;
    &:disabled {
      opacity: 0.3;
    }

    &Icon {
      width: 48px;
      height: 48px;
      background-color: #f26b4d;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: #c35037;
      }
    }

    .text {
      color: #fff;
      font-size: 14px;
      margin-top: 10px;
      text-align: center;
    }

    &Inner {
    }
  }
`

const Buttons = () => {
  const { state, dispatch } = useContext(VoiceContext) || {}
  const { localVideoTrack, localAudioTrack, leave, joinState } = state
  const [videoEnabled, setVideoEnabled] = useState(true)
  const [audioEnabled, setAudioEnabled] = useState(true)

  const handleEnabled = (type = "video") => {
    if (type === "video") {
      setVideoEnabled(v => !v)
    } else {
      setAudioEnabled(v => !v)
    }
  }

  console.log(leave);

  const handleLeave = () => {
    dispatch({
      type: LEAVE,
    });
  }

  useEffect(() => {
    localVideoTrack?.setEnabled(videoEnabled)
    localAudioTrack?.setEnabled(audioEnabled)
  }, [videoEnabled, audioEnabled])

  return <StyledWrap>
    <button
      onClick={() => handleEnabled()}
      className={"button"}
    >
      <div className={"buttonInner"}>
        <div className={"buttonIcon"}>
          {videoEnabled ? <Video /> : <VideoClose />}
        </div>
        <div className={"text"}>Cam</div>
      </div>
    </button>

    <button
      onClick={() => handleEnabled("audio")}
      className={"button"}
    >
      <div className={"buttonInner"}>
        <div className={"buttonIcon"}>
          {audioEnabled ? <Audio /> : <AudioClose />}
        </div>
        <div className={"text"}>Mic</div>
      </div>
    </button>

    <button
      disabled={!joinState}
      onClick={handleLeave}
      className={"button"}
    >
      <div className={"buttonInner"}>
        <div className={"buttonIcon"}>
          <Exit />
        </div>
        <div className={"text"}>Leave</div>
      </div>
    </button>
  </StyledWrap>
}

export default Buttons
