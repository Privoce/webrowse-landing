import React, { useRef, useState } from "react"
import styled, { keyframes } from 'styled-components';
import { IoAddCircleOutline } from 'react-icons/io5'
import { FiMinusCircle } from 'react-icons/fi'
import SEO from '../components/SEO/webrowse';
import NavBar from '../components/Navbar';
import PaymentButton from '../components/PaymentButton'
import WebrowseFooter from "../components/WebrowseFooter";
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
          @media screen and (max-width: 414px) {
            flex-direction: column;
          }
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
              cursor: pointer;
              border: none;
              color: #222;
              text-decoration: none;
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
              border-width: 6px;
                border-color:transparent ;
                background: linear-gradient(rgba(40, 40, 40), rgba(40, 40, 40)) padding-box,linear-gradient(153.06deg, #3C8CE7 4.31%, #63EDE6 56.27%) border-box;
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
                /* background: transparent; */
                background: linear-gradient(90deg, #5695e4 10%, #61ade4 70%);
                border-bottom-left-radius: 20px;
                border-top-right-radius: 10px;
              }
            }
          }
        }
      }
      .plans{
        margin-top: 220px;
        padding-bottom: 84px;
        @media screen and (max-width: 414px) {
          display: none;
        }
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
                /* position: relative; */
                border-width: 5px;
                border-color:transparent ;
                background: linear-gradient(rgba(40, 40, 40), rgba(40, 40, 40)) padding-box,linear-gradient(153.06deg, #3C8CE7 4.31%, #63EDE6 56.27%) border-box;
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
 @media screen and (max-width: 414px) {
   .header,.desc{
     width: 90%;
   }
  }
 .list{
   display: flex;
   flex-direction: column;
   width: 768px;
   @media screen and (max-width: 414px) {
      width: 90%;
    }
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

const Prices = {
  mon: {
    count: 12,
    pid: 'price_1JrkyKGGoUDRyc3jD71s4HkW'
  },
  ann: {
    count: 8,
    pid: 'price_1JzO1gGGoUDRyc3jXCY8WMmH'
  }
};
const Questions = [{
  ask: 'Is there a free trial available?',
  ans: `Yes, you can try our Pro plan for for free for 14 days. If you'd like, we can also provide a free, personalized 30-minute onboarding call to get you up and running.`
}, {
  ask: 'What is included in my free trial?',
  ans: 'The 14 day free trial includes access to all features in the Pro plan.'
}, {
  ask: 'What happens after my free trial ends?',
  ans: 'After the 14 day trial, you will be automatically be charged for the plan you have selected. You can always cancel before the end of your trial period for no charge. We will notify you of the end of your trial ending as that date is approaching.'
}, {
  ask: 'Can I change my subscription plan later?',
  ans: 'Yes. You can change your subscription plan at any time. Any upgrade to a higher subscription will take place immediately. Any downgrade to a lower subscription will take place at the next billing date. If you purchased an annual subscription, please get in contact with us to change your plan.'
},
{
  ask: 'How does billing work?',
  ans: 'You can either be billed monthly or annually. We have a discount on annual billing! Our accepted payment method is credit card, debit card, and G Pay.'
},
{
  ask: 'What is the difference between an initiator, host, and participant?',
  ans: 'An initiator has the ability to start the cobrowsing session. Participants refer to any user in the cobrowsing session. The host is the primary user whose windows and tabs the participants follow. Typically the initiator is the host by default, however host privileges can be transferred between participants.'
},
]
const PricingPage = () => {
  const faqsRef = useRef(null);
  const [currentUser, setCurrentUser] = useState(null)
  const [plan, setPlan] = useState('ann')
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
        <NavBar curr="pricing" updateUser={setCurrentUser} />
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
                <a href="https://chrome.google.com/webstore/detail/webrowse-sync-tabs-with-y/nnbkebemeehfhiimeghnkdocfbeogenn" target="_blank" className="btn">Add to Chrome</a>
                <div className="feats">
                  <h5 className="title">Key Features</h5>
                  <ul className="list">
                    <li className="item">Up to 10 participants</li>
                    <li className="item">Up to 5 tabs</li>
                  </ul>
                </div>
              </li>
              <li className={`col pro ${plan}`}>
                <h4 className="head">Pro</h4>
                <p className="desc">Advanced cobrowsing for professional teams</p>
                <span className="price"><em>${Prices[plan].count}</em>/mo</span>
                <PaymentButton priceId={Prices[plan].pid} user={currentUser} />
                <div className="feats">
                  <h5 className="title">Key Features</h5>
                  <ul className="list">
                    <li className="item">Unlimited Participants</li>
                    <li className="item">Unlimited Participants Tabs</li>
                    {/* <li className="item">Co-hosting</li> */}
                    <li className="item">Voice Channel</li>
                  </ul>
                </div>
              </li>
              <li className="col enterprise">
                <h4 className="head">Enterprise</h4>
                <p className="desc">Fast and easy way to get started cobrowing with your team</p>
                <span className="price"><em>Let's Talk</em></span>
                <a className="btn">Contact Us</a>
                <div className="feats">
                  <h5 className="title">Key Features</h5>
                  <ul className="list">
                    <li className="item">Unlimited Participants</li>
                    <li className="item">Unlimited Participants Tabs</li>
                    <li className="item">Unlimited Saved Windows</li>
                    <li className="item">Unlimited Initiators</li>
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
                  <span className="price"><em>${Prices[plan].count}</em>/mo</span>
                  <PaymentButton priceId={Prices[plan].pid} user={currentUser} txt={`Start Free Trial`} />
                  {/* <button className="btn">Start Free Trial</button> */}
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
                    <td className="val">10</td>
                    <td className="val">Unlimited</td>
                    <td className="val">Unlimited</td>
                  </tr>
                  <tr className="row">
                    <td className="feat">Number of Tabs</td>
                    <td className="val">5</td>
                    <td className="val">Unlimited</td>
                    <td className="val">Unlimited</td>
                  </tr>
                  <tr className="row">
                    <td className="feat">Number of Initiators</td>
                    <td className="val">1</td>
                    <td className="val">1</td>
                    <td className="val">Unlimited</td>
                  </tr>
                  {/* <tr className="row">
                    <td className="feat">Co-hosting</td>
                    <td className="val">-</td>
                    <td className="val">2</td>
                    <td className="val">Unlimited</td>
                  </tr> */}
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
          <div className="list">
            {Questions.map(({ ask, ans }, idx) => {
              return <dl key={ask} className="list" ref={faqsRef}>
                <dt className={`ask ${idx == 0 ? 'expand' : ''}`}>{ask} <FiMinusCircle onClick={handleFaqToggle} className="collapse toggle" color="#98A2B3" />  <IoAddCircleOutline onClick={handleFaqToggle} className="expand toggle" color="#1FE1F9" /></dt>
                <dd className="ans">{ans}</dd>
              </dl>
            })}

          </div>
        </StyledFAQ>
      </StyledContainer>
      <WebrowseFooter />
    </>
  )
}
export default PricingPage
