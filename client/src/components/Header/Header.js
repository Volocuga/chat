import React from 'react';
import { Link } from 'react-router-dom';
import css from './Header.module.scss';

const Header = () => {
  const isAuthentication = false;
  return (
    <header className={css.root}>
      <h2>Chat</h2>
      <div className={css.ntnWrap}>
        {isAuthentication ? (
          <Link to="/logout">Logout</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
