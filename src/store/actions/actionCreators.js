import { Types } from './actionTypes';

const setUserData = user => ({
  type: Types.SET_USER_DATA,
  payload: { user }
});

const setErrorMessage = msg => ({
  type: Types.SET_ERROR_MSG,
  payload: msg
});
export { setUserData, setErrorMessage };
