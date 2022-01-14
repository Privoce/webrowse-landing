/**
 * @author: laoona
 * @date:  2022-01-14
 * @time: 10:53
 * @contact: laoona.com
 * @description: #
 */
import React from "react"
import styled from "styled-components"

const Styles = styled.section`
  text-align: center;
  color: #fff;
  .title {
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
  }
  .text {
    margin: 48px 0 75px 0;
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;  
  }
`;
const Privacy = () => {
  return <Styles>
    <section>
      <p className={'title'}>Privacy Policy</p>
      <div className={'text'}>
        <p>User privacy is a priority for us and we make a commitment to keep your data safe.</p>
        <p>Webrowse does not store data from any shared tabs, windows, and account details.</p>
      </div>
    </section>
  </Styles>
}

export default Privacy
