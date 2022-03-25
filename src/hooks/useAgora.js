/**
 * @author: laoona
 * @date:  2022-02-14
 * @time: 14:42
 * @contact: laoona.com
 * @description: #
 */

import {useState, useEffect, useCallback} from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';

const APPID = '733ebd8906c84f8baafcbf548dcfe7da';

export default function useAgora(client) {
  const [localVideoTrack, setLocalVideoTrack] = useState(undefined);
  const [localAudioTrack, setLocalAudioTrack] = useState(undefined);
  const [devices, setDevices] = useState([]);
  const [channel, setChannel] = useState('');
  const [intId, setIntId] = useState(null);

  const [joinState, setJoinState] = useState(false);

  const [remoteUsers, setRemoteUsers] = useState([]);
  const [volumes, setVolumes] = useState([])

  const getToken = async (id, channel) => {
    const res =  await fetch(`https://wechat.okeydemo.com/api/agora/get_token?uid=${id}&channel=${channel}`);

    return await res.text();
  };

  async function createLocalTracks(audioConfig, videoConfig) {
    const [microphoneTrack, cameraTrack] = await AgoraRTC.createMicrophoneAndCameraTracks(audioConfig, videoConfig);

    setLocalAudioTrack(microphoneTrack);
    setLocalVideoTrack(cameraTrack);
    return [microphoneTrack, cameraTrack];
  }

  useEffect(() => {
    if (!client) return;

    (async () => {
      // console.log(await AgoraRTC.getMicrophones(true), 'haha', client);
      const devices = await AgoraRTC.getDevices();
      setDevices(devices);
    })();

  }, [client]);

  const join = useCallback(async function (
    channel, intId, audioConfig, videoConfig) {

    if (!client || !intId) return;
    client.enableAudioVolumeIndicator();
    setIntId(intId);
    setChannel(channel);

    const token = await getToken(intId, channel);
    const [microphoneTrack, cameraTrack] = await createLocalTracks(
      audioConfig, videoConfig);

    await client.join(APPID, channel, token || null, +intId);
    await client.publish([microphoneTrack, cameraTrack]);

    window.client = client;
    window.videoTrack = cameraTrack;

    setJoinState(true);
  }, []);

  async function leave() {
    if (localAudioTrack) {
      localAudioTrack.stop();
      localAudioTrack.close();
    }
    if (localVideoTrack) {
      localVideoTrack.stop();
      localVideoTrack.close();
    }
    setRemoteUsers([]);
    setJoinState(false);
    await client?.leave();
  }

  useEffect(() => {
    if (!client) return;
    setRemoteUsers(client.remoteUsers);

    const handleUserPublished = async (user, mediaType) => {
      await client.subscribe(user, mediaType);
      // toggle rerender while state of remoteUsers changed.
      setRemoteUsers(remoteUsers => Array.from(client.remoteUsers));
    }
    const handleUserUnpublished = (user) => {
      setRemoteUsers(remoteUsers => Array.from(client.remoteUsers));
    }
    const handleUserJoined = (user) => {
      setRemoteUsers(remoteUsers => Array.from(client.remoteUsers));
    }
    const handleUserLeft = (user) => {
      setRemoteUsers(remoteUsers => Array.from(client.remoteUsers));
    }

    client.on('user-published', handleUserPublished);
    client.on('user-unpublished', handleUserUnpublished);
    client.on('user-joined', handleUserJoined);
    client.on('user-left', handleUserLeft);

    return () => {
      client.off('user-published', handleUserPublished);
      client.off('user-unpublished', handleUserUnpublished);
      client.off('user-joined', handleUserJoined);
      client.off('user-left', handleUserLeft);
    };
  }, [client]);

  useEffect(() => {
    if (!client || !channel || !intId) return;

    const handleTokenPrivilegeWillExpire = async () => {
      console.log('WillExpire');
      const token = await getToken(intId, channel);
      await client.renewToken(token);
    };

    const handleTokenPrivilegeDidExpire = async () => {
      console.log("Fetching the new Token")
      const token = await getToken(intId, channel);
      console.log("Rejoining the channel with new Token")
      await client.join(APPID, channel, token, intId);
    };

    const handleVolumeIndicator = (volumes) => {
      setVolumes(volumes);

      volumes.forEach((volume, index) => {
        console.log(`${index} UID ${volume.uid} Level ${volume.level}`);
      });
    };
    // 收到 token-privilege-will-expire 回调时，从服务器重新申请一个 Token，并调用 renewToken 将新的 Token 传给 SDK
    client.on("token-privilege-will-expire", handleTokenPrivilegeWillExpire);

    // 收到 token-privilege-did-expire 回调时，从服务器重新申请一个 Token，并调用 join 重新加入频道
    client.on("token-privilege-did-expire", handleTokenPrivilegeDidExpire);

    client.on("volume-indicator", handleVolumeIndicator);

    return () => {
      client.off("token-privilege-will-expire", handleTokenPrivilegeWillExpire);
      client.off("token-privilege-did-expire", handleTokenPrivilegeDidExpire);
      client.off("volume-indicator", handleVolumeIndicator);
    }
  }, [client, channel, intId]);

  return {
    localAudioTrack,
    localVideoTrack,
    joinState,
    leave,
    join,
    remoteUsers,
    devices,
    volumes,
  };
}
