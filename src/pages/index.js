import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import WhatCanDo from "../components/home/WhatCanDo"
import WorksForYou from "../components/home/WorksForYou"
import AnimateBrowser from "../components/AnimateBrowser"
import SEO from "../components/SEO/webrowse"
import WebrowseFooter from "../components/WebrowseFooter"
import Downloads from "../components/home/Downloads"
import Improves from "../components/home/Improves"
import Navbar from "../components/Navbar"
import Privacy from "../components/home/Privacy"

const AniF = keyframes`
  from{
    opacity:0.4;
  }
  to{
    opacity:0.1;
  }
`
const FadeIn = keyframes`
  from{
    opacity:0.1;
    transform:translateY(-10px);
  }
  to{
    opacity:1;
    transform:translateY(0);

  }
`
const StyledContainer = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  padding-top: 240px;
  background-color: #19181d;

  img {
    max-width: 100%;
  }

  .bg {
    position: absolute;
    pointer-events: none;
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
    &.dots {
      animation: ${AniF} 2s ease infinite;
      animation-direction: alternate;
      opacity: 0.4;
      &.left {
        animation-delay: 0.5s;
        left: 0;
        top: 70%;
        width: 360px;
        @media screen and (max-width: 414px) {
          width: 180px;
        }
      }
      &.right {
        right: 0;
        top: 0;
        width: 250px;
        @media screen and (max-width: 414px) {
          width: 150px;
        }
      }
    }
  }
  .wrapper {
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
    .header,
    .desc,
    .download {
      opacity: 0;
      animation: ${FadeIn} 0.5s ease-in forwards;
    }
    > .header {
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
      .line {
        white-space: nowrap;
        position: relative;
        color: #fff;
      }
    }
    .desc {
      font-weight: 400;
      font-size: 24px;
      line-height: 35px;
      color: #757575;
      max-width: 960px;
      text-align: center;
      margin-bottom: 38px;
      animation-delay: 0.4s;
      @media screen and (max-width: 414px) {
        display: none;
      }
    }
    .download {
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 32px;
      animation-delay: 1s;
      @media screen and (max-width: 414px) {
        gap: 10px;
      }
      .btn {
        width: fit-content;
        cursor: pointer;
        text-decoration: none;
        border-radius: 50px;
        background: #52edff;
        border: none;
        font-size: 14px;
        font-weight: bold;
        padding: 18px 24px;
        color: #000;
      }
      .links {
        color: #787878;
        text-decoration: none;
      }
    }
  }
`

const HomePage = () => {
  return (
    <>
      <SEO />
      <StyledContainer className="viewport" id="home">
        <img
          className="bg blob left"
          src="https://static.nicegoodthings.com/project/ext/wb.left-middle-blob.png"
          alt="blob"
        />
        <img
          className="bg blob right"
          src="https://static.nicegoodthings.com/project/ext/wb.right-top-blob.png"
          alt="blob"
        />
        <img
          className="bg dots left"
          src="https://static.nicegoodthings.com/project/ext/wb.dots.left.btm.png"
          alt="dots"
        />
        <img
          className="bg dots right"
          src="https://static.nicegoodthings.com/project/ext/wb.dots.right.top.png"
          alt="dots"
        />
        <Navbar />
        <div className="wrapper">
          <AnimateBrowser />
          <h2 className="header">
            <span className="line">Remote Browser SDK</span>
            <span className="line">Run any app anywhere with WASM</span>
          </h2>
          <p className="desc">
            Webrowse remote browser SDK is a browser compiled to WASM
            (WebAssembly) <br />
            that can be embedded to your platform easily.
            <br />
            Webrowse also provide collaborative features so that multiple agents
            <br />
            can operate the browser simutaneouly.
          </p>
          <div className="download">
            <a
              className="btn"
              target="_blank"
              href="https://calendly.com/hansu/han-meeting"
            >
              Learn More
            </a>
            <a href="#links" className="links">
              Try Browsers Extensions
            </a>
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
