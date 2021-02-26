import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './Game/gameSlice';

export default configureStore({
  reducer: {
    game: gameReducer,
  },
});
