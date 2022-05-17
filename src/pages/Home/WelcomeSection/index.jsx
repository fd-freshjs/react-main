import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext, LangContext, ThemeContext } from '../../../contexts';
import { themeEnum } from '../../../enums';
import './WelcomeSection.css';

const text = {
  en: user => `Welcome, ${user ? user.firstName : 'Stranger'}`,
  ru: user => `Добро пожаловать, ${user ? user.firstName : 'Незнакомец'}`,
};

function WelcomeSection () {
  const lang = useContext(LangContext);
  const user = useContext(UserContext);
  const [theme, nextTheme] = useContext(ThemeContext);

  return (
    <section className='welcomeSection'>
        <button style ={{ backgroundColor: theme === themeEnum.DARK ? 'black' : 'white', color: theme === themeEnum.DARK ? 'white' : 'black' }} onClick={nextTheme}>
          След тема
        </button>

      <h1 className='mainHeading'>{text[lang](user)}</h1>


      <p className='mainDescription'>
        JavaScript-библиотека для создания пользовательских интерфейсов
      </p>
      <div className='mainLinks'>
        <Link className='linkButton' to='/docs'>
          Начать работу
        </Link>
        <a
          className='link'
          href='https://ru.reactjs.org/tutorial/tutorial.html'
        >
          Перейти к введению {'>'}
        </a>
      </div>
    </section>
  );
}

export default WelcomeSection;
