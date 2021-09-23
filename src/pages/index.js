import React from "react"
import styled from 'styled-components';
import Step from '../components/Step';
import SEO from '../components/SEO/webrowse'
import Navbar from '../components/Navbar'
const StyledContainer = styled.section`
    height: 100vh;
    padding-top: 72px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-image: url('https://static.nicegoodthings.com/works/vera/wb.home.bg.dots.png'),url('https://static.nicegoodthings.com/works/vera/wb.home.bg.dots.png'),url('https://static.nicegoodthings.com/works/vera/wb.home.bg.left.top.png'),url('https://static.nicegoodthings.com/works/vera/wb.home.bg.right.btm.png');
    background-size: 270px auto,270px auto,120px auto,180px auto;
    background-position: 100% -160px,0 30vh,0 150px,right bottom;
    @media screen and (max-width: 414px) {
      padding-top: 0;
      background-image: url('https://static.nicegoodthings.com/works/vera/wb.home.bg.left.top.png'),url('https://static.nicegoodthings.com/works/vera/wb.home.bg.right.btm.png');
      background-size: 120px auto,180px auto;
      background-position: 0 150px,right bottom;
    }
  >.header{
    margin-top: 180px;
    font-weight: 800;
    font-size: 72px;
    line-height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 414px) {
       font-size: 28px;
    }
    .line{
      position: relative;
      &:last-child:after{
          content: "";
          position: absolute;
          bottom: 20px;
          right: -20px;
          width:16px;
          height: 16px;
          border-radius: 50%;
          background:#056CF2 ;
          @media screen and (max-width: 414px) {
            bottom: 30px;
            right: -12px;
            width: 10px;
            height: 10px;
          }
      }
  }
  }
  .desc{
    font-weight: 400;
    font-size: 28px;
    line-height: 35px;
    color: #757575;
    max-width: 740px;
    text-align: center;
    margin-bottom: 64px;
  }
  .btn{
    text-decoration: none;
    color: #fff;
    font-weight: 800;
    font-size: 28px;
    line-height: 35px;
    padding: 24px 48px;
    background: linear-gradient(94.32deg, #74D6D7 0%, #056CF2 100%);
    border-radius: 15px;
  }
`;
const StyledHowTo = styled.section`
    padding-top: 72px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  >.title{
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
`;
const HomePage = () => {
  return (
    <>
      <SEO />
      <Navbar />
      <StyledContainer className="viewport" id='home'>
        <h2 className="header">
          <span className="line">Browse websites together</span>
          <span className="line">with your teammates</span>
        </h2>
        <p className="desc">Webrowse helps your team easily collaborate via a shared browsing window during your online meetings. </p>
        <a className="btn add" target="_blank" href="https://chrome.google.com/webstore/detail/webrowse-sync-tabs-with-y/nnbkebemeehfhiimeghnkdocfbeogenn/related">Add to Chrome</a>
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
        <Step />
        <Step seq={'02'} title="See which tab your teammates are viewing" desc={['Click on “tab status” to view tabs and which tab your teammates are at.', 'Clicking on any tab takes you to the tab you want to view.']} pic="https://static.nicegoodthings.com/works/vera/hucv5k.jpg" />
        <Step seq="03" title="Enable Follow Mode to View Tabs Together" desc={["Follow mode allows other users to sync tabs in real time with the host.", "When there is a host, enabling follow mode will automatically take you to the tab that the host is on."]} pic="https://static.nicegoodthings.com/works/vera/clhruI.jpg" />
        <Step seq="04" title="Chat with your teammates when cobrowsing" desc="Turn on voice channel to chat with your teammates" pic="https://static.nicegoodthings.com/works/vera/09LlYp.jpg" />
      </StyledHowTo>
    </>
  )
}

export default HomePage
