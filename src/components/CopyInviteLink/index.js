/**
 * @author: laoona
 * @date:  2022-03-03
 * @time: 17:37
 * @contact: laoona.com
 * @description: #
 */
import React from 'react';
import styled from 'styled-components';
import { IconLink, IconCopy } from "./Icon";

const Styles = styled.div`
  display: flex;
  justify-content: center;
  
  .bar {
    margin: 40px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 29px;
    height: 58px;
    border: 2px solid #fff;
    min-width: 336px;
    padding: 0 20px;
  }
  
  .icon {
    font-size: 24px;
    color: #fff;
  }
  .link {
    position: relative;
    flex: 1;
    margin: 0 20px 0 10px;
    text-align: center;
    color: #fff;
    font-size: 24px;
    :after {
      content: '';
      position: absolute;
      width: 1px;
      height: 24px;
      background-color: #fff;
      top: 50%;
      right: -10px;
      margin-top: -12px;
    }
  }
`;

const CopyInviteLink = () => {
  return <Styles>
    <div className='bar'>
      <i className='icon'>
        <IconLink />
      </i>
      <span className='link'>webrow.se/i#r23736</span>
      <i className='icon'>
        <IconCopy/>
      </i>
    </div>
  </Styles>
};

export default CopyInviteLink;
