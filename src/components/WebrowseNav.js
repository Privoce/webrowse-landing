import React, { useState } from "react"
import styled from "styled-components"
import ScrollSpy from 'react-scrollspy-navigation';
import TypeForm from "./TypeForm";

const Navbar = () => {
  const [typeformVisible, setTypeformVisible] = useState(false);
  const toggleTypeForm = () => {
    setTypeformVisible(prev => !prev)
  }
  return (
    <>
      <NavStyles className="navbar">
        <div className="left">
          <img src="https://static.nicegoodthings.com/works/vera/wb-logo.png" className="logo" alt="webrowse logo" />
          <h2 className="title">
            webrowse
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
          <button onClick={toggleTypeForm} className="btn typeform">Join Beta Test</button>
          {/* <a className="btn add" target="_blank" href="https://chrome.google.com/webstore/detail/webrowse-sync-tabs-with-y/nnbkebemeehfhiimeghnkdocfbeogenn/related">Add to Chrome</a> */}
        </div>
      </NavStyles>
      {typeformVisible && <TypeForm closeModal={toggleTypeForm} />}
    </>
  )
}

export const NavStyles = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
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
      color: #fff;
      margin-right: 32px;
    }
    
  }
  .middle{
      display: flex;
      gap:20px;
      .link{
        color:#616161;
        font-size: 14px;
        line-height: 18px;
        text-decoration: none;
        &:hover{
          color: #056CF2;
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
      cursor: pointer;
      text-decoration: none;
      border-radius: 5px;
      background: #056CF2;
      border:none;
      font-weight: bold;
      padding: 12px 16px;
      color: #fff;
      display: flex;
      align-items: center;
      &.login{
        background: none;
        color:#056CF2;
        border:2px solid #056CF2
      }
    }
  }
`

export default Navbar
