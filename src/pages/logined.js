import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
const StyledTip = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-items: center;
  font-size: 100px;
  color:#fff;
  font-weight: 800;
  background: #E7F1FF;
  padding: 106px 0 100px 0;
  .header{
    grid-row: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title{
      color: #056CF2;
      font-weight: bold;
      font-size: .36em;
      padding-left: 1.2em;
      background-image: url('https://static.nicegoodthings.com/works/vera/webrowse.logo.png');
      background-size: 1em;
      background-repeat: no-repeat;
      margin-bottom: .2em;
    }
    .sub_title{
      margin-top: 22px;
      color:  #606368;
      font-weight: 200;
      font-weight: normal;
      font-size: .32em;
    }
  }
  .content{
    margin-top: 86px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #056CF2;
    .pic{
      width: 345px;
    }
    .welcome{
      display: flex;
      flex-direction: column;
    align-items: center;
    font-size: 40px;
    font-weight: normal;
    line-height: 1.5;
    }
  }
  .arrow{
    position: absolute;
    top: .2em;
    right: 20px;
    height: 50%;
    width: 30%;
  }
`;
export default function Guiding() {
  const [name, setName] = useState(null)
  useEffect(() => {
    document.title = "Login Success - Webrowse";
    const un = new URLSearchParams(location.search).get('name');
    setName(un)
  }, [])
  return (
    <StyledTip>
      <img className="arrow" src="https://api.tbxproject.com/images/action_arrow.svg" alt="arrow" />
      <div className="header">
        <h1 className="title">Webrowse</h1>
        <h2 className="sub_title">
          Sync tabs with your teammates!
        </h2>
      </div>
      <div className="content">
        <img className="pic" src="https://static.nicegoodthings.com/works/vera/webrowse.logined.png" alt="logined" />
        <ul className="welcome">
          <li className="words">{name ? `Welcome, ${name}!` : `Welcome!`}</li>
          <li className="words">You can now re-open the extension.</li>
        </ul>
      </div>
    </StyledTip>
  )
}
