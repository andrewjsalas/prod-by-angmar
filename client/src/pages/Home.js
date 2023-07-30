import React from "react";
import AudioPlayer from "../components/AudioPlayer";
import OmenAudio from '../assets/Muisc/OMEN DEMO TRACK.wav'

function Home() {
    return (
        <>
            <h1>Headline</h1>
            <br></br>
            <div>
                <AudioPlayer audioURL={OmenAudio} />
            </div>
        </>
    )
}

export default Home;