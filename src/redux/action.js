import {ADD_HEADER_EMAIL} from "./type";

export const addHeaderEmail = (payload) => {
    return {
      type: ADD_HEADER_EMAIL,
      payload: payload,
    };
  };