/**
 * @author: laoona
 * @date:  2022-03-03
 * @time: 15:33
 * @contact: laoona.com
 * @description: #
 */

import React from 'react';
import styled from 'styled-components';
import Logo from '../images/logo.png';
import CopyInviteLink from '../components/CopyInviteLink';

const Styled = styled.section`
  min-height: 100vh;
  background-color: rgba(25, 24, 29, 1);
  background-repeat: no-repeat;
  background-image: url(https://static.nicegoodthings.com/project/ext/wb.right-top-blob.png), url(https://static.nicegoodthings.com/project/ext/wb.left-middle-blob.png);
  background-position: top right, left 232px;
  background-size: contain;
  
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 100%;
  //overflow: hidden;
  width: 100%;
  
  .header{
    display: flex;
    padding: 20px 90px;
    .logo {
      width: 203px;
    }
  }

  .bg {
    position: absolute;
    pointer-events: none;
    img {
      max-width: 100%;
    }
    &.blob {
      &.left {
        left: 0;
        top: 70%;
        height: 1100px;
      }

      &.right {
        right: 0;
        top: 0;
        height: 1000px;
      }
    }
  }

  .text {
    margin-top: 27px;
    text-align: center;
    font-weight: 700;

    .title {
      font-size: 64px;
      color: rgba(255, 255, 255, 1);
      line-height: 80px;
    }
  }
  .main {
    position: relative;
    height: 100%;
  }
`;

const Started = () => {
  return <Styled>
    <div className="header">
      <img className='logo' src={Logo} alt="Webrowse" />
    </div>

    <div className='main'>
      <div className='text'>
        <h2 className='title'>Let’s Get Started!</h2>
      </div>

      <CopyInviteLink />
    </div>

  </Styled>
};

export default Started;
