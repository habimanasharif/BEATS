import React, { useState } from 'react';
import { AnimateKeyframes } from 'react-simple-animate';
import { FaPlay } from 'react-icons/fa'
import { BsCircle } from 'react-icons/bs'
import { GrPause, GrPlay, GrChapterNext, GrChapterPrevious } from 'react-icons/gr'
import { } from 'react-icons/im'
import { FiRepeat, FiShuffle } from 'react-icons/fi'
import Playlist from './Playlist';



const Home = () => {
    const [play, setPlay] = useState(false);
    let [playBtn, setPlayBtn] = useState(<GrPause className="far" />)
    let [onplayWidth, setOnplayWidth] = useState("onplay0");
    const onplay = e => {
        e.preventDefault();
        setOnplayWidth("onplay100")
        if (!play) {
            setPlay(true)
            setPlayBtn(<GrPlay className="far" />)
           
        }
        else {
            setPlay(false);
            setPlayBtn(<GrPause className="far" />)
        }
    }

    return (
        <div className="container">
            <div className="row shadow-lg">
                <div className="col-4 sidebar">
                    <div className="top-color"></div>

                </div>
                <div className="col-8 mainbar">
                    <div className="album-cover shadow-lg">

                    </div>
                    <div className="playlist">
                        <p> Drake_Scopion</p>
                        <h4>Chillin' Beats</h4>
                        <span className="play-btn"><FaPlay className="fas" /></span>
                        <button>ADDPLAYLIST</button>
                        <div className="playlist-list" id="playlist-list">
                            <Playlist />
                            <Playlist />
                            <Playlist />
                            <Playlist />
                            <Playlist />

                        </div>
                    </div>
                    <div className="controls shadow">
                        <div className="row">
                            <div className="col-3 controls-details">
                                <span className="controls-cover shadow"></span>
                                <span className="controls-name">Nice For What</span>
                            </div>
                            <audio src="./audio/Music/24kgoldn_mood.mp3" id="24k"></audio>
                            <div className="col-3 controls-btn">
                                <span><FiShuffle className="far" /></span>
                                <span><GrChapterPrevious className="far" /></span>
                                <span onClick={onplay} >{playBtn}</span>
                                <span><GrChapterNext className="far" /></span>
                                <span><FiRepeat className="far" /></span>
                            </div>
                            <div className="col-6">
                                <span className="start">00:00</span> <span className="play-line">
                                    <AnimateKeyframes
                                        play
                                        pause={play}
                                        delay={0}
                                        duration={135}
                                        keyframes={[
                                           { 0:'width: 0%'},
                                           { 100:'width: 100%'},
                                        ]}
                                    >
                                        <div className={onplayWidth} id="onplay">

                                            <BsCircle className="far" /></div>
                                    </AnimateKeyframes>
                                </span> <span>01:20</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;
