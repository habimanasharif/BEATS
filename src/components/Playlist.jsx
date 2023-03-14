/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react';
import {FiHeart} from 'react-icons/fi'
import {FaPlay,FaHeart,FaPause} from 'react-icons/fa'



const Home = ({song,play,status,cover}) => {
    const[liked,setLiked]=useState(false);
    const[heart, setHeart]=useState(<FiHeart/>)
    const[playing,setPlaying]=useState(status);
    useEffect(() => {
        setPlaying(status);
        return undefined;
    }, [status,playing])
    const onclick= (e)=>{
        e.preventDefault(); 
        play(song.filename);
        
      }

    const onlike = e => {
        e.preventDefault();
        if(!liked){
            setLiked(true)
            setHeart(<FaHeart/>)
        }else{
            setLiked(false)
            setHeart(<FiHeart/>) 
        }

       
      }
     
    return (
        <div className="song">
            <span className="p-btn" id="" >
                {playing?<FaPlay className="far" onClick={onclick} />:<FaPause className="far" onClick={onclick} />}
               </span>
                <span className="heart" onClick={onlike}>
                {heart}
            </span>
            <span className="song-name">{song.originalname} <span className='artistname'> {song.artistname}</span></span>
            <span className="song-duration"> <span className="controls-cover shadow" style={{ backgroundImage: `url(https://beats-api.onrender.com/image/view/${cover})` }}></span></span>
        </div>
    )
}

export default Home;
