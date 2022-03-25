/**
 * @author: laoona
 * @date:  2022-03-21
 * @time: 22:42
 * @contact: laoono.com
 * @description: #
 */
import { Audio, AudioClose, Video, VideoClose } from "../Icon"
import React from "react"
import styled from "styled-components"

const StyledButton = styled.div`
  .button {
    border: none;
    background: none !important;
    cursor: pointer;
    margin: 0 !important;
    width: auto !important;
    height: auto !important;

    &:disabled {
      opacity: 0.3;
    }

    &Icon {
      position: relative;
      width: 48px;
      height: 48px;
      background-color: #f26b4d;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;

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
    .level {
      transition: height 0.3s;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0;
      background-color: rgba(0, 0, 0, .35);
    }
  }
`

const iconMap = new Map([
  ['mic', [<Audio/>, <AudioClose/>]],
  ['cam', [<Video/>, <VideoClose/>]],
])
const textMap = new Map([
  ['mic', 'Mic'],
  ['cam', 'Cam']
])

const Button = (
  {
    onClick = () => {
    },
    label = true,
    disabled = false,
    volumeLevel = 0,
    type = 'mic',
  }) => {
  return <StyledButton>
    <button
      onClick={onClick}
      className={"button"}
    >
      <div className={"buttonInner"}>
        <div className={"buttonIcon"}>
          {
            iconMap.get(type)?.[!disabled ? 0 : 1]
          }
          <span style={{height: `${volumeLevel * 100}px`}} className="level"/>
        </div>
        { label && <div className={"text"}>{
          type.replace(type[0], type[0].toUpperCase())
        }</div>}
      </div>
    </button>
  </StyledButton>
}

export default Button
