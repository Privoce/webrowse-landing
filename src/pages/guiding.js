import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components';
const AniF = keyframes`
  from{
    opacity:1;
  }
  to{
    opacity:0.3;
  }
`;
const StyledTip = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  color:#fff;
  font-weight: 800;
  background: linear-gradient(135deg, #3C8CE7 0%, #00EAFF 100%);
  .content{
    grid-row: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.4em;
    > .desc{
      font-weight: bold;
      font-size: .36em;
      line-height: 0.44em;
    }
    .steps{
      display: flex;
      justify-content: space-around;
      gap: .95em;
      .step{
        width:2.4em;
        img{
          filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.29));
          border-radius: .1em;
          width:100%;
        }
        .tip{
          font-weight: normal;
          margin-top: .2em;
          text-align: center;
          line-height: 1.4;
          display: flex;
          flex-direction: column;
          gap: .5em;
          font-size: .2em;
        }
      }
    }
  }
  .logo{
    margin-top: 100px;
    font-weight: normal;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: .2em;
    line-height: .2em;
    color: #44494F;
    img{
      width: 32px;
      height: 32px;
    }
  }
  .arrow{
    position: absolute;
    top: .2em;
    right: 50px;
    /* height: 50%; */
    width: 222px;
    animation: ${AniF} 1s ease infinite;
   animation-direction: alternate;
  }
`;
export default function Guiding() {
  useEffect(() => {
    document.title = "Webrowse Guiding Page"
  }, [])
  return (
    <StyledTip>
      <img className="arrow" src="https://static.nicegoodthings.com/project/ext/arrow.up.png" alt="arrow" />
      <div className="content">
        <div className="desc">Get started in 3 simple steps</div>
        <ul className="steps">
          <li className="step">
            <img src="https://static.nicegoodthings.com/works/vera/4cO1rX.png" alt="step 1" />
            <div className="tip">
              <i className="num">1.</i>
              <span className="desc">
                Click on the top-left puzzle icon
              </span>
            </div>
          </li>
          <li className="step">
            <img src="https://static.nicegoodthings.com/works/vera/v0pny7.png" alt="step 2" />
            <div className="tip">
              <i className="num">2.</i>
              <span className="desc">
                Pin Webrowse
              </span>
            </div>
          </li>
          <li className="step">
            <img src="https://static.nicegoodthings.com/works/vera/xV8kkq.png" alt="step 3" />
            <div className="tip">
              <i className="num">3.</i>
              <span className="desc">
                Click on Webrowse to open a shared window
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div className="logo">
        <img src="https://static.nicegoodthings.com/project/ext/webrowse.grident.logo.png" alt="logo" />
        Webrowse
      </div>
    </StyledTip>
  )
}
