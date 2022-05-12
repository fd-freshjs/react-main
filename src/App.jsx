import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import PrivateRoute from './component/PrivateRoute';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import DocsPage from './pages/DocsPage';
import './App.scss';
import { LangContext, UserContext } from './contexts';

const LoginPage = lazy(() => import('./pages/Login'));
const Counter = lazy(() => import('./pages/Counter'));
const Calculator = lazy(() => import('./pages/Calculator'));

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      user: { firstName: 'Ihor' },
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
                      <Link to='/login'>Login</Link>
                    )}
                  </li>
                  <li>
                    <Link to='/calc'>Calculator</Link>
                  </li>
                  <li>
                    <Link to='/counter'>Counter</Link>
                  </li>
                </ul>
              </nav>
            </header>

            <main id="main">
              <Switch>
                <Route exact path='/' component={HomePage} />

                <Route exact path='/docs'>
                  {props => {
                    return <DocsPage />;
                  }}
                </Route>

                <Route exact path='/counter'>
                  <Counter />
                </Route>

                <Route exact path='/calc'>
                  <Calculator scale='km' />
                </Route>

                <Route exact path='/login'>
                  <Suspense fallback={<CircularProgress />}>
                    <LoginPage />
                  </Suspense>
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
          </UserContext.Provider>
        </LangContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
