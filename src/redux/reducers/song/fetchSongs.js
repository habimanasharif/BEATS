import {
    SONGS_FETCH_SUCCESS,
    SONGS_FETCH_FAILED,
  } from '../../actionTypes';
  
  const initialState = {
    status: '',
    message: '',
    role: '',
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case SONGS_FETCH_SUCCESS:
        return {
          ...state,
          status: 'success',
          message: action.message,
          data: action.result,
        };
      case SONGS_FETCH_FAILED:
        return { ...state, status: 'error', error: action.error };
      default:
        return state;
    }
  };