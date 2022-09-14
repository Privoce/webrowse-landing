import React, { useEffect, useState, useRef } from 'react'
import styled, { keyframes } from 'styled-components';

const AniG = keyframes`
0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;
const StyledTip = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${AniG} 15s ease infinite;
  .content{
    user-select: none;
    color:#fff;
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  .title{
    font-size: 60px;
    font-weight: 800;
    margin-bottom: 60px;
  }
  .tabs{
    max-height: 52vh;
    overflow: scroll;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style: none;
    gap: 10px;
    .tab{
      font-size: 24px;
      padding: 12px 0px 12px 25px;
      border-radius: 10px;
      border: 1px solid #eee;
      transition: all .4s ease-in;
      width: 600px;
      .link{
        padding:0 25px 0 35px;
        display: block;
        line-height: 2;
        color:#fff;
        text-decoration: none;
        background-repeat: no-repeat;
        background-size: 25px;
        background-position-x: left;
        background-position-y: center;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      &:hover{
        background:#eee;
        .link{
          color:#333
        }
      }
    }
  }
  .btn{
    cursor: pointer;
    font-size: 30px;
    padding: 12px 10px;
    border-radius: 10px;
    border: 1px solid #eee;
    text-transform: uppercase;
    background:none;
    color: #fff;
    margin-top: 30px;
    transition: all .4s ease-in;
    &:hover{
        background:#eee;
        color:#555;
    }
  }
  }
`;
const prefixs = {
  l: 'http://localhost:4000',
  s: 'https://stage.vera.nicegoodthings.com',
  o: 'https://vera.nicegoodthings.com'
}
export default function Window() {
  const tabsRef = useRef(null);
  const [error, setError] = useState(null)
  const [data, setData] = useState(null);
  useEffect(() => {
    const getWindowDetail = async () => {
      try {
        const params = new URLSearchParams(location.search)
        const from = params.get('env') || 'o'
        const wid = params.get('wid');
        console.log(wid);
        if (!wid) return;
        const resp = await fetch(`${prefixs[from]}/webrowse/window/${wid}`);
        let obj = await resp.json();
        console.log({ obj });
        const [win] = obj.window || [];
        setData(win)
      } catch (error) {
        console.log({ error });
        setError(error.message)
      }
    }
    getWindowDetail()
  }, []);
  const handleOpenAll = () => {
    const links = [...tabsRef.current.querySelectorAll('.link')];
    links.forEach(l => {
      l.click()
    })
  }
  if (error) return error;
  if (!data) return 'loading';
  const { title, tabs } = data;
  return (
    <StyledTip>
      <div className="content">
        <h1 className="title">{title}</h1>
        <ul className="tabs" ref={tabsRef}>
          {tabs.map(({ id, title, icon, url }) => {
            return <li className="tab" key={id} title={title}>
              <a className="link" href={url} target="_blank" style={{ backgroundImage: `url(${icon})` }}>{title}</a>
            </li>
          })}
        </ul>
        <button className="btn" onClick={handleOpenAll}>
          open all
        </button>
      </div>
    </StyledTip>
  )
}
export function Head() {
  return (
    <title>workspace window landing page</title>
  )
}