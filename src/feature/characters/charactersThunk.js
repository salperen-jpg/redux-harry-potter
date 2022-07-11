import axios from 'axios';
import { API_ENDPOINT } from '../../utils/api';
export const getCharactersThunk = async (param = '', thunkAPI) => {
  console.log(param);
  try {
    const response = await axios(`${API_ENDPOINT}${param}`);
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue('Rejected');
  }
};
