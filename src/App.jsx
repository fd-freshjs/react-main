import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import PrivateRoute from './component/PrivateRoute';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import DocsPage from './pages/DocsPage';
import './App.scss';
import { LangContext, UserContext } from './contexts';
import UserLoader from './pages/UserLoader';
import HooksPage from './pages/Hooks';

const LoginPage = lazy(() => import('./pages/Login'));
const RegisterPage = lazy(() => import('./pages/Registration'));
const Counter = lazy(() => import('./pages/Counter'));
const Calculator = lazy(() => import('./pages/Calculator'));

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      user: null,
      lang: 'en',
    };
  }

  setUser = () => {
    this.setState({ user: { firstName: Math.random() * 10 } });
  }

  setLang = () => {
    this.setState((state) => ({ lang: state.lang === 'ru' ? 'en' : 'ru' }));
  }

  render () {
    const { user, lang } = this.state;

    return (
      <BrowserRouter>
        <button onClick={this.setLang}>Change Lang</button>
        <button onClick={this.setUser}>Change User</button>
        <LangContext.Provider value={lang}>
          <UserContext.Provider value={user}>
            <header>
              <Link to='/'>
                <img src='/logo192.png' alt='logo' width='50' />
              </Link>

              <nav>
                <ul>
                  <li>
                    {this.state.user ? (
                      <Link to='/profile'>Profile</Link>
                    ) : (
                      <>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                      </>
                    )}
                  </li>
                  <li>
                    <Link to='/calc'>Calculator</Link>
                  </li>
                  <li>
                    <Link to='/counter'>Counter</Link>
                  </li>
                  <li>
                    <Link to='/hooks'>Hooks</Link>
                  </li>
                  <li>
                    <Link to='/users'>Users</Link>
                  </li>
                </ul>
              </nav>
            </header>

            <Suspense fallback={<CircularProgress />}>
              <main id="main">
                <Switch>
                  <Route exact path='/' component={HomePage} />

                  <Route exact path='/docs'>
                    {props => {
                      return <DocsPage history={props.history} />;
                    }}
                  </Route>

                  <Route exact path='/counter'>
                    <Counter />
                  </Route>

                  <Route exact path='/hooks'>
                    <HooksPage />
                  </Route>

                  <Route exact path='/calc'>
                    <Calculator scale='km' />
                  </Route>

                  <Route exact path='/login'>
                    <LoginPage />
                  </Route>

                  <Route exace path="/register">
                    <RegisterPage />
                  </Route>

                  <Route exact path="/users">
                    <UserLoader />
                  </Route>

                  <PrivateRoute
                    route={{ exact: true, path: '/profile', component: ProfilePage }}
                    auth={this.state.user}
                  />

                  <Route path='*'>
                    <Redirect to='/' />
                  </Route>
                </Switch>
              </main>
            </Suspense>
          </UserContext.Provider>
        </LangContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
