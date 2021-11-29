import React, { useState } from "react"
import styled, { keyframes } from 'styled-components';
import ScrollSpy from 'react-scrollspy-navigation';
import TypeForm from "../components/TypeForm";
import Step from '../components/Step';
import AnimateBrowser from '../components/AnimateBrowser'
import SEO from '../components/SEO/webrowse';
import WebrowseFooter from "../components/WebrowseFooter";
const AniF = keyframes`
  from{
    opacity:0.4;
  }
  to{
    opacity:0.1;
  }
`;
const FadeIn = keyframes`
  from{
    opacity:0.1;
    transform:translateY(-10px);
  }
  to{
    opacity:1;
    transform:translateY(0);

  }
`;
const StyledContainer = styled.section`
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
    padding-top: 156px;
    background-color:#19181D ;
    .bg{
      position: absolute;
      pointer-events: none;
      &.blob{
        &.left{
          left:0;
          top:70%;
          height: 1100px;
        }
        &.right{
          right:0;
          top:0;
          height: 1000px;
        }
      }
      &.dots{
        animation: ${AniF} 2s ease infinite;
        animation-direction: alternate;
        opacity: .4;
        &.left{
          animation-delay: .5s;
          left:0;
          top: 70%;
          width: 360px;
          @media screen and (max-width: 414px) {
            width: 180px;
          }
        }
        &.right{
          right:0;
          top:0;
          width: 250px;
          @media screen and (max-width: 414px) {
            width: 150px;
          }
        }
      }
    }
    .navbar{
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
    }
    .wrapper{
      position: relative;
      width: 960px;
      height: 600px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      @media screen and (max-width: 414px) {
        width: 360px;
      }
      .header,.desc,.download{
        opacity: 0;
        animation: ${FadeIn} .5s ease-in forwards;
      }
      >.header{
        margin-top: 128px;
        margin-bottom: 32px;
        font-weight: 800;
        font-size: 56px;
        line-height: 70px;
        display: flex;
        flex-direction: column;
        align-items: center;
        animation-delay: 3s;
        @media screen and (max-width: 414px) {
          margin-top: 30px;
          font-size: 24px;
          line-height: 1.5;
          margin-bottom: 20px;
        }
        .line{
          white-space: nowrap;
          position: relative;
          color:#fff;
        }
      }
      .desc{
        font-weight: 400;
        font-size: 24px;
        line-height: 35px;
        color: #757575;
        max-width: 740px;
        text-align: center;
        margin-bottom: 98px;
        animation-delay: 3.4s;
        @media screen and (max-width: 414px) {
          display: none;
        }
      }
      .download{
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 32px;
        animation-delay: 4s;
        @media screen and (max-width: 414px) {
          gap:10px;
        }
        .btn{
          width: fit-content;
          cursor: pointer;
          text-decoration: none;
          border-radius: 50px;
          background: #52EDFF;
          border:none;
          font-size: 14px;
          font-weight: bold;
          padding: 18px 24px;
          color: #000;
        }
        .links{
          color: #787878;
          text-decoration: none;
        }
      }
     

    }
`;
const StyledHowTo = styled.section`
    background-color:#19181D ;
    padding-top: 72px;
    padding-bottom: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    >.title{
      color: #fff;
      font-size: 36px;
      line-height: 45px;
      padding:72px 0;
      font-weight: 800;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media screen and (max-width: 414px) {
        text-align: center;
        padding:50px 10px;
      }
    }
    .steps{
      z-index: 9;
      max-width: 960px;
      display: flex;
      justify-content: center;
      gap: 32px;
      flex-wrap: wrap;
      @media screen and (max-width: 414px) {
        justify-content: center;
      }
    }
`;
const StyledDownloads = styled.section`
    padding:80px 0 160px 0;
    background-color:#19181D;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:48px ;
    >.title{
      /* font-weight: bold; */
      font-size: 36px;
      line-height: 45px;
    }
    .browsers{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 96px;
      .bro .link{
        color:inherit;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        img{
          width:64px ;
          height: 64px;

        }
        .name{
          font-size: 14px;
          line-height: 16px;
          text-align: center;
          @media screen and (max-width: 414px) {
            width: 64px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
`;

