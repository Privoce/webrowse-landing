import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import btn_css from '../constants/ButtonCss'

const StyledWrapper = styled.section`
position: relative;
  width:100vw;
  height:100vh;
  background:#fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  .tip{
      display: flex;
      flex-direction: column;
      align-items: center;
    color: #44494F;
    font-weight: bold;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    gap: 10px;
    em{
        font-weight: 600;
    }
    .warning{
        color: orange;
        font-size: 20px;
        line-height: 28px;
    }
  }
  .btn{
    background-color: #52E9FB;
    border-radius: 20px;
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    line-height: 18px;
    padding: 4px 12px;
    text-decoration: none;
    &.disable{
        background-color: #aaa;
        pointer-events: none;
    }
  }
  footer{
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    color:#44494F;
    display: flex;
    align-items: center;
    gap: 8px;
    .logo{
        width:32px ;
        height: 32px;
    }
  }
`;
const StyledDownloads = styled.section`
    padding:10px 0;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:64px ;
    >.title{
        color: #1C1C1E;
      /* font-weight: bold; */
      font-weight: 500;
        font-size: 18px;
        line-height: 20px;
    }
    .browsers{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 96px;
      .bro{
        color:inherit;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        img{
          width:64px ;
          height: 64px;

        }
        .name{
          font-size: 14px;
          line-height: 14px;
          text-align: center;
          @media screen and (max-width: 414px) {
            width: 64px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .link{
          margin-top: 8px;
          text-transform: capitalize;
          ${btn_css}
          &.soon{
            background: rgba(255, 255, 255, 0.2);
          }
        }
      }
    }
`;
const extId = `nnbkebemeehfhiimeghnkdocfbeogenn`;
const checkExtensionInstalled = (extid) => {
    extid = extid || 'ccegbnlnelhgaefimiaklaindffpfcmh';
    const checkUrl = `chrome-extension://${extid}/assets/icon/logo.png`;
    return new Promise((resolve) => {
        let img = document.createElement('img');
        img.src = checkUrl;
        img.onload = () => {
            resolve(true);
        };
        img.onerror = () => {
            resolve(false);
        };
    });
};
export default function InvitePage() {
    const [rand, setRand] = useState('');
    const [loading, setloading] = useState(true);
    const [installed, setInstalled] = useState(true);
    const [disallow, setDisallow] = useState(false);
    const [link, setLink] = useState("");
    const [title, setTitle] = useState("");
    const [err, setErr] = useState("");
    useEffect(() => {
        const rand = location.hash.split('#')?.[1];
        if (rand) {
            setRand(rand)
        }
        const checkExtInstall = async () => {
            const installed = await checkExtensionInstalled(extId);
            setInstalled(installed)
        }
        checkExtInstall()
    }, [])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(`https://vera.nicegoodthings.com/invite/${rand}`);
                const obj = await resp.json();
                console.log({ obj });
                if (!obj) {
                    setErr("空数据");
                    return;
                }
                const { roomId, winId, win, activeUsers } = obj;
                setLink(`https://nicegoodthings.com/transfer/wb/${roomId}?wid=${winId}&extid=${extId}`)
                setTitle(win?.title || "Temporary Window")
                setloading(false);
                // 检查参与人数的限制
                if (win.user && win.user.level == 0 && activeUsers.length >= 5) {
                    setDisallow(true);
                }
            } catch (error) {
                setErr("API 有误")
            }

        }
        if (rand) {
            fetchData()
        }
    }, [rand])
    if (err) {
        return <StyledWrapper style={{ color: '#fff' }}>
            <div className="tip">
                {err}
            </div>
        </StyledWrapper>
    }
    return (
        loading ? null : <StyledWrapper>
            <div className="tip">
                <p>You're invited to join <em>{title}</em></p>
                {disallow && <p className="warning">Active users over the limit, contact the inviter please.</p>}
            </div>
            <a className={`btn ${(!installed || disallow) ? "disable" : ''}`} href={link} rel="noopener noreferrer">Join Now</a>
            {!installed && <StyledDownloads id="links">
                <h2 className="title">Install Webrowse Extension First</h2>
                <ul className="browsers">
                    <li className="bro">
                        <img src="https://static.nicegoodthings.com/project/vera/wb.chrome.png" alt="chrome browser icon" />
                        <span className="name">Chrome</span>
                        <a className="link" href="https://chrome.google.com/webstore/detail/webrowse-sync-tabs-with-y/nnbkebemeehfhiimeghnkdocfbeogenn" target="_blank" rel="noopener noreferrer">
                            download
                        </a>
                    </li>
                    <li className="bro">
                        <img src="https://static.nicegoodthings.com/project/vera/wb.edge.png" alt="chrome browser icon" />
                        <span className="name">Edge</span>
                        <a className="link" href="https://chrome.google.com/webstore/detail/webrowse-sync-tabs-with-y/nnbkebemeehfhiimeghnkdocfbeogenn" target="_blank" rel="noopener noreferrer">
                            download
                        </a>
                    </li>
                    <li className="bro">
                        <img src="https://static.nicegoodthings.com/project/vera/wb.firefox.png" alt="chrome browser icon" />
                        <span className="name">Coming soon</span>
                        <a className="link soon" href="#" rel="noopener noreferrer">
                            Coming soon
                        </a>
                    </li>
                    <li className="bro">
                        <img src="https://static.nicegoodthings.com/project/vera/wb.safari.png" alt="chrome browser icon" />
                        <span className="name">Coming soon</span>
                        <a className="link soon" href="#" rel="noopener noreferrer">
                            Coming soon
                        </a>
                    </li>
                </ul>
            </StyledDownloads>}

            <footer>
                <img className="logo" src="https://static.nicegoodthings.com/project/ext/webrowse.logo.png" alt="logo" />
                <span className="title">Webrowse</span>
            </footer>
        </StyledWrapper>
    )
}
