import React from 'react';
import {FiHeart} from 'react-icons/fi'
import {FaPlay} from 'react-icons/fa'


const Home = () => {
    return (
        <div className="song">
            <span className="p-btn" id="">
                <FaPlay/></span><span className="heart">
                <FiHeart/>
            </span>
            <span className="song-name">Nice for What</span>
            <span className="song-duration">1:20</span>
        </div>
    )
}

export default Home;
