import React, { useRef, useState } from "react"
import styled, { keyframes } from 'styled-components';
import { FaTwitter, FaGithub } from 'react-icons/fa'
import { IoAddCircleOutline } from 'react-icons/io5'
import { FiMinusCircle } from 'react-icons/fi'
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
const StyledContainer = styled.section`
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
    padding-top: 156px;
    padding-bottom: 80px;
    background:#19181D;
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
        .select_plan{
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 78px;
          .txt{
            font-weight: bold;
            font-size: 24px;
            line-height: 30px;
          }
          .toggle{
            cursor: pointer;
            padding: 0 4px;
            display: flex;
            align-items: center;
            width: 40px;
            height: 28px;
            background-color: #fff;
            border-radius: 20px;
            .circle{
              width: 18px;
              height: 18px;
              border-radius: 50%;
              background-color:#19181d;
              transition: all .2s ease-in-out;
            }
          }
          &.ann .toggle .circle{
            transform: translateX(14px);
          }
        }
        >.desc{
          font-weight: 600;
          font-size: 24px;
          line-height: 30px;
          text-align: center;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 44px;
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
            padding-bottom: 80px;
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
              position: relative;
              border-width: 5px;
              border-color: #5088e3;
              .btn{
                color: #000;
                background: #52EDFF;
              }
              &.ann:after{
                content: "Save 33%";
                position: absolute;
                top: 0;
                right: 0;
                font-weight: 800;
                font-size: 24px;
                line-height: 30px;
                padding:4px 20px;
                padding-left: 25px;
                background-color: #5088e3;
                border-bottom-left-radius: 20px;
                border-top-right-radius: 10px;
                /* border-radius: 20px; */
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
        .table{
            width: 100%;
            position: relative;
            padding: 20px 30px;
            width: 100%;
            background: rgba(40, 40, 40, 0.8);
            border-radius: 20px;
            table{
              width: 100%;
            .header{
              font-weight: bold;
              font-size: 36px;
              line-height: 45px;
              margin-bottom: 10px;
            }
            .row{
              display: flex;
              justify-content: space-between;
              font-weight: normal;
              font-size: 24px;
              line-height: 30px;
              padding: 25px 0;
              &:not(:last-child){
                border-bottom:1px solid #828282 ;
              }
            .feat{
              width: 500px;
            }
            .val{
              width: 230px;
              text-align: center;
            }
          }
        }
      }
      }
    }
`;
const StyledFAQ = styled.section`
 background-color:#19181D;
 color: #fff;
 display: flex;
 flex-direction: column;
 align-items: center;
 padding:140px 0;
 .header{
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  margin-bottom: 20px;
 }
 .desc{
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 64px;
 }
 .list{
   display: flex;
   flex-direction: column;
   width: 768px;
   .ask{
     border-top: 1px solid #E4E7EC;
     padding-top: 24px;
     padding-bottom: 24px;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .toggle{
      cursor: pointer;
      &.collapse{
        display: none;
      }
      &.expand{
        display: block;
      }
    }

    &.expand {
      padding-bottom: 0;
      .expand{
        display: none;
      }
      .collapse{
        display: block;
      }
    }
    &.expand + .ans{
      display: block;
    }
   }
   .ans{
     display: none;
     color: #667085;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      padding-bottom: 32px;
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
const StyledNewsletter = styled.section`
  width: 100%;
  padding: 48px 0;
  background: #212026;
  
  .wrapper{
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    .info{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      .title{
        color: #fff;
        font-weight: 600;
        font-size: 30px;
        line-height: 38px;
      }
      .desc{
        color:  rgba(228, 231, 236, 0.7);
        font-weight: normal;
        font-size: 20px;
        line-height: 30px;
      }
    }
    .subscribe{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
      .submit{
        display: flex;
        align-items: center;
        gap:16px ;
        input{
          padding: 10px 14px;
          font-size: 16px;
          line-height: 24px;
          width: 280px;
          border: none;
          background: #FFFFFF;
          border: 1px solid #D0D5DD;
          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
          border-radius: 8px;
        }
        .btn{
          border: none;
          padding: 10px 18px;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color:#19181D ;
          background: #1FE1F9;
          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
          border-radius: 8px;
        }
      }
      .tip{
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #667085;
      }
    }
  }

