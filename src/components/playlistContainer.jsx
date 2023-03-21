import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchAlbumAction from '../redux/actions/album/fetchAlbum';
import SinglePlaylist from './singlePlaylist';

const PlaylistContainer=({ fetchAlbumAction: fetchAction, fetchAlbum,changeAlbum })=>{
    const [status, setStatus] = useState('initial');
    const [playlist,setPlaylist]=useState([]);
    useEffect(() => {
        if (status === 'initial') {
            fetchAction();
            if (fetchAlbum.status === 'success') {
              setPlaylist(fetchAlbum.data);
              setStatus('success');
              
            }
          }
          console.log()
        return undefined;
    },[fetchAction, fetchAlbum, status])


    return(
        <div className="playlists-list">
         {playlist.map((playlist,index)=>(<SinglePlaylist data={playlist} key={index} changeAlbum={changeAlbum}/>))}
      
        </div>
    )
}

PlaylistContainer.propTypes = {
    fetchAlbumAction: PropTypes.func.isRequired,
    fetchAlbum: PropTypes.objectOf(PropTypes.any).isRequired,
  };
  const mapStateToProps = ({ fetchAlbum }) => ({
    fetchAlbum,
  });

export default connect(mapStateToProps, {
    fetchAlbumAction,
})(PlaylistContainer);