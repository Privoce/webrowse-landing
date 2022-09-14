import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useGuard } from '@authing/guard-react'
import Logo from "../images/logo.png";

const Navbar = ({ curr = "home", updateUser = null }) => {
  const guard = useGuard()
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    guard.start('#AUTHING_GUARD').then(userInfo => {
      setUser(userInfo)
    })
  }, [])

  // 及时地同步给父组件
  useEffect(() => {
    if (user) {
      guard.hide();
      updateUser && updateUser(user);
    }
  }, [user]);
  const handleLogin = () => {
    guard.show()
  };
  const handleOauth = (evt) => {
    if (!user) {
      evt.preventDefault();
      alert("Please Login First");
    }
  };
  return (
    <>
      <NavStyles className="navbar">
        <div className="coupon">
          <div className="intro">
            <span>Get 3 months of Webrowse Pro on us.</span>
            <span>Promo Code: PRO2022</span>
          </div>
          <button className="btn">Get Started</button>
        </div>
        <div className="head">
          <div className="left">
            <img src={Logo} className="logo" alt="webrowse logo" />
          </div>
          <div className="middle">
            <a className={`link ${curr == "home" ? "curr" : ""}`} href="/#home">
              Home
            </a>
            <a
              className={`link ${curr == "pricing" ? "curr" : ""}`}
              href="/pricing"
            >
              Pricing
            </a>
            <a
              className={`link`}
              onClick={handleOauth}
              href={`/oauth?uid=${user?.id}&uname=${user?.username}`}
              target="_blank"
            >
              Community
            </a>
            <a className={`link`} href="/blog/" target="_blank">
              Blog
            </a>
          </div>
          <div className="right">
            {user ? (
              <a className="btn login" href="/passport">
                {user.username}
              </a>
            ) : (
              <button className="btn login" onClick={handleLogin}>
                Log In
              </button>
            )}
            <a
              href="https://calendly.com/hansu/han-meeting"
              target="_blank"
              className="btn typeform"
            >
              Request Demo
            </a>
            {/* <a className="btn add" target="_blank" href="https://chrome.google.com/webstore/detail/webrowse-sync-tabs-with-y/nnbkebemeehfhiimeghnkdocfbeogenn/related">Add to Chrome</a> */}
          </div>
        </div>
      </NavStyles>
    </>
  );
};

const NavStyles = styled.nav`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  .coupon {
    background: #212026;
    padding: 16px 110px;
    display: none;
    justify-content: space-between;
    align-items: center;
    gap: 35px;
    @media screen and (max-width: 1100px) {
      padding: 16px 20px;
    }
    .intro {
      justify-content: space-between;
      display: flex;
      width: 100%;
      color: #fff;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 38px;
    }
    .btn {
      cursor: pointer;
      white-space: nowrap;
      background: none;
      font-weight: 500;
      font-size: 22px;
      line-height: 31px;
      color: #18bfff;
      padding: 4px 8px;
      border-radius: 8px;
      border: 3px solid #18bfff;
    }
  }
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    padding: 15px 110px;
    .left {
      display: flex;
      align-items: center;
      .logo {
        width: 203px;
        height: 36px;
      }
      .title {
        text-transform: capitalize;
        font-size: 20px;
        line-height: 25px;
        color: #fff;
        margin-right: 32px;
      }
    }
    .middle {
      display: flex;
      gap: 20px;
      .link {
        color: #787878;
        font-size: 14px;
        line-height: 18px;
        text-decoration: none;
        &:hover {
          color: #056cf2;
        }
        &.curr {
          border-bottom: 1px solid #787877;
        }
      }
    }
    .right {
      display: flex;
      gap: 16px;
      font-size: 16px;
      @media screen and (max-width: 414px) {
        display: none;
      }
      .btn {
        cursor: pointer;
        text-decoration: none;
        border-radius: 50px;
        background: #52edff;
        border: none;
        font-size: 14px;
        font-weight: bold;
        padding: 12px 24px;
        color: #000;
        display: flex;
        align-items: center;

        &.login {
          background: none;
          color: #52edff;
          border: 2px solid #52edff;
        }
      }
    }
    @media screen and (max-width: 414px) {
      padding: 15px 10px;
      .left {
        .logo {
          width: 160px;
          height: auto;
        }
      }
    }
  }
`;

export default Navbar;
