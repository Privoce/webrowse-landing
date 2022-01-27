import React from 'react'
import styled from 'styled-components';
import btn_css from '../../constants/ButtonCss'
const StyledDownloads = styled.section`
    padding:80px 0 160px 0;
    background-color:#19181D;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:48px ;
    >.title{
      /* font-weight: bold; */
      color: #fff;
      font-size: 36px;
      line-height: 45px;
    }
    .browsers{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 96px;
      .bro{
        color:inherit;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        img{
          width:64px ;
          height: 64px;

        }
        .name{
          font-size: 14px;
          line-height: 16px;
          text-align: center;
          @media screen and (max-width: 414px) {
            width: 64px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .link{
          margin-top: 8px;
          text-transform: capitalize;
          ${btn_css}
          &.soon{
            background: rgba(255, 255, 255, 0.2);
          }
        }
      }
    }
`;
export default function Downloads() {
  return (
    <StyledDownloads id="links">
      <h2 className="title">Supported Browsers</h2>
      <ul className="browsers">
        <li className="bro">
          <img src="https://static.nicegoodthings.com/project/vera/wb.chrome.png" alt="chrome browser icon" />
          <span className="name">Chrome</span>
          <a className="link" href="https://chrome.google.com/webstore/detail/webrowse-sync-tabs-with-y/nnbkebemeehfhiimeghnkdocfbeogenn/related" target="_blank" rel="noopener noreferrer">
            download
          </a>
        </li>
        <li className="bro">
          <img src="https://static.nicegoodthings.com/project/vera/wb.edge.png" alt="chrome browser icon" />
          <span className="name">Edge</span>
          <a className="link" href="https://chrome.google.com/webstore/detail/webrowse-sync-tabs-with-y/nnbkebemeehfhiimeghnkdocfbeogenn/related" target="_blank" rel="noopener noreferrer">
            download
          </a>
        </li>
        <li className="bro">
          <img src="https://static.nicegoodthings.com/project/vera/wb.firefox.png" alt="chrome browser icon" />
          <span className="name">Firefox</span>
          <a className="link soon" href="#" rel="noopener noreferrer">
            Coming soon
          </a>
        </li>
        <li className="bro">
          <img src="https://static.nicegoodthings.com/project/vera/wb.safari.png" alt="chrome browser icon" />
          <span className="name">Safari</span>
          <a className="link soon" href="#" rel="noopener noreferrer">
            Coming soon
          </a>
        </li>
      </ul>
    </StyledDownloads>
  )
}
