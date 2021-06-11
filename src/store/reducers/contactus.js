import { Types } from '../actions/actionTypes';

const initialState = {
  sponsors: [],
  filteredSponsors: []
};

const sponsors = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.SET_SPONSORS:
      return {
        ...state,
        sponsors: payload.sponsors,
        filteredSponsors: payload.sponsors
      };
    case Types.SET_FILTERED_SPONSORS:
      return {
        ...state,
        filteredSponsors: payload.filteredSponsors
      };
    case Types.CLEAR_SPONSORS:
      return {
        ...state,
        sponsors: [],       
      };
      case Types.CLEAR_FILTERED_SPONSORS:
      return {
        ...state,       
        filteredSponsors: []
      };

    default:
      return state;
  }
};

export default sponsors;
