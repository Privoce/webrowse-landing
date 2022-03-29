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
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .avatar {
    width: 160px;
    height: 160px;
    background-color: #333;
    //border-radius: 8px;
    overflow: hidden;
    .pic {
      width: 100%;
      height: 100%;
    }
  }
  .name {
    color: #fff;
    text-align: center;
    font-size: 24px;
  }
  `;

export default StyledWrapper;
