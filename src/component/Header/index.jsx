import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/">
        <img src="/logo192.png" alt="logo" width="50" />
      </Link>

      <nav>
        <ul>
          <li>
            {this.state.user ? (
              <Link to="/profile">Profile</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
