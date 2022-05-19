import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import PrivateRoute from './component/PrivateRoute';

import { LangContext, UserContext, ThemeContext } from './contexts';
import { langEnum, themeEnum } from './enums';
import './App.scss';

import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import DocsPage from './pages/DocsPage';
import UserLoader from './pages/UserLoader';
import HooksPage from './pages/Hooks';
import { StoreContext } from './app/store';
const LoginPage = lazy(() => import('./pages/Login'));
const RegisterPage = lazy(() => import('./pages/Registration'));
const Counter = lazy(() => import('./pages/Counter'));
const Calculator = lazy(() => import('./pages/Calculator'));

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      user: null,
      lang: langEnum[0],
      theme: themeEnum.LIGHT,
    };
  }

  nextTheme = () => {
    this.setState(state => {

      // const nextTheme = state.theme === themeEnum.DARK ? themeEnum.LIGHT : themeEnum.DARK;
      const themes = Object.entries(themeEnum);
      const currentThemeIndex = themes.findIndex(([key, value]) => value === state.theme);
      const nextTheme = themes[(currentThemeIndex + 1) % themes.length];

      return {
        ...state,
        theme: nextTheme[1],
      }
    });
  }

  setUser = () => {
    this.setState({ user: { firstName: Math.random() * 10 } });

    // dispatch({ type: 'setUser', payload: { firstName: Math.random() * 10 } });
  }

  setLang = () => {
    this.setState((state) => ({ lang: state.lang === 'ru' ? 'en' : 'ru' }));
  }

  render () {
    const { user } = this.state;
    // const [store, dispatch] = useStore();

    return (
      <BrowserRouter>
        <button onClick={this.setLang}>Change Lang</button>
        <button onClick={this.setUser}>Change User</button>
        <StoreContext.Provider value={store}>
              <header>
                <Link to='/'>
                  <img src='/logo192.png' alt='logo' width='50' />
                </Link>

                <nav>
                  <ul>
                    <li>
                      {this.state.user ? ( // store.user.data
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
                      auth={user} // store.user.data
                    />

                    <Route path='*'>
                      <Redirect to='/' />
                    </Route>
                  </Switch>
                </main>
              </Suspense>
        </StoreContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
