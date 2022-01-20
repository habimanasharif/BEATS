import React, { useState ,useEffect} from 'react';
import { FaPlay } from 'react-icons/fa'
import { BsCircle } from 'react-icons/bs'
import { GrPause, GrPlay, GrChapterNext, GrChapterPrevious } from 'react-icons/gr'
import { } from 'react-icons/im'
import { FiRepeat, FiShuffle } from 'react-icons/fi'
import Playlist from './Playlist';
import PlaylistContainer from './playlistContainer';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchSongAction from '../redux/actions/song/fetchSongs';




const Home = ({ fetchSongAction: fetchAction, fetchSongs }) => {
    const [play, setPlay] = useState(false);
    const [status, setStatus] = useState('initial');
    const [sng,setSng]=useState([]);
    let [playBtn, setPlayBtn] = useState(<GrPlay className="far" />)
    const [state,setState]=useState("PLAYLISTS");
    const[playStatus,setPlayStatus]=useState("initial")
    const [cur,setCur]=useState("00:00");
     const [end,setEnd]=useState('00:00');
    const [files,setFiles]=useState([]);
    const [song,setSong]=useState("");
    const[cover,setCover]=useState("c9c27aa71e1a3aa54a3ef3dee82d9be7.jpg")
    const[playlistName,setPlaylistName]=useState("Chillin Beats")

    useEffect(() => {
        if (status === 'initial') {
            fetchAction('61e68398fd9c0d002eeb6d97');
            if (fetchSongs.status === 'success') {
              setSng(fetchSongs.data);
              setFiles(fetchSongs.data);
              setSong(fetchSongs.data[0].filename);
              setStatus('success');
            }
            
          }
        const audio= document.getElementById('audio');
    const onplayed= document.getElementById("onplay");
    const  progressContainer =document.getElementById("progressContainer")
    const  prev =document.getElementById("prev")
    const  next =document.getElementById("next")
    function updateProgress(e){
        const {duration,currentTime}=e.srcElement;
        const sec=Math.floor(((duration/60)%1)*100);
        const min=Math.floor(duration/60);
        setEnd(`${min}:${sec}`);
        const progressPercent =(currentTime/duration)*100;
        const curSec=Math.floor(((currentTime/3600))*100);
        const curMin=Math.floor(currentTime/60);
        setCur(`${curMin}:${curSec}`)
        onplayed.style.width =`${progressPercent}%`;
 
    }
    function setProgress(e){
        const width = this.clientWidth;
        const clickX=e.offsetX;
        const duration =audio.duration;
        audio.currentTime =(clickX/width)*duration;
    }
    function nextSong(){
        let songindex=files.indexOf(song);
        songindex++
        if(songindex>files.length-1){
            songindex=0;
        }
        setSong(files[songindex]);
        
    }
    function prevSong(){
        let songindex=files.indexOf(song);
        songindex--
        if(songindex < 0){
            songindex= files.length-1;
        }
        setSong(files[songindex]);
        
    }
    prev.addEventListener('click',prevSong);
    next.addEventListener('click',nextSong);
    
        if(playStatus==='play'){
            
            audio.play().catch((e)=>{
                /* error handler */
             })
             ;
            audio.addEventListener('timeupdate',updateProgress);
            audio.addEventListener('ended',nextSong);
            prev.addEventListener('click',prevSong);
            next.addEventListener('click',nextSong);
            
        }
        if(playStatus==='pause'){
       onplayed.style.animationPlayState='paused'
       audio.pause();
        }

        progressContainer.addEventListener('click',setProgress);
        return undefined;
    }, [playStatus, song, files, fetchSongs, status, sng, fetchAction])
    const onplay = e => {
        e.preventDefault();
        if (!play) {
            setPlay(true)
            setPlayStatus('play');
            setPlayBtn(<GrPause className="far" />)
           
        }
        else {
            setPlay(false);
            setPlayStatus('pause');
            setPlayBtn(<GrPlay className="far" />)
        }
    }
    const changeStateView=(e)=>{
        e.preventDefault();
        if(state==='PLAYLISTS'){
        setState('SONGS')}
        else{
            setState('PLAYLISTS')
        }
    }
    
    const changeAlbum=(album)=>{
   setCover(album.cover)
   setPlaylistName(album.albumname)
    }

    const changeAudioSrc=(src)=>{
        setSong(src)
    }
    return (
        <div className="container">
            <div className="row shadow-lg">
                <div className="col-4 sidebar">
                    <div className="top-color"></div>

                </div>
                <div className="col-md-8 col-sm-12 mainbar">
                    <div style={{ backgroundImage: `url(https://beats-api.herokuapp.com/image/view/${cover})` }} className="album-cover shadow-lg" >

                    </div>
                    <div className="playlist">
                        <p> Drake_Scopion</p>
                        <h4>{playlistName}</h4>
                        <span className="play-btn"><FaPlay className="fas" /></span>
                        <button onClick={changeStateView}>{state}</button>
                        {state==='PLAYLISTS'?(<>
                            <PlaylistContainer changeAlbum={changeAlbum}/>
                        </>):(<>
                            <div className="playlist-list" id="playlist-list">
                            {sng.map((element)=>(song===element.filename?
                            <Playlist song={element} play={changeAudioSrc}status={false}/>
                            :<Playlist song={element} play={changeAudioSrc} status={true}/>))}


                        </div>
                        </>)}
                        
                    </div>
                    <div className="small-controls">
                        <div><span><FiShuffle className="far" /></span></div>
                        <div><span onClick={onplay} class="far fa-play" id="paused"   >{playBtn}</span></div>
                        <div><span><FiRepeat className="far" /></span></div>
                    </div>
                    <div className="controls shadow">
                        <div className="row">
                            <div className="col-3 controls-details">
                                <span className="controls-cover shadow" style={{ backgroundImage: `url(https://beats-api.herokuapp.com/image/view/${cover})` }}></span>
                                <span className="controls-name">Nice For What</span>
                            </div>
                            <div className="col-3 controls-btn">
                                <span><FiShuffle className="far" /></span>
                                <span><GrChapterPrevious className="far" id="prev" /></span>
                                <span onClick={onplay} class="far fa-play" id="paused"   >{playBtn}</span>
                                <span><GrChapterNext className="far" id="next"/></span>
                                <span><FiRepeat className="far" /></span>
                            </div>
                            <div className="col-md-6 col-sm-10" >
                                <span className="start" >{cur}</span> <span className="play-line" id="progressContainer">
            
                                        <div className="onplay" id="onplay">

                                            <BsCircle className="far" /></div>

                                </span> <span className="end">{end}</span>
                            </div>
                            <audio src={`https://beats-api.herokuapp.com/song/play/${song}`} id="audio"></audio>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
Home.propTypes = {
    fetchSongAction: PropTypes.func.isRequired,
    fetchSongs: PropTypes.objectOf(PropTypes.any).isRequired,
  };
  const mapStateToProps = ({ fetchSongs }) => ({
    fetchSongs,
  });

export default connect(mapStateToProps, {
    fetchSongAction,
})(Home);
