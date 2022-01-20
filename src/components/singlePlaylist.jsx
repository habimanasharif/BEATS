import React from 'react';
import { FaPlay } from 'react-icons/fa'


const SinglePlaylist=({data,changeAlbum})=>{
    const change=(e)=>{
        e.preventDefault();
        changeAlbum(data);
    }
    return(
        <div className='playlist-cover' style={{ backgroundImage: `url(https://beats-api.herokuapp.com/image/view/${data.cover})` }}>
        <span className="play-btn playlist-player" onClick={change}><FaPlay className="fas" /></span>
        <h1 className='playlist-name'>{data.albumname}</h1>
        <p className='sings-number'> 50 tracks</p>
        </div>
    )
}
export default SinglePlaylist