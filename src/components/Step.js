import React from 'react'
import styled from 'styled-components';
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding:0;
  width: 464px;
  background: linear-gradient(135deg, #3C8CE7 0%, #00EAFF 100%);
    border-radius: 20px;
    overflow: hidden;
  @media screen and (max-width: 414px) {
       flex-direction: column;
       padding:50px 10px;
    }
  .intro{
    width: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      height: 190px;
      background-color: #282828;
      padding:30px 32px;
      gap:13px;
      .title{
        font-weight: 800;
        font-size: 18px;
        line-height: 23px;
        color: #fff;
      }
      .desc{
        font-size: 16px;
        line-height: 20px;
        color: #78787C;
        p{
            margin-bottom: 20px;
        }
      }
  }
    .pic{
        width: 100%;
        height: 290px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            max-width: 280px;
        }
    }
`;
export default function Step({ seq = '01', title = "Invite your teammates via link", desc = "After starting a cobrowse window, click on “copy link” in the left bottom corner and send it to your teammates.", pic = "https://static.nicegoodthings.com/works/vera/LnV15n.jpg" }) {
    let descs = typeof desc == 'string' ? [desc] : desc;
    return (
        <StyledWrapper className="step">
            <div className="pic">
                <img src={pic} alt="step picture" />
            </div>
            <div className="intro" data-seq={seq}>
                <h3 className="title">{title}</h3>
                <div className="desc">
                    {descs.map(d => {
                        return <p key={d} className="p">{d}</p>
                    })}
                </div>
            </div>

        </StyledWrapper>
    )
}
