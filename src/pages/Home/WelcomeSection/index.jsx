import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext, LangContext } from '../../../contexts';
import './WelcomeSection.css';

const text = {
  en: (user) => `Welcome, ${user ? user.firstName : 'Stranger'}`,
  ru: (user) => `Добро пожаловать, ${user ? user.firstName : 'Незнакомец'}`,
}

function WelcomeSection() {

  return (
    <LangContext.Consumer>
      {(lang) =>
        <UserContext.Consumer>
          {(user = {}) =>
            (<section className="welcomeSection">
              <h1 className="mainHeading">{text[lang](user)}</h1>
              <p className="mainDescription">JavaScript-библиотека для создания пользовательских интерфейсов</p>
              <div className="mainLinks">
                  <Link className="linkButton" to="/docs">Начать работу</Link>
                  <a className="link" href="https://ru.reactjs.org/tutorial/tutorial.html">Перейти к введению {'>'}</a>
              </div>
            </section>)
          }
        </UserContext.Consumer>
      }
    </LangContext.Consumer>
  );
}

export default WelcomeSection