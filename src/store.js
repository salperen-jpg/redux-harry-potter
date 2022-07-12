import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './feature/characters/charactersSlice';
import battleReducer from './feature/battle/battleSlice';
export const store = configureStore({
  reducer: {
    character: characterReducer,
    battle: battleReducer,
  },
});