`
const Prices = {
  mon: 8,
  ann: 12
};
const Questions = [{
  ask: 'Is there a free trial available?',
  ans: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
}, {
  ask: 'Is there a free trial available?',
  ans: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
}, {
  ask: 'Is there a free trial available?',
  ans: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
},]
const PricingPage = () => {
  const faqsRef = useRef(null)
  const [plan, setPlan] = useState('mon')
  const [typeformVisible, setTypeformVisible] = useState(false);
  const toggleTypeForm = () => {
    setTypeformVisible(prev => !prev)
  }
  const handleSelectPlan = () => {
    setPlan(prev => prev == 'mon' ? 'ann' : 'mon')
  }
  const handleFaqToggle = ({ currentTarget }) => {
    [...faqsRef.current.querySelectorAll('.ask')].forEach(node => {
      node.classList.remove('expand')
    })
    console.log({ currentTarget });
    currentTarget.parentElement.classList.toggle('expand');
  }
  return (
    <>
      <SEO />
      <StyledContainer className="viewport" id='pricing'>
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
            <div className={`select_plan ${plan}`}>
              <span className="txt">Monthly</span>
              <div className="toggle" onClick={handleSelectPlan}>
                <div className="circle"></div>
              </div>
              <span className="txt">Annual</span>
            </div>
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
              <li className={`col pro ${plan}`}>
                <h4 className="head">Pro</h4>
                <p className="desc">Fast and easy way to get started cobrowing with your team</p>
                <span className="price"><em>${Prices[plan]}</em>/mo</span>
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
                  <span className="price"><em>${Prices[plan]}</em>/mo</span>
                  <button className="btn">Start Free Trial</button>
                </li>
                <li className="box">
                  <h5 className="head">Enterprise</h5>
                  <span className="price">-</span>
                  <button className="btn">Contact Us</button>
                </li>
              </ul>
            </div>
            <div className="table">
              <table >
                <thead className="header">Key Features</thead>
                <tbody>
                  <tr className="row">
                    <td className="feat">Number of Participants</td>
                    <td className="val">5</td>
                    <td className="val">Unlimited</td>
                    <td className="val">Unlimited</td>
                  </tr>
                  <tr className="row">
                    <td className="feat">Number of Tabs</td>
                    <td className="val">10</td>
                    <td className="val">Unlimited</td>
                    <td className="val">Unlimited</td>
                  </tr>
                  <tr className="row">
                    <td className="feat">Number of Initiators</td>
                    <td className="val">1</td>
                    <td className="val">1</td>
                    <td className="val">Unlimited</td>
                  </tr>
                  <tr className="row">
                    <td className="feat">Co-hosting</td>
                    <td className="val">-</td>
                    <td className="val">2</td>
                    <td className="val">Unlimited</td>
                  </tr>
                  <tr className="row">
                    <td className="feat">Voice Channel</td>
                    <td className="val">10</td>
                    <td className="val">Unlimited</td>
                    <td className="val">Unlimited</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <StyledFAQ>
          <h3 className="header">Frequently asked questions</h3>
          <p className="desc">Everything you need to know about the product and billing.</p>
          <dl className="list" ref={faqsRef}>
            {Questions.map(({ ask, ans }, idx) => {
              return <>
                <dt key={idx} className={`ask ${idx == 0 ? 'expand' : ''}`}>{ask} <FiMinusCircle onClick={handleFaqToggle} className="collapse toggle" color="#98A2B3" />  <IoAddCircleOutline onClick={handleFaqToggle} className="expand toggle" color="#1FE1F9" /></dt>
                <dd key={idx} className="ans">{ans}</dd>
              </>
            })}
          </dl>
        </StyledFAQ>
        <StyledNewsletter className="newsletter">
          <div className="wrapper">

            <div className="info">
              <h3 className="title">Get notified</h3>
              <p className="desc">Stay up to date with the latest news, announcements, and articles.</p>
            </div>
            <div className="subscribe">
              <div className="submit">
                <input type="email" name="email" id="email" placeholder="Enter your email" />
                <button className="btn">Subscribe</button>
              </div>
              <span className="tip">No Spam. Ever.</span>
            </div>
          </div>

        </StyledNewsletter>
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
export default PricingPage
