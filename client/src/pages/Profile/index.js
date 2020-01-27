import React from 'react';
import MessagesList from '../../components/MessagesList/MessagesList';
import MessageForm from '../../components/MessageForm/MessageForm';
import css from '../../components/App.module.scss';

const Profile = () => (
  <>
    <h1 className={css.title}>React & Socket Chat</h1>
    <MessagesList />
    <MessageForm />
  </>
);

export default Profile;
