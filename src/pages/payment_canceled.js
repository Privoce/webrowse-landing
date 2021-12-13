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
    gap: 32px;
    .tip{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: orange;
        font-weight: bold;
        font-weight: 500;
        font-size: 40px;
        gap: 10px;
        em{
            font-weight: 600;
        }
    }
    .back{
        background-color: #52E9FB;
        border-radius: 20px;
        color: #fff;
        font-weight: bold;
        font-size: 12px;
        line-height: 18px;
        padding: 4px 12px;
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
                <p>Payment <em>Canceled</em></p>
            </div>
            <a className="back" href="http://webrow.se" rel="noopener noreferrer">Back Home</a>
            <footer>
                <img className="logo" src="https://static.nicegoodthings.com/project/ext/webrowse.logo.png" alt="logo" />
                <span className="title">Webrowse</span>
            </footer>
        </StyledWrapper>
    )
}
