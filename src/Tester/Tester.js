import Farewell from '../mp3/Farewell.mp3'




import React, { useState, useRef } from 'react'
import ReactPlayer from 'react-player'

function AudioPlayer({filePath}) {
  const [play, setPlay] = useState(false)
  const playerRef = useRef(null)

  function handleReady() {
    playerRef.current.seekTo(30)
    setPlay(true)
  }

  return (
      <ReactPlayer
      ref={playerRef}
      url={filePath}
      controls
      
      playing={play}
      onReady={handleReady}
    />
  )
}

function Swiper() {
  return (
    <div>
        hello
      <AudioPlayer url={process.env.PUBLIC_URL + '../mp3/Farewell.mp3'}/>
    </div>
  )
}

export default Swiper;