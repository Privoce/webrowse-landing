import React, { useRef } from "react"
import styled from 'styled-components';
import Navbar from './Navbar';
import { downloadLink } from './const'


const StyledContainer = styled.section`
    height: 100vh;
    padding-top: 72px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-image: url('https://static.nicegoodthings.com/works/vera/wb.home.bg.dots.png'),url('https://static.nicegoodthings.com/works/vera/wb.home.bg.dots.png'),url('https://static.nicegoodthings.com/works/vera/vera.bg.pie.png'),url('https://static.nicegoodthings.com/works/vera/vera.bg.pie.png'),url('https://static.nicegoodthings.com/works/vera/vera.bg.pink.dots.left.top.png'),url('https://static.nicegoodthings.com/works/vera/vera.bg.pink.dots.right.btm.png');
    background-size: 270px auto,270px auto,180px auto,250px auto,138px auto,220px auto;
    background-position: 100% -160px,0 30vh,50px 34vh,105% -30px,0 24vh,right bottom;
    @media screen and (max-width: 414px) {
      padding-top: 0;
      background-image: url('https://static.nicegoodthings.com/works/vera/wb.home.bg.left.top.png'),url('https://static.nicegoodthings.com/works/vera/wb.home.bg.right.btm.png');
      background-size: 120px auto,180px auto;
      background-position: 0 150px,right bottom;
    }
  >.header{
    margin-top: 200px;
    margin-bottom: 32px;
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
          background:#A700C5 ;
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
    background: linear-gradient(94.32deg, #74D6D7 0%, #A700C5 100%);
    border-radius: 15px;
  }
`;
const StyledHowTo = styled.section`
    padding: 72px 64px 0 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1800px;
    margin: 0 auto;
    >.title{
      color: #A700C5;
      font-weight: 800;
      font-size: 28px;
      line-height: 35px;
      padding:42px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media screen and (max-width: 414px) {
        text-align: center;
        padding:50px 10px;
      }
    }
    .content{
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 60px;
      .steps{
        display: flex;
        flex-direction: column;
        gap: 24px;
        flex: 1;
        .step{
          max-width: 600px;
          .title{
            user-select: none;
            cursor: pointer;
            font-weight: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 25px;
            padding:12px 16px;
            background: #F5F6F8;
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
          }
          .detail{
            display: none;
            flex-direction: column;
            gap: 30px;
            border-left: 2px solid #C4C4C4;
            margin-top: 15px;
            margin-left: 20px;
              p {
                font-weight: normal;
                font-size: 20px;
                line-height: 25px;
                padding-left: 20px;
                white-space: pre-wrap;
                a,strong{
                  color: #A700C5;
                }
            }
          }
          &.selected{ 
            .title{
            color: #fff;
            background: #A700C5;
          }
          .detail{
            display: flex;
          }
        }
        }
      }
      .pic{
        flex: 2;
        max-width: 1000px;
        img{
          width: 100%;
        }
      }
    }
`;
const HomePage = () => {
  const stepWrapper = useRef(null)
  const handleExpand = (evt) => {
    const ele = evt.target;
    const selected = stepWrapper.current.querySelector('.selected');
    selected.classList.remove('selected')
    ele.parentElement.classList.add('selected')
  }
  return (
    <>
      <Navbar />
      <StyledContainer className="viewport" id='home'>
        <h2 className="header">
          <span className="line">Watch videos together</span>
          <span className="line">with your friends</span>
        </h2>
        <p className="desc">Vera synchronizes video playback and adds live chat to your favorites video websites such as Youtube. </p>
        <a className="btn add" target="_blank" href={downloadLink}>Add to Chrome</a>
      </StyledContainer>
      <StyledHowTo id="howto">
        <h2 className="title">
          How it works.
        </h2>
        <div className="content">
          <ul className="steps" ref={stepWrapper}>
            <li className="step selected">
              <h3 className="title" onClick={handleExpand}>1. Install Vera</h3>
              <div className="detail">
                <p>Install Vera <a href={downloadLink} target="_blank" rel="noopener noreferrer">here</a> in Chrome Web Store.</p>
                <p>Remember to pin it to the Chrome tool bar for quicker access!</p>
              </div>
            </li>

            <li className="step">
              <h3 className="title" onClick={handleExpand}>2. Open a Video</h3>
              <div className="detail">
                <p>Go to a video site and open a video that you would like to watch with your friends.</p>
                <p>Now supporting: Youtube</p>
              </div>
            </li>
            <li className="step">
              <h3 className="title" onClick={handleExpand}>3. Start a Co-Watching Session</h3>
              <div className="detail">
                <p>Open the Vera extension on the video page. </p>
                <p>Once you are logged in,
                  click <strong>“Start a co-watching session”</strong> to get the party started!</p>
                <p>
                  After you started a session, you can invite your friends by sharing the link.</p>
              </div>
            </li>
            <li className="step">
              <h3 className="title" onClick={handleExpand}>4. Join a Co-Watching Session</h3>
              <div className="detail">
                <p>After you have installed Vera, clicking on any invitation link will automatically take you to the video site that is being shared.</p>
              </div>
            </li>
          </ul>
          <div className="pic">
            <img src="https://g-store.oss-cn-beijing.aliyuncs.com/works/vera.demo.png" alt="demo pic" />
          </div>
        </div>
      </StyledHowTo>
    </>
  )
}

export default HomePage
