/**
 * @author: laoona
 * @date:  2022-03-03
 * @time: 17:37
 * @contact: laoona.com
 * @description: #
 */
import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  display: flex;
  justify-content: center;
  
  .bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 29px;
    height: 58px;
    border: 2px solid #fff;
    min-width: 300px;
    padding: 0 20px;
  }
  
  .icon {
    width: 10px;
    height: 10px;
    background-color: #fff;
  }
  .button {
    
  }
`;

const CopyInviteLink = () => {
  return <Styles>
    <div className='bar'>
      <i className='icon' />
      <button className='button'>hahah</button>
      <i className='icon' />
    </div>
  </Styles>
};

export default CopyInviteLink;
