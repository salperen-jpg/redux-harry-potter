import { customFetch } from '../../axios/axios';
export const getCharactersThunk = async (param = '', thunkAPI) => {
  try {
    const response = await customFetch(`${param}`);
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue('Rejected');
  }
};
