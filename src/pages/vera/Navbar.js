import React from "react"
import styled from "styled-components"
import ScrollSpy from 'react-scrollspy-navigation';
import { downloadLink } from './const'

const Navbar = () => {
  return (
    <NavStyles className="navbar">
      <div className="left">
        <img src="https://static.nicegoodthings.com/works/vera/popup.vera.logo.png" className="logo" alt="webrowse logo" />
        <h2 className="title">
          vera
        </h2>
      </div>
      <div className="middle">
        <ScrollSpy className="curr">
          <a className={`link`} href="#home" ref={React.createRef()}>Home</a>
          <a className={`link`} href="#howto" ref={React.createRef()}>How It Works</a>
        </ScrollSpy>
      </div>
      <div className="right">
        <a className="btn login" href="#">Log In</a>
        <a className="btn add" target="_blank" href={downloadLink}>Add to Chrome</a>
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
      color: #A700C5;
      margin-right: 32px;
    }
    
  }
  .middle{
      display: flex;
      gap:20px;
      .link{
        color:#606368;
        font-size: 14px;
        line-height: 18px;
        text-decoration: none;
        &:hover{
          color: #A700C5;
        }
        &.curr{
          color:#000;
          border-bottom: 1px solid #000;
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
      text-decoration: none;
      border-radius: 5px;
      background: #A700C5;
      border:none;
      font-weight: bold;
      padding: 12px 16px;
      color: #fff;
      display: flex;
      align-items: center;
      &.login{
        background: none;
        color:#A700C5;
        border:2px solid #A700C5
      }
    }
  }
`

export default Navbar
