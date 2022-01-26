import React, { useState, } from "react"
import styled, { keyframes } from 'styled-components';
import WhatCanDo from "../components/home/WhatCanDo";
import WorksForYou from "../components/home/WorksForYou";
import AnimateBrowser from '../components/AnimateBrowser'
import SEO from '../components/SEO/webrowse';
import WebrowseFooter from "../components/WebrowseFooter";
import Downloads from "../components/home/Downloads";
import Improves from "../components/home/Improves";
import Navbar from "../components/Navbar";
import Privacy from '../components/home/Privacy';

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
    padding-top: 240px;
    background-color:#19181D ;
  
  img {
    max-width: 100%;
  }

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
        height: auto;
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
        max-width: 960px;
        text-align: center;
        margin-bottom: 38px;
        animation-delay: .4s;
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
        animation-delay: 1s;
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


const HomePage = () => {
  return (
    <>
      <SEO />
      <StyledContainer className="viewport" id='home'>
        <img className="bg blob left" src="https://static.nicegoodthings.com/project/ext/wb.left-middle-blob.png" alt="blob" />
        <img className="bg blob right" src="https://static.nicegoodthings.com/project/ext/wb.right-top-blob.png" alt="blob" />
        <img className="bg dots left" src="https://static.nicegoodthings.com/project/ext/wb.dots.left.btm.png" alt="dots" />
        <img className="bg dots right" src="https://static.nicegoodthings.com/project/ext/wb.dots.right.top.png" alt="dots" />
        <Navbar />
        <div className="wrapper">
          <AnimateBrowser />
          <h2 className="header">
            <span className="line">Browse websites together</span>
            <span className="line">with your teammates</span>
          </h2>
          <p className="desc">
            Webrowse helps your team to seamlessly collaborate in real time <br/>
            via a shared browsing window during your online meetings.<br/>
            Webrowse syncronizes your browser tabs that creates for an experience<br/>
            that is more interactive, organized, and secure than screen sharing.
          </p>
          <div className="download">
            <a className="btn" target="_blank" href="https://chrome.google.com/webstore/detail/webrowse-sync-tabs-with-y/nnbkebemeehfhiimeghnkdocfbeogenn/related">Add to Chrome</a>
            <a href="#links" className="links">Other Browsers Extensions</a>
          </div>
        </div>
      </StyledContainer>
      <WhatCanDo />
      <WorksForYou />
      <Improves />
      <Downloads />
      <Privacy />
      <WebrowseFooter />
    </>
  )
}
export default HomePage
