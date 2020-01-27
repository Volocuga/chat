import React, { useState, useCallback, memo } from 'react';
import socket from '../../services/socket';
import css from './MessageForm.module.scss';

const MessageForm = memo(() => {
  const [formValues, setFormValues] = useState({
    userName: 'Oleh',
    message: '',
  });

  const handleInputChange = useCallback(
    ({ target: { name, value } }) => {
      setFormValues({ ...formValues, [name]: value });
    },
    [formValues],
  );

  const onSubmit = e => {
    e.preventDefault();
    socket.emit('addMessage', formValues);
    setFormValues({
      userName: 'Oleh',
      message: '',
    });
  };

  return (
    <form onSubmit={onSubmit} className={css.root}>
      <input
        name="message"
        placeholder="message"
        value={formValues.message}
        onChange={handleInputChange}
        autoComplete="off"
        className={css.textarea}
      />

      <button type="submit" className={css.submitBtn}>
        Send
      </button>
    </form>
  );
});

export default MessageForm;
