import React from 'react'
import styled from 'styled-components';
import Navbar from "../components/Navbar"
const StyledWrapper = styled.section`
  font-size:24px;
  color:#000;
  font-weight:800;
  height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export default function Uninstall() {
    return (
        <>
            <Navbar />
            <StyledWrapper>
                Uninstalled Successfully
            </StyledWrapper>
        </>
    )
}
