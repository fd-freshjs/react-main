import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomeSection.css';

function WelcomeSection() {
  return (
    <section className="welcomeSection">
        <h1 className="mainHeading">React</h1>
        <p className="mainDescription">JavaScript-библиотека для создания пользовательских интерфейсов</p>
        <div className="mainLinks">
            <Link className="linkButton" to="/docs">Начать работу</Link>
            <a className="link" href="https://ru.reactjs.org/tutorial/tutorial.html">Перейти к введению {'>'}</a>
        </div>
    </section>
  )
}

export default WelcomeSection