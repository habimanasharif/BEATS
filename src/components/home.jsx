import React, { useState ,useEffect} from 'react';
import { FaPlay } from 'react-icons/fa'
import { BsCircle } from 'react-icons/bs'
import { GrPause, GrPlay, GrChapterNext, GrChapterPrevious } from 'react-icons/gr'
import { } from 'react-icons/im'
import { FiRepeat, FiShuffle } from 'react-icons/fi'
import Playlist from './Playlist';



const Home = () => {
    const [play, setPlay] = useState(false);
    let [playBtn, setPlayBtn] = useState(<GrPause className="far" />)
    const[playStatus,setPlayStatus]=useState("initial")
   
    useEffect(() => {
        if(playStatus==='initial'){
            const onplayed= document.getElementById("onplay");
            onplayed.style.animation="runOnplay 135s linear"
        }
        return undefined;
    }, [playStatus])
    const onplay = e => {
        e.preventDefault();
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
                                <span onClick={onplay} class="far fa-play" id="paused"   >{playBtn}</span>
                                <span><GrChapterNext className="far" /></span>
                                <span><FiRepeat className="far" /></span>
                            </div>
                            <div className="col-6">
                                <span className="start">00:00</span> <span className="play-line">
            
                                        <div className="onplay" id="onplay">

                                            <BsCircle className="far" /></div>

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
