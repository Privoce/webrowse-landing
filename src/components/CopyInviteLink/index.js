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

const AniFadeOut = keyframes`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100% {
    opacity: 0; 
  }
`;


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
  
  .iconCopyWrap {
    position: relative;
  }
  
  .copied {
    .tipBar {
      animation: ${AniFadeOut} 1s ease;
      animation-direction: alternate;

      position: absolute;
      left: 50%;
      top: 40px;
      min-width: 320px;
      transform: translateX(-50%);
      background: #616161;
      height: 48px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      &Text {
        margin-left: 10px;
        font-size: 24px;
      }
      &:after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border: 10px solid #616161;
        border-left-color: transparent;
        border-top-color: transparent;
        border-right-color: transparent;
        top: -20px;
        left: 50%;
        margin-left: -10px;
      }
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
    let invite = new URLSearchParams(location.search).get('invite');
    setLink(`https://webrow.se/i#${invite}`);
  });

  const handleCopy = () => {
    const message = {
      source: 'webrow.se',
      payload: {},
      event: 'copy',
    };

    // 发送消息
    window.postMessage(message,"*");
    copyToClipboard(link);
    setCopied(true);
  }

  useEffect(() => {
    window.addEventListener('message', (ev) => {
      const {
        source,
        event,
      } = ev.data || {};

      // 监听来自 webrowse.ext 的消息 且 event = copied
      if (!(source === 'webrowse.ext' && event === 'copied')) return;

      setCopied(true);
    });
  }, []);

  return <Styles>
    <div className="bar">
      <i className="icon">
        <IconLink />
      </i>
      <span className="link">{link}</span>
      <div
        className={`icon ${copied ? "copied" : ""} iconCopyWrap`}
        onAnimationEnd={() => setCopied(false)}
        onClick={handleCopy}>
        <IconCopy />
        {
          copied &&
          <div className='tipBar'>
            <IconLink />
            <span className='tipBarText'>Link Copied to Clipboard</span>
          </div>
        }
      </div>
    </div>
  </Styles>
}

export default CopyInviteLink
