/**
 * @author: laoona
 * @date:  2022-03-18
 * @time: 17:02
 * @contact: laoona.com
 * @description: #
 */

import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  .users {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 0;
    width: 100%;
    &More {
      .player {
        width: 320px;
        height: 240px;
      } 
    }
  }
  .user {
    position: relative;
  }
  .info {
    position: absolute; 
    bottom: 0;
    right: 0;
  }
  .avatar {
    width: 80px;
    height: 80px;
    background-color: #333;
    opacity: 0.6;
    //border-radius: 8px;
    overflow: hidden;
    .pic {
      width: 100%;
      height: 100%;
    }
  }
  .name {
    color: #fff;
    margin-top: 4px;
    text-align: center;
    font-size: 14px;
  }
  `;

export default StyledWrapper;
