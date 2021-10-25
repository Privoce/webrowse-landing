import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
const StyledWrapper = styled.div`
position: absolute;
left: 0;
top:0;
svg .svg-elem-1 {
  stroke-dashoffset: 3094.669921875px;
  stroke-dasharray: 3094.669921875px;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s;
}

svg.active .svg-elem-1 {
  stroke-dashoffset: 0;
}

svg .svg-elem-2 {
  stroke-dashoffset: 2040.2728271484375px;
  stroke-dasharray: 2040.2728271484375px;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.12s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s;
}

svg.active .svg-elem-2 {
  stroke-dashoffset: 0;
}

svg .svg-elem-3 {
  stroke-dashoffset: 1348.9127197265625px;
  stroke-dasharray: 1348.9127197265625px;
  fill: transparent;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.24s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s;
}

svg.active .svg-elem-3 {
  stroke-dashoffset: 0;
  fill: rgb(255, 255, 255);
}

svg .svg-elem-4 {
  stroke-dashoffset: 86.48716735839844px;
  stroke-dasharray: 86.48716735839844px;
  fill: transparent;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.36s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s;
}

svg.active .svg-elem-4 {
  stroke-dashoffset: 0;
  fill: rgb(255, 255, 255);
}

svg .svg-elem-5 {
  stroke-dashoffset: 60.66682434082031px;
  stroke-dasharray: 60.66682434082031px;
  fill: transparent;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.48s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2000000000000002s;
}

svg.active .svg-elem-5 {
  stroke-dashoffset: 0;
  fill: rgb(255, 255, 255);
}

svg .svg-elem-6 {
  stroke-dashoffset: 60.666831970214844px;
  stroke-dasharray: 60.666831970214844px;
  fill: transparent;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s;
}

svg.active .svg-elem-6 {
  stroke-dashoffset: 0;
  fill: rgb(255, 255, 255);
}

svg .svg-elem-7 {
  stroke-dashoffset: 39.71337890625px;
  stroke-dasharray: 39.71337890625px;
  fill: transparent;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.72s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4000000000000001s;
}

svg.active .svg-elem-7 {
  stroke-dashoffset: 0;
  fill: rgb(255, 255, 255);
}

svg .svg-elem-8 {
  stroke-dashoffset: 59.1363525390625px;
  stroke-dasharray: 59.1363525390625px;
  fill: transparent;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.84s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s;
}

svg.active .svg-elem-8 {
  stroke-dashoffset: 0;
  fill: rgb(255, 255, 255);
}

svg .svg-elem-9 {
  stroke-dashoffset: 212.61468505859375px;
  stroke-dasharray: 212.61468505859375px;
  fill: transparent;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.96s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.6s;
}

svg.active .svg-elem-9 {
  stroke-dashoffset: 0;
  fill: rgb(255, 255, 255);
}

svg .svg-elem-10 {
  stroke-dashoffset: 39.71337890625px;
  stroke-dasharray: 39.71337890625px;
  fill: transparent;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.08s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7000000000000002s;
}

svg.active .svg-elem-10 {
  stroke-dashoffset: 0;
  fill: rgb(255, 255, 255);
}

svg .svg-elem-11 {
  stroke-dashoffset: 59.13623809814453px;
  stroke-dasharray: 59.13623809814453px;
  fill: transparent;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.8s;
}

svg.active .svg-elem-11 {
  stroke-dashoffset: 0;
  fill: rgb(255, 255, 255);
}

svg .svg-elem-12 {
  stroke-dashoffset: 212.61468505859375px;
  stroke-dasharray: 212.61468505859375px;
  fill: transparent;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3199999999999998s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.9000000000000001s;
}

svg.active .svg-elem-12 {
  stroke-dashoffset: 0;
  fill: rgb(255, 255, 255);
}

svg .svg-elem-13 {
  stroke-dashoffset: 39.71337890625px;
  stroke-dasharray: 39.71337890625px;
  fill: transparent;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.44s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2s;
}

svg.active .svg-elem-13 {
  stroke-dashoffset: 0;
  fill: rgb(255, 255, 255);
}

svg .svg-elem-14 {
  stroke-dashoffset: 59.13619613647461px;
  stroke-dasharray: 59.13619613647461px;
  fill: transparent;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.56s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.1s;
}

svg.active .svg-elem-14 {
  stroke-dashoffset: 0;
  fill: rgb(255, 255, 255);
}

svg .svg-elem-15 {
  stroke-dashoffset: 212.61465454101562px;
  stroke-dasharray: 212.61465454101562px;
  fill: transparent;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.68s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.2s;
}

svg.active .svg-elem-15 {
  stroke-dashoffset: 0;
  fill: rgb(255, 255, 255);
}

svg .svg-elem-16 {
  stroke-dashoffset: 50px;
  stroke-dasharray: 50px;
  fill: transparent;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7999999999999998s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.3s;
}

svg.active .svg-elem-16 {
  stroke-dashoffset: 0;
  fill: rgb(255, 255, 255);
}

svg .svg-elem-17 {
  stroke-dashoffset: 56px;
  stroke-dasharray: 56px;
  fill: transparent;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.92s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.4000000000000004s;
}

svg.active .svg-elem-17 {
  stroke-dashoffset: 0;
  fill: rgb(255, 255, 255);
}

svg .svg-elem-18 {
  stroke-dashoffset: 56px;
  stroke-dasharray: 56px;
  fill: transparent;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.04s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.5s;
}

svg.active .svg-elem-18 {
  stroke-dashoffset: 0;
  fill: rgb(255, 255, 255);
}

svg .svg-elem-19 {
  stroke-dashoffset: 36.55751918948772px;
  stroke-dasharray: 36.55751918948772px;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.16s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.6s;
}

svg.active .svg-elem-19 {
  stroke-dashoffset: 0;
}

svg .svg-elem-20 {
  stroke-dashoffset: 36.55751918948772px;
  stroke-dasharray: 36.55751918948772px;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.28s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.7s;
}

svg.active .svg-elem-20 {
  stroke-dashoffset: 0;
}

svg .svg-elem-21 {
  stroke-dashoffset: 36.55751918948772px;
  stroke-dasharray: 36.55751918948772px;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.4s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.8s;
}

svg.active .svg-elem-21 {
  stroke-dashoffset: 0;
}

`;
export default function AnimateBrowser() {
    const svgRef = useRef(null);
    useEffect(() => {
        let inter = setTimeout(() => {
            const svgEle = svgRef.current;
            svgEle.classList.add('active');
        }, 300);
        return () => {
            clearTimeout(inter)
        }
    }, [])
    return (
        <StyledWrapper>
            <svg
                ref={svgRef}
                xmlns="http://www.w3.org/2000/svg"
                width="960"
                height="600"
                fill="none"
                viewBox="0 0 960 600"
            >
                <rect
                    width="958"
                    height="598"
                    x="1"
                    y="1"
                    stroke="#fff"
                    strokeWidth="2"
                    className="svg-elem-1"
                    rx="11"
                ></rect>
                <path
                    stroke="#fff"
                    strokeWidth="2"
                    d="M959 40v34H1V40h70a9 9 0 009-9V13a7 7 0 017-7h224a7 7 0 017 7v18a9 9 0 009 9h632z"
                    className="svg-elem-2"
                ></path>
                <rect
                    width="660"
                    height="24"
                    x="110"
                    y="45"
                    fill="#fff"
                    fillOpacity="0.2"
                    className="svg-elem-3"
                    rx="12"
                ></rect>
                <path
                    fill="#fff"
                    d="M87 62a5.002 5.002 0 004.9-4h2.03A7.001 7.001 0 0180 57a7 7 0 0111.95-4.95L94 50v6h-6l2.535-2.535A5 5 0 1087 62z"
                    className="svg-elem-4"
                ></path>
                <path
                    fill="#fff"
                    d="M55.333 50L54 51.4l4.381 4.6H48v2h10.381L54 62.6l1.333 1.4L62 57l-6.667-7z"
                    className="svg-elem-5"
                    opacity="0.3"
                ></path>
                <path
                    fill="#fff"
                    d="M22.667 50L24 51.4 19.619 56H30v2H19.619L24 62.6 22.667 64 16 57l6.667-7z"
                    className="svg-elem-6"
                ></path>
                <g opacity="0.4">
                    <path
                        fill="#fff"
                        d="M780.333 18L779 19.333 781.667 22 779 24.667 780.333 26 783 23.333 785.667 26 787 24.667 784.333 22 787 19.333 785.667 18 783 20.667 780.333 18z"
                        className="svg-elem-7"
                    ></path>
                    <path
                        fill="#fff"
                        d="M571 18a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-4 4h-8a4 4 0 01-4-4v-8z"
                        className="svg-elem-8"
                    ></path>
                    <rect
                        width="100"
                        height="10"
                        x="595"
                        y="17"
                        fill="#fff"
                        className="svg-elem-9"
                        rx="5"
                    ></rect>
                </g>
                <g opacity="0.4">
                    <path
                        fill="#fff"
                        d="M540.333 18L539 19.333 541.667 22 539 24.667 540.333 26 543 23.333 545.667 26 547 24.667 544.333 22 547 19.333 545.667 18 543 20.667 540.333 18z"
                        className="svg-elem-10"
                    ></path>
                    <path
                        fill="#fff"
                        d="M331 18a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-4 4h-8a4 4 0 01-4-4v-8z"
                        className="svg-elem-11"
                    ></path>
                    <rect
                        width="100"
                        height="10"
                        x="355"
                        y="17"
                        fill="#fff"
                        className="svg-elem-12"
                        rx="5"
                    ></rect>
                </g>
                <path
                    fill="#fff"
                    d="M300.333 18L299 19.333 301.667 22 299 24.667 300.333 26 303 23.333 305.667 26 307 24.667 304.333 22 307 19.333 305.667 18 303 20.667 300.333 18z"
                    className="svg-elem-13"
                ></path>
                <path
                    fill="#fff"
                    d="M91 18a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-4 4h-8a4 4 0 01-4-4v-8z"
                    className="svg-elem-14"
                ></path>
                <rect
                    width="100"
                    height="10"
                    x="115"
                    y="17"
                    fill="#fff"
                    className="svg-elem-15"
                    rx="5"
                ></rect>
                <path
                    fill="#fff"
                    d="M816 16h-2v5h-5v2h5v5h2v-5h5v-2h-5v-5z"
                    className="svg-elem-16"
                ></path>
                <path fill="#fff" d="M799 9H800V35H799z" className="svg-elem-17"></path>
                <path fill="#fff" d="M558 9H559V35H558z" className="svg-elem-18"></path>
                <circle
                    cx="19"
                    cy="20"
                    r="5.5"
                    stroke="#fff"
                    className="svg-elem-19"
                ></circle>
                <circle
                    cx="39"
                    cy="20"
                    r="5.5"
                    stroke="#fff"
                    className="svg-elem-20"
                ></circle>
                <circle
                    cx="59"
                    cy="20"
                    r="5.5"
                    stroke="#fff"
                    className="svg-elem-21"
                ></circle>
            </svg>
        </StyledWrapper>
    )
}

