import React, {useState} from 'react';

import Farewell from '../mp3/Farewell.mp3'
import './AudioPlayer.css'
import {GoArrowLeft} from 'react-icons/go';
import {GoArrowRight} from 'react-icons/go';
import {FaPlay} from 'react-icons/fa';
import {FaPause} from 'react-icons/fa';


const AudioPlayer = () => {

    const [isPlaying, setIsPlaying] =  useState(true);

    const togglePlayPause = () => {
        
        setIsPlaying(!isPlaying);

    }

    return (  
        <div className="audioPlayer">
            <audio src ='../mp3/Farewell.mp3'></audio>
            
            <button className='forwardBackward'><GoArrowLeft/> 30</button>
            
            <button onClick={togglePlayPause} className='playPause'>
                {isPlaying ? <FaPause/> : <FaPlay className='play'/>}
                
            </button>
            
            <button className='forwardBackward'> 30<GoArrowRight/></button>

            {/*current time*/}

            <div className='currentTime'>0:00</div>

            {/*progress bar*/}
            <div>
                <input type="range" className='progressBar'/>
            </div>


            {/*Duration*/}
            <div className='duration'>2:49</div>

        </div>
    );
}
 
export default AudioPlayer;