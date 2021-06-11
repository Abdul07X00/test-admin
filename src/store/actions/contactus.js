import axios from '../../services/axios';
import { Types } from './actionTypes';

export const createTicket = (body) => async dispatch => {
  try {
    const resp = await axios.post(
      'tickets',
      JSON.stringify({
        ...body
      })
    );
    const { success } = resp.data;
    if (success) {
      return;
    }
  } catch (error) {
    throw error;
  }
};
