import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCharacters } from '../characters/charactersSlice';
const initialState = {
  characters: [],
  wizard_1: '',
  wizard_2: '',
  winner: '',
  loser: '',
  isModalOpen: false,
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
    openModal: (state) => {
      const randomNumber = Math.floor(Math.random() * 2);
      if (randomNumber === 0) {
        state.winner = state.wizard_1;
        state.loser = state.wizard_2;
      } else {
        state.winner = state.wizard_2;
        state.loser = state.wizard_1;
      }
      console.log(randomNumber);
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
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
export const { setWizard_1, setWizard_2, openModal, closeModal } =
  battleSlice.actions;
export default battleSlice.reducer;
