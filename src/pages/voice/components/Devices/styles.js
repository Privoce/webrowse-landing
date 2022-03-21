/**
 * @author: laoona
 * @date:  2022-03-21
 * @time: 14:13
 * @contact: laoona.com
 * @description: #
 */

import styled from "styled-components"

const StyledDevices = styled.section`
  width: 100vw;
  height: 100vh;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px 16px;
    box-sizing: border-box;
    width: 412px;
    min-height: 462px;
    box-shadow: 0px 4px 14px 2px rgba(0, 0, 0, 0.16);
    border-radius: 8px;
  }

  .title {
    font-size: 20px;
    color: rgba(68, 73, 79, 1);
    line-height: 30px;
    text-align: center;
    margin-bottom: 32px;
  }

  .space {
    height: 8px;
  }

  .statusText {
    margin: 32px 0 8px;
    text-align: center;
    word-break: break-all;
    font-size: 16px;
    color: rgba(68, 73, 79, 1);
    line-height: 24px;
  }

  .descText {
    text-align: center;
    word-break: break-all;
    font-size: 12px;
    color: rgba(92, 96, 101, 1);
    line-height: 18px;
  }

  .button {
    display: block;
    width: 150px;
    height: 32px;
    border: none;
    background-color: rgba(82, 237, 255, 1);
    color: rgba(25, 24, 29, 1);
    margin: 32px auto 0;
    border-radius: 50px;
    cursor: pointer;
  }
  .playerWrap {
    position: relative;
    height: 240px;
    margin: 0 -16px;
    background-color: #ccc;
    margin-bottom: 16px;
    .player {
      width: 100%;
      height: 240px;
    }
    .buttons {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 16px;
    }
  }
`

export default StyledDevices
