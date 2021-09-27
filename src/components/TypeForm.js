import React, { useEffect, useRef, useState } from 'react'
import { createWidget } from '@typeform/embed'
import '@typeform/embed/build/css/widget.css'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import styled, { keyframes } from 'styled-components';

const AniBounceIn = keyframes`
 from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;
const StyledWrapper = styled.aside`
    z-index: 999;
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    background: rgba(2,2,2,.3);
    .typeform{
        width: 600px;
        height: 600px;
    }
    .close{
        display: none;
        cursor: pointer;
        user-select: none;
    }
    .tip{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate3d(-50%,-50%,0);
        font-weight: bold;
        text-transform: uppercase;
        font-size: 22px;
        padding:15px 25px;
        background: #000;
        color: #fff;
    }
    &.loaded{
        .close{
            display: block;
        }
        .typeform{
            animation: ${AniBounceIn} 1s both;
        }
    }
`;
export default function TypeForm({ closeModal }) {
    const wrapper = useRef(null);
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        createWidget('KeZQmkfZ', {
            // chat: true,
            container: wrapper.current.querySelector('.typeform'), onReady: () => {
                setLoaded(true);
            }
        });
    }, []);
    return <StyledWrapper ref={wrapper} className={loaded ? 'loaded' : ''} >
        <div className={`typeform`}></div>
        <div className="close" onClick={closeModal}><IoMdCloseCircleOutline size={50} color="#fff" /></div>
        {!loaded && <div className="tip">loading...</div>}
    </StyledWrapper>;

}
