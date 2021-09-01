import React from "react"
import styled from 'styled-components';
const StyledContainer = styled.section`
min-height: 100vh;
    padding-top: 72px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-image: url('https://static.nicegoodthings.com/works/vera/wb.home.bg.dots.png'),url('https://static.nicegoodthings.com/works/vera/wb.home.bg.dots.png'),url('https://static.nicegoodthings.com/works/vera/wb.home.bg.left.top.png'),url('https://static.nicegoodthings.com/works/vera/wb.home.bg.right.btm.png');
    background-size: 270px auto,270px auto,120px auto,180px auto;
    background-position: 100% -160px,0 30vh,0 150px,right bottom;
  >.header{
    margin-top: 180px;
    font-weight: 800;
    font-size: 72px;
    line-height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
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

const HomePage = () => {
  return (
    <StyledContainer>
      <h2 className="header">
        <span className="line">Browse websites together</span>
        <span className="line">with your teammates</span>
      </h2>
      <p className="desc">Webrowse helps your team easily collaborate via a shared browsing window during your online meetings. </p>
      <a className="btn" target="_blank" href="https://chrome.google.com/webstore/detail/webrowse-sync-tabs-with-y/nnbkebemeehfhiimeghnkdocfbeogenn/related">Add to Chrome</a>
    </StyledContainer>
  )
}

export default HomePage
