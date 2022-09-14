import React, { useState, useEffect, useCallback, useContext } from "react"
import styled from 'styled-components';
import { AuthenticationClient } from "authing-js-sdk"
import GuardConfig, { appId } from "../../../constants/guardConfig"
import { PassportContext, UPDATE_USER } from "../_context"

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .item{
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    .title{
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #44494F;
    }
    .img{
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }
    .name{
      padding: 10px 16px;
      background: #EBEBEC;
      color: #A0A2A5;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      border-radius: 6px;
      border: none;
      outline: none;
    }
    .tip{
      font-weight: normal;
      font-size: 12px;
      line-height: 18px;
      color: #A0A2A5;
      em{
        font-style: normal;
        color: #333;
      }
    }
  }
  .btn{
    cursor:pointer;
    border-radius: 20px;
    font-weight: bold;
    font-size: 12px;
    line-height: 18px;
    color: #fff;
    padding: 4px 12px;
    text-decoration: none;
    border: none;
    outline: none;
    &.update{
      background: #52E9FB;
      margin-bottom: 48px;
    }
    &.logout{
      background: #E42222;
      &:hover{
        background: #BA1B1B;
      }
    }
  }
`;
export default function Profile() {
  const [authing, setAuthing] = useState(null)

  const { state, dispatch } = useContext(PassportContext);

  const user = state?.user;

  useEffect(() => {
    if (!user?.token) return;

    const authenticationClient = new AuthenticationClient({
      appId,
      appHost: GuardConfig.appHost,
      token: user?.token,
    });

    setAuthing(authenticationClient);
  }, [user?.token]);

  /**
   * 退出
   * @type {(function(): Promise<void>)|*}
   */
  const handleLogout = useCallback(async () => {
    const res = await authing.logout();
    if (!res) {
      window.location.href = '/';
    }
  }, [authing]);

  /**
   * 更新头像
   * @type {(function(): Promise<void>)|*}
   */
  const handlerUpload = useCallback(async () => {

    if (!authing) return;

    // 仅选择 png 格式的图片
    const _user = await authing.uploadAvatar();

    if (_user?.photo) {
      dispatch({
        type: UPDATE_USER,
        payload: {
          ...user,
          avatar: _user.photo,
        }
      });
    }
  }, [authing]);

  if (!user?.username) return <></>;

  return (
    <StyledProfile>
      <div className="item">
        <div className="title">Avatar</div>
        <img
          onClick={handlerUpload}
          src={user.avatar || 'https://static.nicegoodthings.com/project/ext/webrowse.logo.png'}
          alt="avatar" className="img" />
      </div>
      <div className="item">
        <div className="title">Name</div>
        <input readOnly className="name" value={user.username} />
      </div>
      {/*<a href="https://portal-china.authing.cn/u" target="_blank" className="btn update">Edit</a>*/}

      <div className="item">
        <button onClick={handleLogout} className="btn logout">Log Out</button>
      </div>
    </StyledProfile>
  )
}
