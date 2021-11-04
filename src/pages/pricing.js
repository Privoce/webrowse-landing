import React, { useState } from "react"
import styled, { keyframes } from 'styled-components';
import { FaTwitter, FaGithub } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'
import ScrollSpy from 'react-scrollspy-navigation';
import TypeForm from "../components/TypeForm";
import SEO from '../components/SEO/webrowse';
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
          top:25%;
          height: 800px;
        }
        &.right{
          right:0;
          top:0;
          height: 789px;
        }
      }
      &.dots{
        animation: ${AniF} 2s ease infinite;
        animation-direction: alternate;
        opacity: .4;
        &.left{
          animation-delay: .5s;
          left:0;
          top: 25%;
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
      max-width: 1300px;
      /* height: 600px; */
      margin: 0 auto;
      .pricing,.plans{
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        >.title{
          font-weight: 800;
          font-size: 56px;
          line-height: 70px;
        }
      }
      .pricing{
        >.desc{
          font-weight: 600;
          font-size: 24px;
          line-height: 30px;
          text-align: center;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 64px;
        }
        .cols{
          display: flex;
          list-style: none;
          gap: 72px;
          .col{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            background: rgba(40, 40, 40, 0.8);
            border: 2px solid #FFFFFF;
            border-radius: 20px;
            padding: 20px;
            width: 326px;
            .head{
              font-weight: 800;
              font-size: 48px;
              line-height: 60px;
              margin-bottom: 16px;
            }
            >.desc{
              font-size: 18px;
              line-height: 23px;
              color: #FFFFFF;
              margin-bottom: 16px;
            }
            .price{
              margin-bottom: 19px;
              font-size: 24px;
              em{
                font-size: 200%;
              }
            }
            .btn{
              border: none;
              outline: none;
              cursor: pointer;
              padding: 12px 24px;
              background: #FFFFFF;
              border-radius: 50px;
              margin-bottom: 44px;
            }
            .feats{
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              .title{
                font-weight: bold;
                font-size: 24px;
                line-height: 30px;
                margin-bottom: 16px;
              }
              .list{
                display: flex;
                flex-direction: column;
                list-style: none;
                gap: 16.5px;
                .item{
                  position: relative;
                  margin-left: 24px;
                  &:before{
                    content:"ヘ";
                    transform: rotateX(180deg);
                    position: absolute;
                    left: -22px;
                    top: 0;
                  }
                }
              }
            }
            &.pro{
              border-width: 5px;
              border-color: #5088e3;
              .btn{
                color: #000;
                background: #52EDFF;
              }
            }
          }
        }
      }
      .plans{
        margin-top: 220px;
        padding-bottom: 84px;
        >.title{
          font-size: 36px;
          line-height: 45px;
          margin-bottom: 56px;
        }
        >.desc{
          display: flex;
          margin-bottom: 40px;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          padding:0 15px;
          .left{
            width: 290px;
            margin-right: 99px;
            .head{
              font-weight: bold;
              font-size: 36px;
              line-height: 45px;
            }
            .intro{
              font-weight: normal;
              font-size: 26px;
              line-height: 33px;
              color: rgba(255, 255, 255, 0.5);
            }
          }
          .right{
            display: flex;
            justify-content: space-between;
            gap: 52px;
            list-style: none;
            .box{
              width: 210px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              background: rgba(40, 40, 40, 0.8);
              border: 2px solid #FFFFFF;
              border-radius: 20px;
              padding: 10px 42px 26px 42px;
              .head{
                font-weight: 800;
                font-size: 32px;
                line-height: 40px;
              }
              .price{
                font-size: 24px;
                line-height: 60px;
                margin-bottom: 7px;
                em{
                  font-size: 200%;
                }
              }
              .btn{
                white-space: nowrap;
                color: #19181D;
                padding: 11px 24px;
                border: none;
                background: #FFFFFF;
                border-radius: 50px;
                font-size: 14px;
                line-height: 14px;
              }
              &.pro{
                border-width: 4px;
              border-color: #5088e3;
                .btn{
                  background: #52EDFF;
                }
              }
            }
          }
        }
        .tables{
          display: flex;
          flex-direction: column;
          gap: 45px;
          width: 100%;
          .table{
            position: relative;
            padding: 20px 30px;
            width: 100%;
            background: rgba(40, 40, 40, 0.8);
            border: 4px solid #FFFFFF;
            border-radius: 20px;
            transition: all .5s ease-in-out;
            .arrow{
              cursor: pointer;
              position: absolute;
              top: 20px;
              right: 33px;
              transition: all .5s ease-in-out;
            }
            .head{
              font-weight: bold;
              font-size: 36px;
              line-height: 45px;
              margin-bottom: 10px;
            }
            .list{
              display: flex;
              flex-direction: column;
              height: 0;
              overflow: hidden;
              
              .item{
                display: flex;
                justify-content: space-between;
                font-weight: normal;
                font-size: 24px;
                line-height: 30px;
                padding: 12px 0;
                padding-right: 80px;
                &:not(:last-child){
                  border-bottom:1px solid #828282 ;
                }
                .desc{
                  text-align: left;
                  align-self: flex-start;
                  width: 370px;
                }

              }
            }
            &.expand{
              .list{
                height: auto;
              }
              .arrow{
                transform: rotate(-90deg);
                transform-origin: center;
              }
            }
          }
        }
      }
    }
`;
const StyledFooter = styled.footer`
    background-color:#19181D;
    padding:0 112px;
    @media screen and (max-width: 414px) {
      padding:0 20px;
    }
    .wrapper{
      padding:32px 0;
      border-top: 1px solid #333;
      display: flex;
      justify-content: space-between;
      .copyright{
        color: #787878;
      }
      .socials{
        display: flex;
        gap: 10px;
        align-items: center;
      }
    }
`;

const HomePage = () => {
  const [typeformVisible, setTypeformVisible] = useState(false);
  const toggleTypeForm = () => {
    setTypeformVisible(prev => !prev)
  }
  const toggleTable = ({ currentTarget }) => {
    console.log({ currentTarget });
    let tableEle = currentTarget.parentElement;
    tableEle.classList.toggle('expand')
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
        <section className="wrapper">
          <div className="pricing">
            <h2 className="title">Pricing</h2>
            <p className="desc">Pick the perfect plan for your team</p>
            <ul className="cols">
              <li className="col free">
                <h4 className="head">Free</h4>
                <p className="desc">Fast and easy way to get started cobrowing with your team</p>
                <span className="price"><em>$0</em>/mo</span>
                <button className="btn">Add to Chrome</button>
                <div className="feats">
                  <h5 className="title">Key Features</h5>
                  <ul className="list">
                    <li className="item">Up to 10 users</li>
                    <li className="item">Up to 5 tabs</li>
                    <li className="item">Up to 5 tabs</li>
                  </ul>
                </div>
              </li>
              <li className="col pro">
                <h4 className="head">Pro</h4>
                <p className="desc">Fast and easy way to get started cobrowing with your team</p>
                <span className="price"><em>$8</em>/mo</span>
                <button className="btn">Start 14-day free trial</button>
                <div className="feats">
                  <h5 className="title">Key Features</h5>
                  <ul className="list">
                    <li className="item">Up to 10 users</li>
                    <li className="item">Up to 5 tabs</li>
                    <li className="item">Up to 5 tabs</li>
                  </ul>
                </div>
              </li>
              <li className="col enterprise">
                <h4 className="head">Enterprise</h4>
                <p className="desc">Fast and easy way to get started cobrowing with your team</p>
                <span className="price"><em>Let's Talk</em></span>
                <button className="btn">Contact Us</button>
                <div className="feats">
                  <h5 className="title">Key Features</h5>
                  <ul className="list">
                    <li className="item">Up to 10 users</li>
                    <li className="item">Up to 5 tabs</li>
                    <li className="item">Up to 5 tabs</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="plans">
            <h2 className="title">Compare Plans</h2>
            <div className="desc">
              <div className="left">
                <h4 className="head">Features by plan</h4>
                <p className="intro">Compare plans to find the subscription that best fits for your team.</p>
              </div>
              <ul className="right">
                <li className="box">
                  <h5 className="head">Free</h5>
                  <span className="price"><em>$0</em>/mo</span>
                  <button className="btn">Get Started</button>
                </li>
                <li className="box pro">
                  <h5 className="head">Pro</h5>
                  <span className="price"><em>$8</em>/mo</span>
                  <button className="btn">Start Free Trial</button>
                </li>
                <li className="box">
                  <h5 className="head">Enterprise</h5>
                  <span className="price">-</span>
                  <button className="btn">Contact Us</button>
                </li>
              </ul>
            </div>
            <div className="tables">
              <div className="table expand">
                <MdKeyboardArrowDown onClick={toggleTable} className="arrow" size="35" color="#52edff" />
                <h4 className="head">Key Features</h4>
                <ul className="list">
                  <li className="item">
                    <span className="desc">Lorem ipsum</span>
                    <span className="num">3</span>
                    <span className="num">7</span>
                    <span className="num">6</span>
                  </li>
                  <li className="item">
                    <span className="desc">Lorem ipsum</span>
                    <span className="num">3</span>
                    <span className="num">7</span>
                    <span className="num">6</span>
                  </li>
                </ul>
              </div>
              <div className="table">
                <MdKeyboardArrowDown onClick={toggleTable} className="arrow collapse" size="35" color="#52edff" />
                <h4 className="head">App Integration</h4>
                <ul className="list">
                  <li className="item">
                    <span className="desc">Lorem ipsum</span>
                    <span className="num">3</span>
                    <span className="num">7</span>
                    <span className="num">6</span>
                  </li>
                  <li className="item">
                    <span className="desc">Lorem ipsum</span>
                    <span className="num">3</span>
                    <span className="num">7</span>
                    <span className="num">6</span>
                  </li>
                </ul>
              </div>
              <div className="table">
                <MdKeyboardArrowDown onClick={toggleTable} className="arrow collapse" size="35" color="#52edff" />
                <h4 className="head">App Integration</h4>
                <ul className="list">
                  <li className="item">
                    <span className="desc">Lorem ipsum</span>
                    <span className="num">3</span>
                    <span className="num">7</span>
                    <span className="num">6</span>
                  </li>
                  <li className="item">
                    <span className="desc">Lorem ipsum</span>
                    <span className="num">3</span>
                    <span className="num">7</span>
                    <span className="num">6</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </StyledContainer>
      <StyledFooter>
        <div className="wrapper">
          <div className="copyright">© 2021  Privoce. All rights reserved.</div>
          <ul className="socials">
            {/* <li className="social">
              <FaTwitter size={24} color="#787878" />
            </li>
            <li className="social">
              <FaFacebook size={24} color="#787878" />
            </li> */}
            <li className="social">
              <a href="https://github.com/Privoce/webrowse" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} color="#787878" />
              </a>
            </li>
          </ul>

        </div>
      </StyledFooter>
    </>
  )
}
export default HomePage
