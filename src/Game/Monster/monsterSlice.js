import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { actorSliceOptions } from '../Player/playerSlice';

const NAME = 'monster';

const monsterSlice = createSlice({
  name: NAME,
  ...actorSliceOptions,
});

const { damage, setDiceRoll } = monsterSlice.actions;

export const useMonster = () => useSelector((state) => state[NAME]);
export const useMonsterDiceTotal = () => useSelector((state) => state[NAME].diceA + state[NAME].diceB);

export const useDamageMonster = () => {
  const dispatch = useDispatch();
  return (hp) => dispatch(damage(hp));
};
export const useRollMonsterDice = () => {
  const dispatch = useDispatch();
  return () => {
    const a = Math.floor((Math.random() * 6) + 1);
    const b = Math.floor((Math.random() * 6) + 1);
    dispatch(setDiceRoll(a, b));
  };
};

export default monsterSlice.reducer;
