/**
 * @author: laoona
 * @date:  2022-03-03
 * @time: 15:33
 * @contact: laoona.com
 * @description: #
 */

import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Logo from '../images/logo.png'
import CopyInviteLink from '../components/CopyInviteLink'
import Pic from '../images/features.png'

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
  width: 100%;

  .header {
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__checked {
      gap: 100px;
    }
  }

  .pic {
    display: block;
    width: 850px;
  }

  .checkBar {
    padding: 34px 0;
    
    color: #fff;
    font-size: 24px;

    .check {
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    .input {
      position: absolute;
      z-index: -1;
      opacity: 0;

      &:checked + .square {
        &:after {
          position: absolute;
          left: 4px;
          top: 4px;
          width: 11px;
          height: 24px;
          display: table;
          border: 2px solid #fff;
          border-top: 0;
          border-left: 0;
          transform: rotate(45deg) scale(1) translate(-50%, -50%);
          opacity: 1;
          transition: all .2s cubic-bezier(.12, .4, .29, 1.46) .1s;
          content: '';
        }
      }
    }

    .square {
      position: relative;
      width: 24px;
      height: 24px;
      border: 2px solid #fff;
      border-radius: 4px;
      margin-right: 14px;
    }

    .label {

    }
  }
`

const _show = window.localStorage.getItem('show');

const Started = () => {
  const [show, setShow] = useState(true);

  const handleChange = (e) => {
    const {checked} = e.target;

    let tmp = _show;

    if (checked) {
      if (_show === null)  {
        tmp = '1';
      } else {
        tmp = _show === '1' ? '0' : '1';
      }
    }

    window.localStorage.setItem('show', tmp);
  };

  useEffect(() => {
    const show = window.localStorage.getItem('show') === '1'
    setShow(show);
  }, []);

  return <Styled>
    <div className='header'>
      <img className='logo' src={Logo} alt='Webrowse' />
    </div>

    <div className={`main ${show ? 'main__checked' : ''}`}>
      <div className='text'>
        <h2 className='title'>Let’s Get Started!</h2>
      </div>

      <CopyInviteLink />

      {
        !show && <img className='pic' src={Pic} alt='Webrowse' />
      }

      <div className='checkBar'>
        <label className='check'>
          <input onChange={handleChange} className='input' type={'checkbox'} />
          <span className='square' />
          <span className='label'>
            {
              show ? 'Show Tutorial' : 'Hide Tutorial on Next Launch'
            }
          </span>
        </label>
      </div>
    </div>
  </Styled>
}

export default Started
