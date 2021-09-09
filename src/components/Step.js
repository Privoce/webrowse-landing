import React from 'react'
import styled from 'styled-components';
const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding:64px 0;
  @media screen and (max-width: 414px) {
       flex-direction: column;
       padding:50px 10px;
    }
  .intro{
      position: relative;
      flex:1;
      padding-top: 10px;
      display: flex;
      flex-direction: column;
      &:before{
          z-index: -1;
          content: attr(data-seq);
          position: absolute;
          top:-38px;
          left:-5px;
          font-weight: 900;
            font-size: 100px;
            line-height: 117px;
            color: rgba(230, 233, 239, 0.5);

      }
      .title{
        font-weight: 800;
        font-size: 30px;
        line-height: 38px;
        color: #9B51E0;
      }
      .desc{
        font-size: 20px;
        line-height: 32px;
      }
  }
    .pic{
        flex:1;
        display: flex;
        justify-content: flex-end;
        img{
            max-width: 100%;
        }
    }
`;
export default function Step({ seq = '01', title = "Invite your teammates via link", desc = "After starting a cobrowse window, click on “copy link” in the left bottom corner and send it to your teammates.", pic = "https://static.nicegoodthings.com/works/vera/LnV15n.jpg" }) {
    let descs = typeof desc == 'string' ? [desc] : desc;
    return (
        <StyledWrapper className="step">
            <div className="intro" data-seq={seq}>
                <h3 className="title">{title}</h3>
                <div className="desc">
                    {descs.map(d => {
                        return <p key={d} className="p">{d}</p>
                    })}
                </div>
            </div>
            <div className="pic">
                <img src={pic} alt="step picture" />
            </div>
        </StyledWrapper>
    )
}
