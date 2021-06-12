import axios from "../../services/axios";
import { Types } from "../actions/actionTypes";

/**
 * Load customers action
 */
export const loadTickets = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .get("tickets")
        .then((res) => {
          if (res.data.status) {
            dispatch(setTickets(res.data.data));
          } else {
            dispatch(clearTickets());
          }
          resolve(res.data);
        })
        .catch((error) => {
          console.log(error);
          if (error) {
            reject(new Error(error));
          }
        });
    });
  };
};

/**
 * Change status action
 */
export const changeTicketStatus = (id, status) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      const body = {
        status: status,
      };
      axios
        .put("ticket/"+id, JSON.stringify(body))
        .then((res) => {
          if (res.data.status) {
            dispatch(loadTickets());
          }else{
            reject(res.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
          if (error) {
            reject(new Error(error));
          }
        });
    });
  };
};

/**
 * Delete action
 */
 export const deleteTicket = (id) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .delete("ticket/"+id)
        .then((res) => {
          if (res.data.status) {
            dispatch(loadTickets());
          }
          resolve(res.data);
        })
        .catch((error) => {
          console.log(error);
          if (error) {
            reject(new Error(error));
          }
        });
    });
  };
};

const setTickets = (tickets) => ({
  type: Types.SET_TICKETS,
  payload: { tickets },
});

const clearTickets = () => ({
  type: Types.CLEAR_TICKETS,
  payload: {},
});
