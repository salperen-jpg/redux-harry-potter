import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCharacters } from '../characters/charactersSlice';
const initialState = {
  characters: [],
  isLoading: true,
  isLoading_1: false,
  isLoading_2: false,
  wizard_1: {},
  wizard_2: {},
  winner: {},
  loser: {},
};

export const getAllChars = createAsyncThunk(
  'battle/getAllChars',
  async (_, thunkAPI) => {
    try {
      const resp = await thunkAPI.dispatch(getCharacters());
      return resp.payload;
    } catch (error) {
      console.log(error);
    }
  }
);

const battleSlice = createSlice({
  name: 'battle',
  initialState,
  reducers: {
    setWizard_1: (state, { payload }) => {
      const single = state.characters.find((char) => char.name === payload);
      state.wizard_1 = single;
    },
    setWizard_2: (state, { payload }) => {
      const single = state.characters.find((char) => char.name === payload);
      state.wizard_2 = single;
    },
  },
  extraReducers: {
    [getAllChars.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllChars.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.characters = action.payload;
    },
    [getAllChars.rejected]: (state) => {},
  },
});
export const { setWizard_1, setWizard_2 } = battleSlice.actions;
export default battleSlice.reducer;
