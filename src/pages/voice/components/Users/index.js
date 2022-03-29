/**
 * @author: laoona
 * @date:  2022-03-18
 * @time: 17:02
 * @contact: laoona.com
 * @description: #
 */

import React, { useContext } from "react"
import StyledWrapper from "./styles"
import MediaPlayer from "../MediaPlayer"
import { VoiceContext } from "../../reducer"

const Users = () => {
  const { state = {} } = useContext(VoiceContext)
  const { localVideoTrack, users, currentUser, extUsers } = state

  return <StyledWrapper>
    <ul className={`users ${users?.length > 1 ? "usersMore" : ""}`}>
      <li className="user">
        <MediaPlayer videoTrack={localVideoTrack} audioTrack={undefined} />
        {
          localVideoTrack?.muted &&
          <div className="info">
            {
              currentUser?.photo ?
                <div className="avatar"><img src={currentUser?.photo} className="pic" alt="" /></div>
                :
                <div className="name">{currentUser?.username}</div>
            }
          </div>
        }
      </li>
      {
        users?.map(user =>
          <li key={user.uid} className="user">
            <MediaPlayer videoTrack={user.videoTrack} audioTrack={user.audioTrack} />
            {!(user.hasVideo) &&
              <div className="info">
                {
                  extUsers.find(item => item.intUid === user.uid)?.photo ?
                    <div className="avatar">
                      <img
                        src={extUsers.find(item => item.intUid === user.uid)?.photo}
                        className="pic" alt="" />
                    </div>
                    :
                    <div className="name">{extUsers.find(item => item.intUid === user.uid)?.username}</div>
                }
              </div>
            }
          </li>
        )
      }
    </ul>
  </StyledWrapper>
}

export default Users
