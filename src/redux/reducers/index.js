import { combineReducers } from 'redux';
import album from './album';
import song from './song';

export default combineReducers({
    ...album,
    ...song
});