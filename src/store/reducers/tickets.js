import { Types } from "../../store/actions/actionTypes";

const initialState = {
  tickets: [],
};

const tickets = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.SET_TICKETS:
      return {
        ...state,
        tickets: payload.tickets
      };
    case Types.CLEAR_TICKETS:
      return {
        ...state,
        tickets: []
      };
    default:
      return state;
  }
};

export default tickets;
