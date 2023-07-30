import React, { useState, useRef } from "react";
import { BsPlayFill, BsPauseFill } from 'react-icons/bs';

const AudioPlayer = ({ audioURL }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(0.5);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        audioRef.current.volume = newVolume;
        setVolume(newVolume);
    };

    const handleTimeUpdate = () => {
        const currentTime = audioRef.current.currentTime;
        const duration = audioRef.current.duration;
        setProgress((currentTime / duration) * 100);
    };

    const handleScrub = (e) => {
        const scrubTime = (e.nativeEvent.offsetX / e.target.offsetWidth) * audioRef.current.duration;
        audioRef.currentTime = scrubTime;
        setProgress((scrubTime / audioRef.current.duration) * 100);
    }

    return (
        <div className="audio-player">
            <audio 
                ref={audioRef}
                src={audioURL}
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
            />

            <div className="audio-controls">
                <button className="play-pause-button" onClick={togglePlayPause}>
                    {isPlaying ? <BsPauseFill /> : <BsPlayFill />}    
                </button>
                <div className="progress-bar-container" onClick={handleScrub}>
                    <div className="progress-bar" style={{ width: `$${progress}%` }} />
                </div>
                <input 
                    type="range"
                    className="volume-slider"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={handleVolumeChange}
                />    
            </div> 
        </div>
    );
};

export default AudioPlayer;