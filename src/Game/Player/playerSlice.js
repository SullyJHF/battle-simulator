import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

const NAME = 'player';
export const MAX_HEALTH = 100;
const initialActorState = {
  health: MAX_HEALTH,
  diceA: null,
  diceB: null,
};

export const actorSliceOptions = {
  initialState: initialActorState,
  reducers: {
    damage: (state, action) => {
      state.health -= action.payload;
    },
    setDiceRoll: {
      reducer: (state, action) => {
        state.diceA = action.payload.aResult;
        state.diceB = action.payload.bResult;
      },
      prepare: (aResult, bResult) => ({ payload: { aResult, bResult } }),
    },
  },
};

const playerSlice = createSlice({
  name: NAME,
  ...actorSliceOptions,
});

const { damage, setDiceRoll } = playerSlice.actions;

export const usePlayer = () => useSelector((state) => state[NAME]);
export const usePlayerDiceTotal = () => useSelector((state) => state[NAME].diceA + state[NAME].diceB);

export const useDamagePlayer = () => {
  const dispatch = useDispatch();
  return (hp) => dispatch(damage(hp));
};
export const useRollPlayerDice = () => {
  const dispatch = useDispatch();
  return () => {
    const a = Math.floor((Math.random() * 6) + 1);
    const b = Math.floor((Math.random() * 6) + 1);
    dispatch(setDiceRoll(a, b));
  };
};

export default playerSlice.reducer;
