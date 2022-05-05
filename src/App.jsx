import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import ProfilePage from './pages/Profile';
import './App.css';
import PrivateRoute from './component/PrivateRoute';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  render() {
    return (
      <BrowserRouter>

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

        <main>
          <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>

              <PrivateRoute
                route={{ exact: true, path: "/profile" }}
                auth={this.state.user}
              >
                <ProfilePage />
              </PrivateRoute>

              <Route exact path="/login">
                <LoginPage />
              </Route>
          </Switch>
        </main>

      </BrowserRouter>
    );
  }
}

export default App;
