import { GET_MESSAGES, CREATED_MESSAGE } from '../types';

const initialState = {
  list: [],
  isLoading: false,
  isError: false,
};

const messageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MESSAGES:
      return {
        ...state,
        list: [...payload],
      };

    case CREATED_MESSAGE:
      return {
        ...state,
        list: [...state.list, payload],
      };

    default:
      return state;
  }
};

export default messageReducer;
