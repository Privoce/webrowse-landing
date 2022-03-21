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
  const { state } = useContext(VoiceContext)
  const { localVideoTrack, users } = state

  return <StyledWrapper>
    <ul className={`users ${users.length > 1 ? 'usersMore': ''}`}>
      <li>
        <MediaPlayer videoTrack={localVideoTrack} audioTrack={undefined} />
      </li>
      {
        users?.map(user =>
          <li key={user.uid} className="user">
            {
              (user.hasVideo || user.hasAudio) ?
                <MediaPlayer videoTrack={user.videoTrack} audioTrack={user.audioTrack} />
                : null
/*
                <>
                  <div className="avatar"><img src={user.photo} className="pic" alt="" /></div>
                  <div className="name">{user.username}</div>
                </>
*/
            }
          </li>
        )
      }
    </ul>
  </StyledWrapper>
}

export default Users
