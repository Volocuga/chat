import socket from '../../services/socket';
import { CREATED_MESSAGE, GET_MESSAGES } from '../types';

export const getMessagesAction = () => dispatch => {
  socket.on('init', payload => {
    dispatch({ type: GET_MESSAGES, payload });
  });
};

export const createdMessageAction = message => dispatch => {
  dispatch({ type: CREATED_MESSAGE, payload: message });
};
