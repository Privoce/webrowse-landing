import React, { useState } from "react"
import styled from "styled-components"

const Navbar = () => {
  // const [isOpen, setNav] = useState(false)

  // const toggleNav = () => {
  //   setNav(isOpen => !isOpen)
  // }
  return (
    <NavStyles>
      <div className="left">
        <img src="https://static.nicegoodthings.com/works/vera/webrowse.logo.png" className="logo" alt="webrowse logo" />
        <h2 className="title">
          webrowse
        </h2>
        <div className="links">
          <a className="link" href="#">Home</a>
          <a className="link curr" href="#intro">How It Works</a>
        </div>
      </div>
      <div className="right">
        <button className="btn login">Log In</button>
        <button className="btn add">Add to Chrome</button>
      </div>
    </NavStyles>
  )
}

export const NavStyles = styled.nav`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(185, 185, 185, 0.25);
  padding:15px 28px;
  .left{
    display: flex;
    align-items: center;
    .logo{
      width:32px;
      height:32px;
      margin-right: 5px;
    }
    .title{
      text-transform: capitalize;
      font-size: 20px;
      line-height: 25px;
      color: #9B51E0;
      margin-right: 32px;
    }
    .links{
      display: flex;
      gap:20px;
      .link{
        color:#616161;
        font-size: 14px;
        line-height: 18px;
        text-decoration: none;
        &.curr{
          color:#000;
          border-bottom: 1px solid #000;
        }
      }
    }
  }
  .right{
    display: flex;
    gap:16px ;
    .btn{
      border-radius: 5px;
      background: #9B51E0;
      border:none;
      font-weight: bold;
      padding: 12px 16px;
      color: #fff;
      &.login{
        background: none;
        color:#9B51E0;
        border:2px solid #9B51E0
      }
    }
  }
`

export default Navbar
