/**
 * @author: laoona
 * @date:  2022-01-28
 * @time: 14:41
 * @contact: laoona.com
 * @description: #
 */

import React, { useContext, useEffect, useState } from "react"
import { PassportContext, UPDATE_USER } from "./context"
import styled from "styled-components"
import StyledDashboard from "./components/StyledDashboard"
import Profile from "./components/Profile"
import { AuthenticationClient } from "authing-js-sdk"
import GuardConfig, { appId } from "../../constants/guardConfig"

const StyledContainer = styled.section`
  display: flex;
  background-color: #fff;
  width: 100%;

  > .left {
    background: #FAFAFA;
    width: 200px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    padding: 20px 8px;
    box-shadow: inset -1px 0px 0px rgba(0, 0, 0, 0.06);

    > .head {
      margin-bottom: 60px;
      display: flex;
      align-items: center;
      gap: 9px;

      .logo {
        width: 32px;
        height: 32px;
      }

      .txt {
        color: #44494F;
        font-weight: 600;
        font-size: 20px;
        line-height: 20px;
      }
    }

    .nav {
      width: 100%;

      .items {
        width: 100%;
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
        padding: 0;

        .item {
          width: -webkit-fill-available;
          cursor: pointer;
          border-radius: 4px;
          color: #44494F;
          padding: 8px 16px;
          font-weight: 600;
          font-size: 12px;
          line-height: 18px;

          &.curr, &:hover {
            background-color: #52E9FB;
          }

          a {
            text-decoration: none;
            color: inherit;
          }
        }
      }
    }
  }

  .right {
    display: flex;
    flex-direction: column;
  }
`
const NavBlocks = {
  profile: {
    title: "Profile",
  },
}
const renderComponent = (key, params) => {
  let comp = null
  switch (key) {
    case "profile":
      comp = <StyledDashboard title="Profile Settings">
        <Profile {...params} />
      </StyledDashboard>
      break

    default:
      break
  }
  return comp
}

const Layout = () => {
  const [curr, setCurr] = useState("profile")
  const { dispatch } = useContext(PassportContext)

  const handleNavClick = (evt) => {
    const { key } = evt.target.dataset
    if (key === curr) return
    setCurr(key)
  }

  useEffect(() => {

    const authenticationClient = new AuthenticationClient({
      appId,
      appHost: GuardConfig.appHost,
    });

    (async () => {
      const _user = await authenticationClient.getCurrentUser()
      const {
        username,
        photo: avatar,
        token,
      } = _user || {}

      if (!_user?.token) {
        window.location.href = "/"
        return
      }

      dispatch({
        type: UPDATE_USER,
        payload: {
          username,
          avatar,
          token,
        }
      })
    })()
  }, [])

  return (<StyledContainer>
    <div className="left">
      <header className="head">
        <img className="logo" src="https://static.nicegoodthings.com/project/ext/webrowse.logo.png" alt="logo" />
        <span className="txt" >Webrowse</span>
      </header>
      <nav className="nav">
        <ul className="items">
          {Object.entries(NavBlocks).map(([key, obj]) => {
            const { link, title } = obj
            return link ? <li key={key} className="item"><a href={link} target="_blank">{title}</a></li> :
              <li
                data-key={key} onClick={handleNavClick} key={key}
                className={`item ${key === curr ? "curr" : ""}`}>{title}</li>
          })}
        </ul>
      </nav>
    </div>
    <div className="right">
      {renderComponent(curr)}
    </div>
  </StyledContainer>)
}

export default Layout
