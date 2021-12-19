// Static list of songs
// Selected song
import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Golden Boy', singer: 'Nadav Guedg', duration: '3:03' },
    { title: 'Feker Libi', singer: 'Eden Alene', duration: '3:09' },
    { title: 'Home', singer: 'Kobi Marimi', duration: '3:27' },
    { title: 'I Fell Alive', singer: 'IMRI', duration: '3:08' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') { // Like we have other actions
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});