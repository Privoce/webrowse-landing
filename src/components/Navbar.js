import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { AuthingGuard } from '@authing/react-ui-components'
// 引入 css 文件
import '@authing/react-ui-components/lib/index.min.css';
import GuardConfig, { appId } from '../constants/guardConfig'
const Navbar = ({ curr = 'home', updateUser = null }) => {
  const [user, setUser] = useState(null);
  const [guardVisible, setGuardVisible] = useState(false);
  // 及时地同步给父组件
  useEffect(() => {
    updateUser && updateUser(user)
  }, [user]);
  const handleGuardLoad = async (authClient) => {
    let currUser = await authClient.getCurrentUser();
    console.log({ currUser });
    // const { userInfo, session } = authingResp;
    if (currUser) {
      setGuardVisible(false);
      setUser(currUser);
    }
  };
  const handleGuardLogin = async (user) => {
    console.log('login', { user });
    setUser(user);
    setGuardVisible(false);
  };
  const handleGuardClose = () => {
    setGuardVisible(false);
  };
  const handleRegComplete = (user) => {
    setUser(user);
    setGuardVisible(false);
  };
  const handleLogin = () => {
    setGuardVisible(true)
  }
  return (
    <>
      <AuthingGuard
        visible={guardVisible}
        onRegisterInfoCompleted={handleRegComplete}
        // onRegister={handleReg}
        onClose={handleGuardClose}
        onLogin={handleGuardLogin}
        onLoad={handleGuardLoad}
        appId={appId}
        config={GuardConfig}
      />
      <NavStyles className="navbar">
        <div className="left">
          <img src="https://static.nicegoodthings.com/project/ext/wb.logo.png" className="logo" alt="webrowse logo" />
          <h2 className="title">
            webrowse
          </h2>
        </div>
        <div className="middle">
          <a className={`link ${curr == 'home' ? 'curr' : ""}`} href="/#home" >Home</a>
          <a className={`link ${curr == 'pricing' ? 'curr' : ""}`} href="/pricing" >Pricing</a>
          <a className={`link`} href="https://discord.gg/9SrEhwXz" target="_blank" >Discord</a>
        </div>
        <div className="right">
          {user ? <a className="btn login" href="#">{user.username}</a> : <button className="btn login" onClick={handleLogin}>Log In</button>}
          <a href="https://cron.com/han/bs4y4zus" target="_blank" className="btn typeform">Request Demo</a>
          {/* <a className="btn add" target="_blank" href="https://chrome.google.com/webstore/detail/webrowse-sync-tabs-with-y/nnbkebemeehfhiimeghnkdocfbeogenn/related">Add to Chrome</a> */}
        </div>
      </NavStyles>
    </>
  )
}

export const NavStyles = styled.nav`
    position: absolute;
    left: 0;
    top:0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    padding:15px 110px;
    @media screen and (max-width: 414px) {
      padding:15px 20px;
      }
    .left{
      display: flex;
      align-items: center;
      .logo{
        width:32px;
        height:32px;
        margin-right: 8px;
      }
      .title{
        text-transform: capitalize;
        font-size: 20px;
        line-height: 25px;
        color: #fff;
        margin-right: 32px;
      }
    }
    .middle{
        display: flex;
        gap:20px;
        .link{
          color:#787878;
          font-size: 14px;
          line-height: 18px;
          text-decoration: none;
          &:hover{
            color: #056CF2;
          }
          &.curr{
            border-bottom: 1px solid #787877;
          }
        }
    }
    .right{
      display: flex;
      gap:16px;
      font-size: 16px;
      @media screen and (max-width: 414px) {
        display: none;
      }
      .btn{
        cursor: pointer;
        text-decoration: none;
        border-radius: 50px;
        background: #52EDFF;
        border:none;
        font-size: 14px;
        font-weight: bold;
        padding: 12px 24px;
        color: #000;
        display: flex;
        align-items: center;
        
        &.login{
          background: none;
          color:#52EDFF;
          border:2px solid #52EDFF
        }
      }
    }
`

export default Navbar
