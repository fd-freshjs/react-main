import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../../contexts';
import { themeEnum } from '../../../enums';
import './WelcomeSection.css';

const text = {
  en: user => `Welcome, ${user ? user.firstName : 'Stranger'}`,
  ru: user => `Добро пожаловать, ${user ? user.firstName : 'Незнакомец'}`,
};

function WelcomeSection () {
  const [store, dispatch] = useContext(StoreContext);

  const {
    user: { data },
    lang,
    theme,
  } = store;

  return (
    <section className='welcomeSection'>
      <button
        style={{
          backgroundColor: theme === themeEnum.DARK ? 'black' : 'white',
          color: theme === themeEnum.DARK ? 'white' : 'black',
        }}
        onClick={() => dispatch({ group: 'theme', type: 'nextTheme' })}
      >
        След тема
      </button>

      <h1 className='mainHeading'>{text[lang](data)}</h1>

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
