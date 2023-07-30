import React from "react";
import ReactAudioPlayer from 'react-audio-player'
import music from '../music/Melendi.mp3'

const AudioPlayer = () => {
    return (
        <div>
            <ReactAudioPlayer
                src={music}
                autoPlay={true}
                // controls
            />
        </div>
    )
}

export default AudioPlayer;