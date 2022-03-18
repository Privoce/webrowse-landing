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
  const { localVideoTrack, localAudioTrack, joinState, users } = state

  console.log(users, "users1")

  return <StyledWrapper>
    <ul className={`users ${users.length > 1 ? 'usersMore': ''}`}>
      {
        (joinState && localVideoTrack) &&
        <li>
          <MediaPlayer videoTrack={localVideoTrack} audioTrack={undefined} />
        </li>
      }
      {
        users?.map(user =>
          <li key={user.uid} className="user">
            {
              user.hasVideo ?
                <MediaPlayer videoTrack={user.videoTrack} audioTrack={user.audioTrack} />
                :
                <>
                  <div className="avatar" />
                  <div className="name">{user.uid}</div>
                </>
            }
          </li>
        )
      }
    </ul>
  </StyledWrapper>
}

export default Users
