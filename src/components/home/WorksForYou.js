import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Controller, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const FloatingV = keyframes`
  0% {
    transform: translateY(0px);
    opacity: .9;
  }
  50% {
    transform: translateY(-10px);
    opacity: 1;
  }
  100% {
    transform: translateY(0px);
    opacity: .9;
  }
`;
const Fade = keyframes`
  0% {
    opacity: .9;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: .9;
  }
`;
const StyledSection = styled.section`
  margin: 180px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  z-index: 999;

  .title {
    color: #fff;
    font-weight: bold;
    font-size: 36px;
    line-height: 45px;
  }

  .box {
    position: relative;
    background: none;
    border-radius: 20px;
    height: 520px;
    max-width: 1216px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    overflow: hidden;
    .nav {
      position: absolute;
      left: 60px;
      bottom: 40px;
      display: flex;
      list-style: none;
      gap: 8px;
      z-index: 999;

      .dot {
        cursor: pointer;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        opacity: 0.8;
        background-color: rgba(255, 255, 255, 0.8);

        &.active {
          background-color: rgba(255, 255, 255);
        }
      }
    }

    @media screen and (max-width: 414px) {
      height: 620px;
      max-width: 100%;
      flex-direction: column;
      .nav {
        left: 24px;
        bottom: 32px;
      }
    }

    .swiper {
      height: 100%;
      width: 100%;

      .slide {
        width: 100%;
        height: 520px;

        display: flex;
        padding: 0 0 0 60px;
        justify-content: space-between;

        &.slide_1 {
          background: linear-gradient(128.79deg, #7630e3 0%, #dba6cc 100%);

          .right {
            .floater {
              width: 296px;

              &.seq_1 {
                bottom: 40px;
                right: 256px;
              }
            }

            .bg {
              width: 480px;
              right: 0;
              bottom: 0;
            }
          }
        }

        &.slide_2 {
          background: linear-gradient(307.33deg, #ffa995 0%, #ff0c46 100%);

          .right {
            .bg {
              width: 192px;
              top: 44px;
              right: 50px;
            }

            .floater {
              width: 360px;

              &.seq_1 {
                bottom: 258px;
                right: 232px;
              }

              &.seq_2 {
                bottom: 150px;
                right: 166px;
                animation-delay: 1s;
              }

              &.seq_3 {
                bottom: 40px;
                right: 232px;
                animation-delay: 2s;
              }
            }
          }
        }

        &.slide_3 {
          background: linear-gradient(128.79deg, #accbee 0%, #e7f0fd 100%);

          .right {
            .bg {
              width: 493px;
              top: 61px;
              right: 61px;
            }

            .floater {
              width: 297px;
              right: 155px;
              bottom: 56px;
            }
          }
        }

        .left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 32px;
          color: #fff;
          width: 440px;

          .head {
            font-style: normal;
            font-weight: 800;
            font-size: 40px;
            line-height: 48px;
          }

          .desc {
            opacity: 0.8;
            font-weight: 500;
            font-size: 22px;
            line-height: 27px;
          }
        }

        .right {
          flex: 1;
          position: relative;

          img {
            width: 100%;
          }

          .bg {
            position: absolute;
            animation: ${Fade} 4s ease-in-out infinite alternate;
          }

          .floater {
            position: absolute;
            animation: ${FloatingV} 6s ease-in-out infinite alternate;
          }
        }
        @media screen and (max-width: 414px) {
          height: 620px;
          padding: 0;
          flex-direction: column;
          .left {
            width: 310px;
            margin: 43px auto 0;
            .head {
              font-size: 28px;
            }
            p.desc {
              font-size: 14px;
            }
          }

          &.slide_1 .right {
            .bg {
              width: 260px;
            }
            .bg,
            .floater {
              max-width: 100%;
              //display: none;
            }
            .floater {
              width: 154px;
              height: 138px;
              left: 78px;
              bottom: 88px;
              right: auto;
              top: auto;
            }
          }
        }
        &.slide_2 .right {
          .bg {
            width: 114px;
            right: 20px;
          }
          .floater {
            width: 212px;
            &.seq_1 {
              left: 20px;
              right: auto;
              bottom: 214px;
            }
            &.seq_2 {
              left: 60px;
              right: auto;
              bottom: 150px;
            }
            &.seq_3 {
              left: 20px;
              right: auto;
              bottom: 86px;
            }
          }
        }
        &.slide_3 .right {
          .bg {
            width: 300px;
            right: auto;
            left: 50%;
            top: auto;
            bottom: 65px;
            margin-left: -150px;
          }
          .floater {
            width: 180px;
            left: 50%;
            right: auto;
            bottom: 80px;
            top: auto;
            margin-left: -90px;
          }
        }
      }
    }
  }
`;
const Slides = [
  {
    title: "Team Collaboration",
    content: `Turn any web app instantly collaborative. Convene over GitHub, Notion, Figma, and more in real time. Seamlessly integrate with leading productivity apps. Or use multiple tabs to open them all at once.`,
    pic: {
      bg:
        "https://static.nicegoodthings.com/project/ext/webrowse.slide.bg.1.png?2",
      floaters: [
        `https://static.nicegoodthings.com/project/ext/slide.1.floater.1.png?2`,
      ],
    },
  },
  {
    title: "Courses & Education",
    content: `Turn passive training sessions into active ones by seamlessly granting control to your audience at the right time. 
    Interview, Homework, 1 on 1, Team Meeting, anything you want.`,
    pic: {
      bg:
        "https://static.nicegoodthings.com/project/ext/webrowse.slide.bg.2.png",
      floaters: [
        `https://static.nicegoodthings.com/project/ext/slide.2.floater.1.png?2`,
        `https://static.nicegoodthings.com/project/ext/slide.2.floater.2.png?2`,
        `https://static.nicegoodthings.com/project/ext/slide.2.floater.3.png?2`,
      ],
    },
  },
  {
    title: "Workspace",
    content: `When you are not in a meeting, you can even use it as a tab groups bookmark tool for your own use.
    Unlike Browesers native tab group, you don’t have to add or update your bookmarks, it sync automatically save and update for you.`,
    pic: {
      bg:
        "https://static.nicegoodthings.com/project/ext/webrowse.slide.bg.3.png?2",
      floaters: [
        `https://static.nicegoodthings.com/project/ext/slide.3.floater.1.png?2`,
      ],
    },
  },
];
export default function WorksForYou() {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const handleSlideNav = (idx) => {
    console.log("slide seq", idx);
    controlledSwiper.slideTo(idx);
    setActiveIdx(idx);
  };
  return (
    <StyledSection>
      <h3 className="title">Remote collaborations made simple</h3>
      <div className="box">
        <ul className="nav">
          <li
            className={`dot ${activeIdx == 0 ? "active" : ""}`}
            onClick={handleSlideNav.bind(null, 0)}
          ></li>
          <li
            className={`dot ${activeIdx == 1 ? "active" : ""}`}
            onClick={handleSlideNav.bind(null, 1)}
          ></li>
          <li
            className={`dot ${activeIdx == 2 ? "active" : ""}`}
            onClick={handleSlideNav.bind(null, 2)}
          ></li>
        </ul>
        <Swiper
          effect="fade"
          autoplay={{
            delay: 6000,
          }}
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={({ activeIndex }) => {
            setActiveIdx(activeIndex);
          }}
          modules={[EffectFade, Autoplay, Controller]}
          onSwiper={setControlledSwiper}
        >
          {Slides.map((s, idx) => {
            const {
              title,
              content,
              pic: { bg, floaters },
            } = s;
            return (
              <SwiperSlide className={`slide slide_${idx + 1}`} key={title}>
                <div className="left">
                  <h4 className="head">{title}</h4>
                  <p className="desc">{content}</p>
                </div>
                <div className="right">
                  <img className="bg" src={bg} alt="slide background image" />
                  {floaters.map((src, idx) => {
                    return (
                      <img
                        key={src}
                        className={`floater seq_${idx + 1}`}
                        src={src}
                        alt="floater image"
                      />
                    );
                  })}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </StyledSection>
  );
}
