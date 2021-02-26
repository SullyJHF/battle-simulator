import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './Game/gameSlice';
import playerReducer from './Game/Player/playerSlice';

export default configureStore({
  reducer: {
    game: gameReducer,
    player: playerReducer,
  },
});
