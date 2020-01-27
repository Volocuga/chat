import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import css from './MessagesList.module.scss';

const MessagesList = () => {
  const scrollRef = useRef(null);
  const messages = useSelector(state => state.messages.list);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <ul className={css.root}>
      {messages.length > 0 &&
        Object.keys(messages).map(item => {
          const { userName, message, _id } = messages[item];
          return (
            <li key={_id} className={css.messageRow} ref={scrollRef}>
              <strong>{userName}</strong>: {message}
            </li>
          );
        })}
    </ul>
  );
};

export default MessagesList;
