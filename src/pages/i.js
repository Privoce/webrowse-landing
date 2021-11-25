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
    const [link, setLink] = useState("");
    const [err, setErr] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            try {
                const params = new URLSearchParams(location.search)
                const rand = params.get('r') || '';
                const resp = await fetch(`https://vera.nicegoodthings.com/invite/${rand}`);
                const obj = await resp.json();

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
        fetchData()
    }, [])
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
