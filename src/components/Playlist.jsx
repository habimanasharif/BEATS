import React,{useState} from 'react';
import {FiHeart} from 'react-icons/fi'
import {FaPlay,FaHeart} from 'react-icons/fa'


const Home = () => {
    const[liked,setLiked]=useState(false);
    const[heart, setHeart]=useState(<FiHeart/>)
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
                <FaPlay/></span>
                <span className="heart" onClick={onlike}>
                {heart}
            </span>
            <span className="song-name">Nice for What</span>
            <span className="song-duration">1:20</span>
        </div>
    )
}

export default Home;
