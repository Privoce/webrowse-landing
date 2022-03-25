/**
 * @author: laoona
 * @date:  2022-03-01
 * @time: 14:52
 * @contact: laoona.com
 * @description: #
 */

import React, { useRef, useEffect } from "react"
import StyledWrapper from "./styles"

const Index = (props) => {
  const container = useRef(null)
  useEffect(() => {
    if (!container.current) return
    props.videoTrack?.play(container.current)
    return () => {
      props.videoTrack?.stop()
    }
  }, [container, props.videoTrack])

  useEffect(() => {
    if (props.audioTrack) {
      props.audioTrack?.play()
    }
    return () => {
      props.audioTrack?.stop()
    }
  }, [props.audioTrack])

  return (
    <StyledWrapper>
      <div ref={container} className="player" />
    </StyledWrapper>
  )
}

export default Index
