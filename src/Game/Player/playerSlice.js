import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

const NAME = 'player';
const initialState = {
  playerHealth: 100,
  diceA: null,
  diceB: null,
};

const playerSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    damagePlayer: (state, action) => {
      state.playerHealth -= action.payload;
    },
    setDiceRoll: {
      reducer: (state, action) => {
        state.diceA = action.payload.aResult;
        state.diceB = action.payload.bResult;
      },
      prepare: (aResult, bResult) => ({ payload: { aResult, bResult } }),
    },
  },
});

const { damagePlayer, setDiceRoll } = playerSlice.actions;

export const usePlayer = () => {
  const dispatch = useDispatch();
  const s = useSelector((state) => state[NAME]);

  return {
    ...s,
    damagePlayer: (phase) => dispatch(damagePlayer(phase)),
    rollDice: () => {
      const a = Math.floor((Math.random() * 6) + 1);
      const b = Math.floor((Math.random() * 6) + 1);
      dispatch(setDiceRoll(a, b));
    },
  };
};

export default playerSlice.reducer;
