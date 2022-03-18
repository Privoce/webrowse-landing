/**
 * @author: laoona
 * @date:  2022-03-18
 * @time: 16:29
 * @contact: laoona.com
 * @description: #
 */

import styled from "styled-components"

const StyledWrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;

  .header {
    display: flex;
    //flex-direction: column;
    align-items: center;
    padding: 15px;
    justify-content: center;

    .title {
      color: #056CF2;
      font-style: normal;
      font-weight: 800;
      font-size: 36px;
      line-height: 139.8%;
      padding-left: 60px;
      background-image: url('https://static.nicegoodthings.com/project/ext/webrowse.logo.v2.png');
      background-size: contain;
      background-repeat: no-repeat;
      margin-bottom: 0;
    }

    .sub_title {
      display: none;
      color: #606368;
      font-weight: normal;
      font-size: 24px;
      line-height: 139.8%;
      margin-bottom: 0;
      margin-left: 10px;
    }
  }
  .joinWrap {
    position: absolute;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    .button {
      display: flex;
      align-items: center;
      cursor: pointer;
      border: none; 
      //background-color: transparent;
      background-color: #f26b4d;
      padding: 4px 20px;
      border-radius: 12px;
      gap: 10px;
      font-size: 16px;
      &:hover {
        background-color: #c35037;
      }
    }
    .inner {
    }
  }
`

export default StyledWrapper
