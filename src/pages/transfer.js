import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useGuard } from '@authing/guard-react'

import { appId, GuardConfig } from '../constants/guardConfig';
const StyledTip = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo {
    width: 80px;
    height: 80px;
    padding: 4px;
    border-radius: 50%;
    border: 1px solid #eee;
    margin-bottom: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .txt {
    color: #555;
    padding: 40px;
    line-height: 1.4;
    font-size: 34px;
    font-weight: 800;
    white-space: pre-line;
    word-break: break-all;
    &.error {
      color: red;
    }
  }
`;
const Result = ({ children }) => (
    <StyledTip>
        <div className="logo">
            <img
                alt="Webrowse Logo"
                src="https://static.nicegoodthings.com/works/vera/webrowse.logo.png"
            />
        </div>
        {children}
    </StyledTip>
);
const LandingUrl = 'https://webrow.se#howto';
export default function WebrowseTransfer() {
    const guard = useGuard()
    const [checkingLogin, setCheckingLogin] = useState(true)
    const [tip, setTip] = useState('');

    useEffect(() => {
        const init = async () => {
            let rid = new URLSearchParams(location.search).get('r');
            let wid = new URLSearchParams(location.search).get('w');
            if (rid) {
                const authClient = await guard.getAuthClient();
                let user = await authClient.getCurrentUser();
                if (user) {
                    // 把用户信息同步到webrowse扩展
                    document.dispatchEvent(new CustomEvent('WEBROWSE_ROOM_EVENT', { detail: { user } }));
                }
                document.dispatchEvent(new CustomEvent('WEBROWSE_ROOM_EVENT', { detail: { rid, wid } }));
                // 注入成功
                location.href = LandingUrl;
            } else {
                setTip(`Webrowse Transfer URL params error: \n\r ${rid}`);
            }
            setCheckingLogin(false)
        };
        init();
    }, []);

    // 暂未检测
    if (checkingLogin) {
        return (
            <Result>
                <div className="txt">Checking Webrowse</div>
            </Result>
        );
    }
    if (tip)
        return (
            <Result>
                <div className="txt error">{tip}</div>
            </Result>
        );
    return null;
}