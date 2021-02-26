import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

const NAME = 'player';
const initialState = {
  playerHealth: 100,
};

const playerSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    damagePlayer: (state, action) => {
      state.playerHealth -= action.payload;
    },
  },
});

const { damagePlayer } = playerSlice.actions;

export const usePlayer = () => {
  const dispatch = useDispatch();
  const s = useSelector((state) => state[NAME]);

  return {
    ...s,
    damagePlayer: (phase) => dispatch(damagePlayer(phase)),
  };
};

export default playerSlice.reducer;
