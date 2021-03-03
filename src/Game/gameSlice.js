import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useDamageMonster, useMonster, useMonsterDiceTotal, useRollMonsterDice } from './Monster/monsterSlice';
import { useDamagePlayer, usePlayer, usePlayerDiceTotal, useRollPlayerDice } from './Player/playerSlice';

const NAME = 'game';
export const IDLE = 'idle';
export const ROLLING = 'rolling';
export const DAMAGING = 'damaging';
export const WIN = 'win';
export const LOSE = 'lose';
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
    dispatch(setPhase(DAMAGING));
  };
};
export const useDamage = () => {
  const dispatch = useDispatch();
  const { rollTime } = useGame();
  const monsterDiceTotal = useMonsterDiceTotal();
  const playerDiceTotal = usePlayerDiceTotal();
  const damageMonster = useDamageMonster();
  const damagePlayer = useDamagePlayer();
  return async () => {
    if (monsterDiceTotal > playerDiceTotal) {
      damagePlayer(monsterDiceTotal - playerDiceTotal);
    } else if (playerDiceTotal > monsterDiceTotal) {
      damageMonster(playerDiceTotal - monsterDiceTotal);
    }
    await new Promise((resolve) => setTimeout(resolve, rollTime));
    dispatch(setPhase(IDLE));
  };
};
export const useCheckWin = () => {
  const dispatch = useDispatch();
  const { health: monsterHealth } = useMonster();
  const { health: playerHealth } = usePlayer();
  return () => {
    if (monsterHealth === 0) {
      dispatch(setPhase(WIN));
    } else if (playerHealth === 0) {
      dispatch(setPhase(LOSE));
    }
  };
};

export default gameSlice.reducer;
