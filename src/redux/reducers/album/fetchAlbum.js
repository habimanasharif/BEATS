import {
    ALBUM_FETCH_SUCCESS,
    ALBUM_FETCH_FAILED,
  } from '../../actionTypes';
  
  const initialState = {
    status: '',
    message: '',
    role: '',
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case ALBUM_FETCH_SUCCESS:
        return {
          ...state,
          status: 'success',
          message: action.message,
          data: action.result,
        };
      case ALBUM_FETCH_FAILED:
        return { ...state, status: 'error', error: action.error };
      default:
        return state;
    }
  };