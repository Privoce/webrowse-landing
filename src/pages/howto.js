import React from "react"
import styled from 'styled-components';
import Step from '../components/Step'
const StyledContainer = styled.section`
    padding-top: 72px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  >.title{
    font-size: 36px;
    line-height: 45px;
    padding:72px 0;
    font-weight: 800;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HomePage = () => {
  return (
    <StyledContainer>
      <div className="title">
        <span>
          Learn how to cobrowse with your teammates
        </span>
        <span>
          in 4 Simple Steps
        </span>
      </div>
      <Step />
      <Step seq={'02'} title="See which tab your teammates are viewing" desc={['Click on “tab status” to view tabs and which tab your teammates are at.', 'Clicking on any tab takes you to the tab you want to view.']} pic="https://static.nicegoodthings.com/works/vera/hucv5k.jpg" />
      <Step seq="03" title="Enable Follow Mode to View Tabs Together" desc={["Follow mode allows other users to sync tabs in real time with the host.", "When there is a host, enabling follow mode will automatically take you to the tab that the host is on."]} pic="https://static.nicegoodthings.com/works/vera/clhruI.jpg" />
      <Step seq="04" title="Chat with your teammates when cobrowsing" desc="Turn on voice channel to chat with your teammates" pic="https://static.nicegoodthings.com/works/vera/09LlYp.jpg" />
    </StyledContainer>
  )
}

export default HomePage
