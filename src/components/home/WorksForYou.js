import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components';
import { Controller, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
const FloatingV = keyframes`
    0% {
		transform: translateY(0px);
        opacity:.9;
	}
	50% {
		transform: translateY(-10px);
        opacity:1;
	}
	100% {
		transform: translateY(0px);
        opacity:.9;
	}
`;
const Fade = keyframes`
    0% {
        opacity:.9;
	}
	50% {
        opacity:1;
	}
	100% {
        opacity:.9;
	}
`;
const StyledSection = styled.section`
margin:180px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    z-index: 999;
    .title{
        color: #fff;
        font-weight: bold;
        font-size: 36px;
        line-height: 45px;
    }
    .box{
        position: relative;
        background: none;
        border-radius: 20px;
        height: 520px;
        max-width: 1216px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        padding:0;
        overflow: hidden;
        .nav{
            position: absolute;
            left: 60px;
            bottom:40px;
            display: flex;
            list-style: none;
            gap: 8px;
            z-index: 999;
            .dot{
                cursor: pointer;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                opacity: .8;
                background-color: rgba(255,255,255,.8);
                &.active{
                    background-color: rgba(255,255,255);
                }
            }
        }
        .swiper{
            height: 100%;
            width: 100%;
        .slide{
            width: 100%;
            height: 100%;
            display: flex;
            padding: 50px 0 0 60px;
            justify-content: space-between;
            &.slide_1{
                background-color: rgba(149, 122, 255, 0.16);
            }
            &.slide_2{
                background-color: rgba(24, 182, 170, 0.16);
            }
            &.slide_3{
                background-color: rgba(255, 94, 133, 0.16);
            }
            .left{
                padding-top: 14px;
                display: flex;
                flex-direction: column;
                gap: 32px;
                color: #fff;
                width: 440px;
                .head{
                    font-style: normal;
                    font-weight: 800;
                    font-size: 40px;
                    line-height: 48px;
                }
                .desc{
                    opacity: .8;
                    font-weight: 500;
                    font-size: 22px;
                    line-height: 27px;
                }
            }
            .right{
                position: relative;
                width: 584px;
                img{
                    width: 100%;
                }
                .bg{
                    animation: ${Fade} 4s ease-in-out infinite alternate;
                }
                .floater{
                    position: absolute;
                    width:360px;
                    animation: ${FloatingV} 6s ease-in-out infinite alternate;
                    &.seq_1{
                        top:120px;
                        left: -20px;
                    }
                    &.seq_2{
                        top:230px;
                        left: 40px;
                        animation-delay: 1s;
                    }
                    &.seq_3{
                        top:340px;
                        left: -20px;
                        animation-delay: 2s;
                    }
                }
            }
        }}
    }
`;
const Slides = [{
    title: "Courses & Education",
    content: `Turn passive training sessions into active ones by seamlessly granting control to your audience at the right time. 
    Interview, Homework, 1 on 1, Team Meeting, anything you want.`,
    pic: {
        bg: 'https://static.nicegoodthings.com/project/ext/webrowse.slide.bg.1.png',
        floaters: [
            `https://static.nicegoodthings.com/project/ext/slide.1.floater.1.png`,
            `https://static.nicegoodthings.com/project/ext/slide.1.floater.2.png`,
            `https://static.nicegoodthings.com/project/ext/slide.1.floater.3.png`
        ]
    }
}, {
    title: "Team Collaboration",
    content: `Turn any web app instantly collaborative. Convene over GitHub, Notion, Figma, and more in real time. Seamlessly integrate with leading productivity apps. Or use multiple tabs to open them all at once.`,
    pic: {
        bg: 'https://static.nicegoodthings.com/project/ext/webrowse.slide.bg.1.png',
        floaters: [
            `https://static.nicegoodthings.com/project/ext/slide.1.floater.1.png`,
            `https://static.nicegoodthings.com/project/ext/slide.1.floater.2.png`,
            `https://static.nicegoodthings.com/project/ext/slide.1.floater.3.png`
        ]
    }
}, {
    title: "Solo Mode",
    content: `When you are not in a meeting, you can even use it as a tab groups bookmark tool for your own use.
    Unlike Browesers naive tab group, you don’t have to add or update your bookmarks, it sync automatically save and update for you.`,
    pic: {
        bg: 'https://static.nicegoodthings.com/project/ext/webrowse.slide.bg.1.png',
        floaters: [
            `https://static.nicegoodthings.com/project/ext/slide.1.floater.1.png`,
            `https://static.nicegoodthings.com/project/ext/slide.1.floater.2.png`,
            `https://static.nicegoodthings.com/project/ext/slide.1.floater.3.png`
        ]
    }
},]
export default function WorksForYou() {
    const [controlledSwiper, setControlledSwiper] = useState(null);
    const [activeIdx, setActiveIdx] = useState(0)
    const handleSlideNav = (idx) => {
        console.log("slide seq", idx);
        controlledSwiper.slideTo(idx);
        setActiveIdx(idx)
    }
    return (
        <StyledSection>
            <h3 className="title">Every workflow works for you</h3>
            <div className="box">
                <ul className="nav">
                    <li className={`dot ${activeIdx == 0 ? 'active' : ''}`} onClick={handleSlideNav.bind(null, 0)}></li>
                    <li className={`dot ${activeIdx == 1 ? 'active' : ''}`} onClick={handleSlideNav.bind(null, 1)}></li>
                    <li className={`dot ${activeIdx == 2 ? 'active' : ''}`} onClick={handleSlideNav.bind(null, 2)}></li>
                </ul>
                <Swiper
                    autoplay={{
                        delay: 6000
                    }}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={({ activeIndex }) => {
                        setActiveIdx(activeIndex)
                    }}
                    modules={[Autoplay, Controller]}
                    onSwiper={setControlledSwiper}
                >
                    {Slides.map((s, idx) => {
                        const { title, content, pic: { bg, floaters } } = s;
                        return <SwiperSlide className={`slide slide_${idx + 1}`} key={title}>
                            <div className="left">
                                <h4 className="head">{title}</h4>
                                <p className="desc">{content}</p>
                            </div>
                            <div className="right">
                                <img className="bg" src={bg} alt="slide background image" />
                                {floaters.map((src, idx) => {
                                    return <img key={src} className={`floater seq_${idx + 1}`} src={src} alt="floater image" />
                                })}
                            </div>
                        </SwiperSlide>
                    })}
                </Swiper>

            </div>
        </StyledSection>
    )
}
