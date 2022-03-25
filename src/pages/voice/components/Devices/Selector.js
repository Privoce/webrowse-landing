/**
 * @author: laoona
 * @date:  2022-03-21
 * @time: 14:27
 * @contact: laoona.com
 * @description: #
 */

import React from "react"
import styled from "styled-components"
import { DropDown } from "../Icon"

const StyledSelector = styled.div`
  .selector {
    width: 380px;
    padding: 0 12px;
    box-sizing: border-box;
    border: 1px solid rgba(208, 213, 221, 1);
    border-radius: 8px;
    display: flex;
    align-items: center;
  }

  .icon {

  }

  .selectMain {
    position: relative;
    width: 100%;
    flex: 1;
    margin: 0 6px;
  }

  .select {
    width: 100%;
    height: 44px;
    opacity: 0;
    cursor: pointer;
  }

  .value {
    position: absolute;
    line-height: 44px;
    font-size: 16px;
    color: rgba(52, 64, 84, 1);
  }
`
const Selector = (
  {
    icon = null, data = [],
    value = "default",
    onChange = () => {
    },
  }) => {

  const handleChange = (ev) => {
    console.log(ev.target.value, "ev")
    onChange(ev.target.value)
  }

  return <StyledSelector>
    <div className="selector">
      {icon}
      <div className="selectMain">
        <div className="value">
          <span className="textLineClamp-1">
            {data.find(item => item.deviceId === value)?.label}
          </span>
        </div>
        <select className="select" onChange={handleChange}>
          {data?.map(item => <option
            key={item.deviceId}
            value={item.deviceId}>{item.label}</option>)}
        </select>
      </div>
      <DropDown />
    </div>
  </StyledSelector>
}

export default Selector