const HomePage = () => {
  const [typeformVisible, setTypeformVisible] = useState(false);
  const toggleTypeForm = () => {
    setTypeformVisible(prev => !prev)
  }
  return (
    <>
      <SEO />
      <StyledContainer className="viewport" id='home'>
        <img className="bg blob left" src="https://static.nicegoodthings.com/project/ext/wb.left-middle-blob.png" alt="blob" />
        <img className="bg blob right" src="https://static.nicegoodthings.com/project/ext/wb.right-top-blob.png" alt="blob" />
        <img className="bg dots left" src="https://static.nicegoodthings.com/project/ext/wb.dots.left.btm.png" alt="dots" />
        <img className="bg dots right" src="https://static.nicegoodthings.com/project/ext/wb.dots.right.top.png" alt="dots" />
        <nav className="navbar">
          <div className="left">
            <img src="https://static.nicegoodthings.com/project/ext/wb.logo.png" className="logo" alt="webrowse logo" />
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
        </nav>
        {typeformVisible && <TypeForm closeModal={toggleTypeForm} />}
        <div className="wrapper">
          <AnimateBrowser />
          <h2 className="header">
            <span className="line">Browse websites together</span>
            <span className="line">with your teammates</span>
          </h2>
          <p className="desc">Webrowse helps your team easily collaborate via a shared browsing window during your online meetings. </p>
          <div className="download">
            <a className="btn" target="_blank" href="https://chrome.google.com/webstore/detail/webrowse-sync-tabs-with-y/nnbkebemeehfhiimeghnkdocfbeogenn/related">Add to Chrome</a>
            <a href="#links" className="links">Other Browsers Extensions</a>
          </div>
        </div>
      </StyledContainer>
      <StyledHowTo id="howto">
        <div className="title">
          <span>
            Learn how to cobrowse with your teammates
          </span>
          <span>
            in 4 Simple Steps
          </span>
        </div>
        <div className="steps">
          <Step seq={1} pic="https://static.nicegoodthings.com/project/ext/wb.step.1.png" />
          <Step seq={'2'} title="See which tab your teammates are viewing" desc={['Click on “tab status” to view tabs and which tab your teammates are at.', 'Clicking on any tab takes you to the tab you want to view.']} pic="https://static.nicegoodthings.com/project/ext/wb.step.2.png" />
          <Step seq="3" title="Enable Follow Mode to View Tabs Together" desc={["Follow mode allows other users to sync tabs in real time with the host.", "When there is a host, enabling follow mode will automatically take you to the tab that the host is on."]} pic="https://static.nicegoodthings.com/project/ext/wb.step.3.png" />
          <Step seq="4" title="Chat with your teammates when cobrowsing" desc="Turn on voice channel to chat with your teammates" pic="https://static.nicegoodthings.com/project/ext/wb.step.4.png" />
        </div>
      </StyledHowTo>
      <StyledDownloads id="links">
        <h2 className="title">Supported Browsers</h2>
        <ul className="browsers">
          <li className="bro">
            <a className="link" href="https://chrome.google.com/webstore/detail/webrowse-sync-tabs-with-y/nnbkebemeehfhiimeghnkdocfbeogenn/related" target="_blank" rel="noopener noreferrer">
              <img src="https://static.nicegoodthings.com/project/vera/wb.chrome.png" alt="chrome browser icon" />
              <span className="name">Chrome</span>
            </a>
          </li>
          <li className="bro">
            <a className="link" href="https://chrome.google.com/webstore/detail/webrowse-sync-tabs-with-y/nnbkebemeehfhiimeghnkdocfbeogenn/related" target="_blank" rel="noopener noreferrer">
              <img src="https://static.nicegoodthings.com/project/vera/wb.edge.png" alt="chrome browser icon" />
              <span className="name">Edge</span>
            </a>
          </li>
          <li className="bro">
            <a className="link" href="#" target="_blank" rel="noopener noreferrer">
              <img src="https://static.nicegoodthings.com/project/vera/wb.firefox.png" alt="chrome browser icon" />
              <span className="name">Coming soon</span>
            </a>
          </li>
          <li className="bro">
            <a className="link" href="#" target="_blank" rel="noopener noreferrer">
              <img src="https://static.nicegoodthings.com/project/vera/wb.safari.png" alt="chrome browser icon" />
              <span className="name">Coming soon</span>
            </a>
          </li>
        </ul>
      </StyledDownloads>
      <WebrowseFooter />
    </>
  )
}
export default HomePage
