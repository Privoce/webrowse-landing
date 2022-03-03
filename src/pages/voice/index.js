/**
 * @author: laoona
 * @date:  2022-03-01
 * @time: 15:12
 * @contact: laoona.com
 * @description: #
 */

import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';

import AgoraRTC from 'agora-rtc-sdk-ng';
import useAgora from '../hooks/useAgora';
import MediaPlayer from "./components/MediaPlayer";

const client = AgoraRTC.createClient({ codec: 'h264', mode: 'rtc' });

const Voice = ({users = []}) => {
  const { user: localUser } = {user: {intId: 1}};

  const params = new URLSearchParams(location.search)
  const uid = +params.get('uid') || 1;
  const cid = params.get('cid') || 'test';

  const {
    localAudioTrack,
    localVideoTrack,
    leave,
    join,
    joinState,
    remoteUsers,
    volumes,
  } = useAgora(client, uid);

  // console.log(localVideoTrack.audioTrack.getVolumeLevel())
  console.log(
    localVideoTrack, localAudioTrack?.getVolumeLevel(), 'haha', users,
    client,
  );
  useEffect(() => {
    if (!uid || !cid) return;

    console.log('join');
    // join(cid, uid);
  }, [uid, cid]);

  console.log(localUser, 'remoteUsers', volumes)

  return (
    <div className='call'>
      <Helmet
      >
        <style type="text/css">{`
        body {
            background-color: white;
        }
    `}</style>
      </Helmet>
      <form className='call-form'>
        <div className='button-group'>
          <button id='join' type='button' className='btn btn-primary btn-sm' disabled={joinState} onClick={() => {join(cid, uid)}}>Join</button>
          <button id='leave' type='button' className='btn btn-primary btn-sm' disabled={!joinState} onClick={() => {leave()}}>Leave</button>
        </div>
      </form>
      <div className='player-container'>
        <div className='local-player-wrapper'>
          <p className='local-player-text'>{localVideoTrack && `localTrack`}{joinState && localVideoTrack ? `(${client.uid})` : ''}</p>
          <MediaPlayer videoTrack={localVideoTrack} audioTrack={undefined}/>
        </div>
        <span>
        {
          volumes.find(item => item.uid === client.uid)?.level
        }
        </span>
        {remoteUsers.map(user => (<div className='remote-player-wrapper' key={user.uid}>
          <p className='remote-player-text'>{`remoteVideo(${user.uid})`}</p>
          <span>
            {
              volumes.find(item => item.uid === user.uid)?.level
            }
          </span>
          <MediaPlayer videoTrack={user.videoTrack} audioTrack={user.audioTrack}/>
        </div>))}
      </div>
    </div>);
};

export default Voice;
