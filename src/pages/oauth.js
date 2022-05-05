import React, { useState, useEffect } from "react";
import styled from "styled-components";
const StyledContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  .err {
    color: red;
  }
`;

const OAuthPage = () => {
  const [link, setLink] = useState(null);
  const [err, setErr] = useState(null);
  useEffect(() => {
    const fetchLoginLink = async () => {
      const params = new URLSearchParams(location.search);
      let uid = params.get("uid");
      let uname = params.get("uname");
      try {
        const resp = await fetch(
          `https://vera.nicegoodthings.com/rustchat/oauth/${uid}/${uname}`
        );
        const data = await resp.json();
        setLink(data.link);
      } catch (error) {
        setErr("something error");
      }
    };

    fetchLoginLink();
  }, []);
  useEffect(() => {
    if (link) {
      location.href = link;
    }
  }, [link]);

  return (
    <StyledContainer>
      {/* <div className="title"> */}
      Logining to Webrowse Rustchat
      {/* </div> */}
      <div className="err">{err}</div>
    </StyledContainer>
  );
};

export default OAuthPage;
