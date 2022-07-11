import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './feature/characters/charactersSlice';
export const store = configureStore({
  reducer: {
    character: characterReducer,
  },
});
