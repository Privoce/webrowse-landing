import React from 'react'
import styled from 'styled-components';
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
        background: linear-gradient(135deg, #3C8CE7 0%, #00EAFF 100%);
        border-radius: 20px;
        max-width: 1216px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        padding:194px 318px;
        .demo{
            position: relative;
            max-width: 580px;
            img{
                width: 100%;
            }
            .desc{
                position: absolute;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 8px;
                color: #fff;
                max-width: 300px;
                &:after{
                    content: "";
                    position: absolute;
                    display: block;
                    width: 72px;
                    height: 68px;
                    border-bottom-left-radius: 16px;
                    border-top-left-radius: 0;
                    border-bottom-right-radius: 0;
                    border-bottom: 2px dotted #fff;
                    border-left: 2px dotted #fff;
                    transform-origin: center;
                }
                &.top_left{
                    transform: translateY(-100%);
                    top:  -74px;
                    left: -240px;
                    &:after{
                        left:50%;
                        bottom: -120px;
                    }
                }
                &.top_right{
                    transform: translateY(-100%);
                    top:  -34px;
                    right:-248px;
                    &:after{
                        transform: rotate(90deg);
                        left:-120px;
                        bottom: 0;
                    }
                }
                &.bottom_left{
                    transform: translateY(100%);
                    bottom:  -47px;
                    left:-230px;
                    &:after{
                        transform: rotate(-90deg);
                        right:-90px;
                        top: -20px;
                    }
                }
                &.bottom_right{
                    transform: translateY(100%);
                    bottom:  -47px;
                    right:-240px;
                    &:after{
                        transform: rotate(180deg);
                        left:80px;
                        top: -100px;
                    }
                }
                .head{
                    font-weight: bold;
                    font-size: 20px;
                    line-height: 30px;
                }
                .txt{
                    font-size: 16px;
                    line-height: 24px;
                    opacity: .8;
                }
            }
        }

    }
`;
export default function WhatCanDo() {
    return (
        <StyledSection>
            <h3 className="title">What you can do with Webrowse?</h3>
            <div className="box">
                <div className="demo">
                    <img src="https://static.nicegoodthings.com/project/ext/home.demo.png" alt="demo image" />
                    <div className="desc top_left">
                        <h5 className="head">Rename & Share</h5>
                        <div className="txt">Rename a window and get a sharable link. Turn window into Workspace.</div>
                    </div>
                    <div className="desc top_right">
                        <h5 className="head">Follow Mode</h5>
                        <div className="txt">Host will have follower on the same tab during follow mode. better automaticity and privacy than screen sharing.</div>
                    </div>
                    <div className="desc bottom_left">
                        <h5 className="head">Saved Windows</h5>
                        <div className="txt">Easily save a window for future use, good for Recursive meeting.</div>
                    </div>
                    <div className="desc bottom_right">
                        <h5 className="head">Collaborate made simple</h5>
                        <div className="txt">Invite people, save window, See each participants's status, host meetings.</div>
                    </div>
                </div>
            </div>
        </StyledSection>
    )
}
