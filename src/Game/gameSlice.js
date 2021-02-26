import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

const NAME = 'game';
const IDLE = 'idle';
export const GAME_STATUS = { IDLE };
const initialState = {
  phase: GAME_STATUS.IDLE,
};

const gameSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    setPhase: (state, action) => {
      state.phase = action.payload;
    },
  },
});

const { setPhase } = gameSlice.actions;

export const useGame = () => {
  const dispatch = useDispatch();
  const s = useSelector((state) => state[NAME]);

  return {
    ...s,
    changePhase: (phase) => dispatch(setPhase(phase)),
  };
};

export default gameSlice.reducer;
