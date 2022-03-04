/**
 * @author: laoona
 * @date:  2022-03-03
 * @time: 17:37
 * @contact: laoona.com
 * @description: #
 */
import React, { useState, useEffect } from "react"
import styled, { keyframes } from "styled-components"
import { IconLink, IconCopy } from "./Icon"

const AniBubbles = keyframes`
  0% {
    transform: translateY(0) translateX(-50%);
    opacity: 1;
  }

  100% {
    transform: translateY(-40px) translateX(-50%);
    opacity: 0;
  }
`

const Styles = styled.div`
  display: flex;
  justify-content: center;

  .bar {
    margin: 40px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 29px;
    height: 58px;
    border: 2px solid #fff;
    min-width: 336px;
    padding: 0 20px;
  }

  .icon {
    font-size: 24px;
    color: #fff;

    :last-of-type {
      cursor: pointer;
    }
  }

  .link {
    position: relative;
    flex: 1;
    margin: 0 20px 0 10px;
    text-align: center;
    color: #fff;
    font-size: 24px;

    :after {
      content: '';
      position: absolute;
      width: 1px;
      height: 24px;
      background-color: #fff;
      top: 50%;
      right: -10px;
      margin-top: -12px;
    }
  }

  .copy {
    position: relative;

    :after {
      animation: ${AniBubbles} 1s;
      animation-fill-mode: both;

      left: 50%;
      transform: translateX(-50%);
      content: 'copid';
      position: absolute;
      background-color: rgba(0, 0, 0, .75);
      font-size: 18px;
      padding: 2px 20px;
      border-radius: 20px;
    }
  }
`

const copyToClipboard = (txt) => {
  const input = document.createElement("textarea")
  document.body.appendChild(input);
  input.style.cssText = 'position: fixed; z-index: -9999999';
  input.value = txt
  // input.focus()
  input.select()
  document.execCommand("Copy")
  input.remove()
};

const CopyInviteLink = () => {
  const [copied, setCopied] = useState(false)
  const [link, setLink] = useState('')

  useEffect(() => {
    let _link = new URLSearchParams(location.search).get('link');
    setLink(decodeURIComponent(_link));
  });

  const handleCopy = () => {
    copyToClipboard(link);
    setCopied(true);
  }

  return <Styles>
    <div className="bar">
      <i className="icon">
        <IconLink />
      </i>
      <span className="link">{link}</span>
      <i
        className={`icon ${copied ? "copy" : ""}`}
        onAnimationEnd={() => setCopied(false)}
        onClick={handleCopy}>
        <IconCopy />
      </i>
    </div>
  </Styles>
}

export default CopyInviteLink
