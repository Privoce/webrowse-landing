/**
 * @author: laoona
 * @date:  2022-03-01
 * @time: 14:52
 * @contact: laoona.com
 * @description: #
 */

import React, { useRef, useEffect } from "react";

const MediaPlayer = (props) => {
  const container = useRef(null);
  useEffect(() => {
    if (!container.current) return;
    props.videoTrack?.play(container.current);
    return () => {
      props.videoTrack?.stop();
    };
  }, [container, props.videoTrack]);

  useEffect(() => {
    if(props.audioTrack){
      props.audioTrack?.play();
    }
    return () => {
      props.audioTrack?.stop();
    };
  }, [props.audioTrack]);

  return (
    <div ref={container}  className="video-player" style={{ width: "320px", height: "240px"}} />
  );
}

export default MediaPlayer;
