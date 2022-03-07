import React from 'react'
import Logo from '../images/logo.blue.png';
import Pic from '../images/bg1.png';

import styled from 'styled-components';

const StyledTip = styled.section`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 20px;
  
  font-size: 100px;
  color:#fff;
  background: rgba(231, 241, 255, 1);
  
  .header{
    display: flex;
    padding: 20px 90px;
    .logo {
      width: 203px;  
    }
  }
  .text {
    margin-top: 27px;
    text-align: center;
    font-weight: 700;
    
    .title {
      font-size: 64px;
      color: rgba(5, 108, 242, 1);
      line-height: 80px;
    }
    .desc {
      margin-bottom: 37px;
      font-size: 24px; 
      line-height: 30px;
      color: rgba(0, 0, 0, 1);
    }
  }
  .content{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #056CF2;
    .pic {
      width: 782px;
    }
  }
  .arrow{
    position: absolute;
    top: 10px;
    right: 100px;
    /* height: 50%; */
    width: 220px;
  }
`;
export default function Guiding() {

  return (
    <StyledTip>
      <img className="arrow" src="https://static.nicegoodthings.com/project/ext/webrowse.logined.line.arrow.png" alt="arrow" />
      <div className="header">
        <img className='logo' src={Logo} alt="Webrowse" />
      </div>

      <div className='text'>
        <h2 className='title'>Getting Started</h2>
        <p className='desc'>Open the extension to get started</p>
      </div>

      <div className="content">
        <img className="pic" src={Pic} alt="logined" />
      </div>
    </StyledTip>
  )
}
