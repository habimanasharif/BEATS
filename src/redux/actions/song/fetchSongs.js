import axios from '..';
import { SONGS_FETCH_SUCCESS, SONGS_FETCH_FAILED } from '../../actionTypes';

export default (album) => async (dispatch) => {
  try {
    const response = await axios.get(`/song/fetch/${album}`);
    const {
      data: { message, data },
    } = response;
    dispatch({
      type: SONGS_FETCH_SUCCESS,
      message,
      result: data,
    });
  } catch (err) {
    let error = {};
    if (err.response) {
      const {
        data: { status, message },
      } = err.response;
      error = { status, message };
    } else {
      error = {
        status: 500,
        message: err.message,
      };
    }

    dispatch({ type: SONGS_FETCH_FAILED, error });
  }
};