import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
const StyledWrapper = styled.section`
  width:100vw;
  height:100vh;
  background:#fff;
  display: flex;
  align-items: center;
  justify-content: center;
  .tip{
      color: #333;
      font-size: 30px;
      font-weight: bold;

  }
`;
export default function InvitePage() {
    const [rand, setRand] = useState('')
    const [link, setLink] = useState("");
    const [err, setErr] = useState("");
    useEffect(() => {
        const rand = location.hash.split('#')?.[1];
        if (rand) {
            setRand(rand)
        }
    }, [])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(`https://vera.nicegoodthings.com/invite/${rand}`);
                const obj = await resp.json();
                console.log({ obj });
                if (!obj) {
                    setErr("空数据");
                    return;
                }
                setLink(JSON.stringify(obj))
                const { data = "" } = obj;
                const [roomId, winId] = data.split('|');
                if (roomId && winId) {
                    location.href = `https://nicegoodthings.com/transfer/wb/${roomId}?wid=${winId}&extid=nnbkebemeehfhiimeghnkdocfbeogenn`
                } else {
                    setErr('参数不完整')
                }
            } catch (error) {
                setErr("API 有误")
            }

        }
        if (rand) {
            fetchData()
        }
    }, [rand])
    if (err) {
        return <StyledWrapper style={{ color: '#fff' }}>
            <div className="tip">
                {err}
            </div>
        </StyledWrapper>
    }
    return (
        link ? null : <StyledWrapper>
            <div className="tip">
                Waiting...
            </div>
        </StyledWrapper>
    )
}
