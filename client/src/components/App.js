import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MessageForm from './MessageForm/MessageForm';
import MessagesList from './MessagesList/MessagesList';
import socket from '../services/socket';
import {
  createdMessageAction,
  getMessagesAction,
} from '../redux/actions/messageAction';
import Header from './Header/Header';
import MainRoutes from '../routes';
import css from './App.module.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessagesAction());

    socket.on('messageAdded', message => {
      dispatch(createdMessageAction(message));
    });
    return () => {
      socket.disconnect();
    };
  }, [dispatch]);

  return (
    <div className={css.root}>
      <Header />
      <div className={css.container}>
        <MainRoutes />
      </div>
    </div>
  );
};

export default App;
