import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useRollMonsterDice } from './Monster/monsterSlice';
import { useRollPlayerDice } from './Player/playerSlice';

const NAME = 'game';
const IDLE = 'idle';
const ATTACKING = 'attacking';
export const GAME_STATUS = { IDLE, ATTACKING };
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
  const rollPlayerDice = useRollPlayerDice();
  const rollMonsterDice = useRollMonsterDice();

  return {
    ...s,
    changePhase: (phase) => dispatch(setPhase(phase)),
    attack: () => {
      rollPlayerDice();
      rollMonsterDice();
      dispatch(setPhase(GAME_STATUS.ATTACKING));
    },
  };
};

export default gameSlice.reducer;
