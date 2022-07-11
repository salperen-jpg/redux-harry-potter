import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCharactersThunk } from './charactersThunk';
const initialState = {
  isLoading: false,
  characters: [],
  isError: false,
};

export const getCharacters = createAsyncThunk(
  'character/getCharacters',
  getCharactersThunk
);

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {},
  extraReducers: {
    [getCharacters.pending]: (state) => {
      state.isLoading = true;
    },
    [getCharacters.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.characters = action.payload;
    },
    [getCharacters.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export default characterSlice.reducer;
