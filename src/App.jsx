import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom';

import PrivateRoute from './component/PrivateRoute';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import ProfilePage from './pages/Profile';
import DocsPage from './pages/DocsPage';
import './App.scss';
import Calculator from './pages/Calculator';

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
              <li>
                <Link to="/calc">Calculator</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Switch>
              <Route exact path="/" component={HomePage} />

              <Route exact path="/docs">
                <DocsPage />
              </Route>

              <Route exact path="/calc">
                <Calculator />
              </Route>

              <PrivateRoute
                route={{ exact: true, path: "/profile", component: ProfilePage }}
                auth={this.state.user}
              />

              <Route exact path="/login">
                <LoginPage />
              </Route>

              <Route path="*">
                  <Redirect to="/" />
              </Route>
          </Switch>
        </main>

      </BrowserRouter>
    );
  }
}

export default App;
