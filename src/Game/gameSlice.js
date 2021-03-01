import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useRollMonsterDice } from './Monster/monsterSlice';
import { useRollPlayerDice } from './Player/playerSlice';

const NAME = 'game';
const IDLE = 'idle';
export const ROLLING = 'rolling';
const initialState = {
  phase: IDLE,
  rollTime: 3000,
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
export const useGame = () => useSelector((state) => state[NAME]);
export const useAttack = () => {
  const dispatch = useDispatch();
  const { rollTime } = useGame();
  const rollMonsterDice = useRollMonsterDice();
  const rollPlayerDice = useRollPlayerDice();
  return async () => {
    dispatch(setPhase(ROLLING));
    await new Promise((resolve) => setTimeout(resolve, rollTime));
    rollMonsterDice();
    rollPlayerDice();
    dispatch(setPhase(IDLE));
  };
};

export default gameSlice.reducer;
