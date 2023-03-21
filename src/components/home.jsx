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
    let [playBtn, setPlayBtn] = useState(<GrPlay className="far big" />)
    const [state,setState]=useState("PLAYLISTS");
    const[playStatus,setPlayStatus]=useState("initial")
    const [cur,setCur]=useState("00:00");
     const [end,setEnd]=useState('00:00');
    const [files,setFiles]=useState([]);
    const [song,setSong]=useState("");
    const[cover,setCover]=useState("0714388eb0b539e133123d5ee5fb5358.jpg")
    const[playlistName,setPlaylistName]=useState("Drill Hits")
    const [playing,setPlaying]=useState({})
    const [playlist,setPlaylist]=useState('640f653a16fde472093d0e72')
    const [refetch,setRefetch]=useState('norefetch')

    useEffect(() => {
        if (status === 'initial') {
            fetchAction(playlist);
            if (fetchSongs.status === 'success') {
              setSng(fetchSongs.data);
              setFiles(fetchSongs.data);
              setSong(fetchSongs.data[0].filename);
              setStatus('success');
              fetchSongs.status='done';
            }
            
          }
 if(refetch==='refetch'){
    fetchAction(playlist);
            if (fetchSongs.status === 'success') {
              setSng(fetchSongs.data);
              setFiles(fetchSongs.data);
              setSong(fetchSongs.data[0].filename);
              setStatus('success');

              setRefetch('norefetch')
            } }

          if(song!==""){
          const playn=files.filter((s)=>s.filename===song)
             setPlaying(playn[0]);}
        const audio= document.getElementById('audio');
    const onplayed= document.getElementById("onplay");
    const  progressContainer =document.getElementById("progressContainer")
    const  prev =document.getElementById("prev")
    const  next =document.getElementById("next")
    function updateProgress(e){
        const {duration,currentTime}=e.srcElement;
        var sec
        if(Math.floor(duration) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(duration)>=(60*i) && Math.floor(duration)<(60*(i+1))) {
					sec = Math.floor(duration) - (60*i);
				}
			}
		}else{
            sec=isNaN(duration)===true?0: Math.floor(currentTime);
		 }
        const min= isNaN(duration)===true?0:Math.floor(duration/60);
        setEnd(`${min}:${sec<10?`0${sec}`:sec}`);
        const progressPercent =(currentTime/duration)*100;
        //const curSec=Math.floor(((currentTime/60)%1)*100);
        var curSec
        if(Math.floor(currentTime) >= 60){
			
			for (var x = 1; x<=60; x++){
				if(Math.floor(currentTime)>=(60*x) && Math.floor(currentTime)<(60*(x+1))) {
					curSec = Math.floor(currentTime) - (60*x);
				}
			}
		}else{
            curSec = Math.floor(currentTime);
		 }
        const curMin=Math.floor(currentTime/60);
        setCur(`${curMin}:${curSec<10?`0${curSec}`:curSec}`)
        onplayed.style.width =`${progressPercent}%`;
 
    }
    function setProgress(e){
        const width = this.clientWidth;
        const clickX=e.offsetX;
        const duration =audio.duration;
        audio.currentTime =(clickX/width)*duration;
    }
    function nextSong(){
        const songnames=files.map((s)=>s.filename)
        let songindex=songnames.indexOf(song);
        const playn=files.filter((s)=>s.filename===song)
             setPlaying(playn[0]);
        songindex++
        if(songindex>files.length-1){
            songindex=0;
        }
        setSong(songnames[songindex]);
        
    }
    function prevSong(){
        const songnames=files.map((s)=>s.filename)
        let songindex=songnames.indexOf(song);
        const playn=files.filter((s)=>s.filename===song)
             setPlaying(playn[0]);
        songindex--
        if(songindex < 0){
            songindex= songnames.length-1;
        }
        setSong(songnames[songindex]);
        
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
    }, [playStatus, song, files, fetchSongs, status, sng, fetchAction, playing, refetch, playlist])

    const onplay = e => {
        e.preventDefault();
        if (!play) {
            setPlay(true)
            setPlayStatus('play');
            setPlayBtn(<GrPause className="far big" />)
           
        }
        else {
            setPlay(false);
            setPlayStatus('pause');
            setPlayBtn(<GrPlay className="far big" />)
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
    const next=(e)=>{
        e.preventDefault()
        const songnames=files.map((s)=>s.filename)
        let songindex=songnames.indexOf(song);
        const playn=files.filter((s)=>s.filename===song)
             setPlaying(playn[0]);
        songindex++
        if(songindex>files.length-1){
            songindex=0;
        }
        setSong(songnames[songindex]);
    }
    const prev=(e)=>{
        e.preventDefault()
        const songnames=files.map((s)=>s.filename)
        let songindex=songnames.indexOf(song);
        const playn=files.filter((s)=>s.filename===song)
             setPlaying(playn[0]);
        songindex--
        if(songindex < 0){
            songindex= songnames.length-1;
        }
        setSong(songnames[songindex]);
    }
    
    const changeAlbum=(album)=>{
   setCover(album.cover)
   setPlaylistName(album.albumname)
   setPlaylist(album._id)
   fetchSongs=[];
   setStatus('initial')
   setState('Song')
   setRefetch('refetch')
   
    }

    const changeAudioSrc=(src)=>{
        setSong(src)
        if (!play) {
            setPlay(true)
            setPlayStatus('play');
            setPlayBtn(<GrPause className="far big" />)
           
        }
        else {
            setPlay(false);
            setPlayStatus('pause');
            setPlayBtn(<GrPlay className="far big" />)
        }
    }
    return (
        <div className="container">
            <div className="row shadow-lg">
                <div className="col-4 sidebar">
                    <div className="top-color"></div>

                </div>
                <div className="col-md-8 col-sm-12 mainbar">
                    <div style={{ backgroundImage: `url(https://beats-api.onrender.com/image/view/${cover})` }} className="album-cover shadow-lg" >

                    </div>
                    <div className="playlist">
                        <p>{playing?`${playing.originalname}_${playing.artistname}`:'Loading...'}</p>
                        <h4>{playlistName}</h4>
                        <span className="play-btn" onClick={onplay}><FaPlay className="fas" /></span>
                        <button onClick={changeStateView}>{state}</button>
                        {state==='PLAYLISTS'?(<>
                            <PlaylistContainer changeAlbum={changeAlbum}/>
                        </>):(<>
                            <div className="playlist-list" id="playlist-list">
                            {sng.map((element,index)=>(song===element.filename && playStatus==='play'?
                            <Playlist song={element} play={changeAudioSrc}status={false}  key={index} cover={cover}/>
                            :<Playlist song={element} play={changeAudioSrc} status={true} key={index} cover={cover}/>))}


                        </div>
                        </>)}
                        
                    </div>
                    <div className="small-controls">
                        <div><span><FiShuffle className="far" /></span></div>
                        <div><span><GrChapterPrevious className="far big" onClick={prev} /></span></div>
                        <div><span onClick={onplay} className="far fa-play " id="paused"   >{playBtn}</span></div>
                        <div><span><GrChapterNext className="far big" onClick={next}/></span></div>
                        <div><span><FiRepeat className="far" /></span></div>
                    </div>
                    <div className="controls shadow">
                        <div className="row">
                            <div className="col-3 controls-details">
                                <span className="controls-cover shadow" style={{ backgroundImage: `url(https://beats-api.onrender.com/image/view/${cover})` }}></span>
                                <span className="controls-name">{ playing?playing.originalname:'Loading..'}</span>
                            </div>
                            <div className="col-3 controls-btn">
                                <span><FiShuffle className="far" /></span>
                                <span><GrChapterPrevious className="far" id="prev" /></span>
                                <span onClick={onplay} className="far fa-play" id="paused"   >{playBtn}</span>
                                <span><GrChapterNext className="far" id="next"/></span>
                                <span><FiRepeat className="far" /></span>
                            </div>
                            <div className="col-md-6 col-sm-10" >
                                <span className="start" >{cur}</span> <span className="play-line" id="progressContainer">
            
                                        <div className="onplay" id="onplay">

                                            <BsCircle className="far" /></div>

                                </span> <span className="end">{end}</span>
                            </div>
                            <audio src={`https://beats-api.onrender.com/song/play/${song}`} id="audio"></audio>
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
