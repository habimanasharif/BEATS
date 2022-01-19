import axios from '..';
import { ALBUM_FETCH_SUCCESS, ALBUM_FETCH_FAILED } from '../../actionTypes';

export default () => async (dispatch) => {
  try {
    const response = await axios.get('/album/fetch/albums');
    const {
      data: { message, data },
    } = response;
    dispatch({
      type: ALBUM_FETCH_SUCCESS,
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

    dispatch({ type: ALBUM_FETCH_FAILED, error });
  }
};