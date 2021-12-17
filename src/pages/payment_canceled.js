import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const StyledWrapper = styled.section`
    position: relative;
    width:100vw;
    height:100vh;
    background:#fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;
    .tip{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #000;
        font-weight: bold;
        font-weight: 500;
        font-size: 40px;
        gap: 10px;
        em{
            font-weight: 600;
        }
        .desc{
            color:#666;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
        }
    }
    .back{
        background-color: #52E9FB;
        border-radius: 20px;
        color: #000;
        font-weight: bold;
        font-size: 14px;
        line-height: 14px;
        padding: 12px 24px;
        text-decoration: none;
    }
    footer{
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        font-weight: 600;
        font-size: 20px;
        line-height: 20px;
        color:#44494F;
        display: flex;
        align-items: center;
        gap: 8px;
        .logo{
            width:32px ;
            height: 32px;
        }
    }
`;
export default function PaymentCancel() {
    return (
        <StyledWrapper>
            <div className="tip">
                <p>Payment Canceled</p>
                <div className="desc">You may close this window now</div>
            </div>
            <a className="back" href="/" rel="noopener noreferrer">Back Home</a>
            <footer>
                <img className="logo" src="https://static.nicegoodthings.com/project/ext/webrowse.logo.png" alt="logo" />
                <span className="title">Webrowse</span>
            </footer>
        </StyledWrapper>
    )
}
