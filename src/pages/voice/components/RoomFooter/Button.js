/**
 * @author: laoona
 * @date:  2022-03-21
 * @time: 22:42
 * @contact: laoono.com
 * @description: #
 */
import { Audio, AudioClose } from "../Icon"
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

const Button = (
  {
    onClick = () => {
    },
    label = "Mic",
    audioEnabled = true,
    volumeLevel = 0,
  }) => {
  return <StyledButton>
    <button
      onClick={onClick}
      className={"button"}
    >
      <div className={"buttonInner"}>
        <div className={"buttonIcon"}>
          {audioEnabled ? <Audio /> : <AudioClose />}
          <span style={{height: `${volumeLevel * 100}px`}} className="level"/>
        </div>
        { label && <div className={"text"}>{label}</div>}
      </div>
    </button>
  </StyledButton>
}

export default Button
