import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import classNames from './DocsPage.module.scss';

function DocsPage(props) {
  return (
    <div>
        <h1 className={classNames.docsHeading}>
            Начало работы
        </h1>
        <p className="mainDescription">На этой странице мы сделаем небольшой обзор документации и других ресурсов, которые могут пригодиться при первом использовании React.</p>
        <p><b>React</b> — это JavaScript-библиотека для разработки пользовательского интерфейса. Чтобы составить первое впечатление о React, зайдите на <Link to="/">главную страницу</Link> или во <a href="https://ru.reactjs.org/tutorial/tutorial.html">введение</a>.</p>

        <hr />

        <ul className={cx(classNames.list, { [classNames.special]: props.verdict })}>
            <li><a href="https://ru.reactjs.org/">Пробуем React</a></li>
            <li><a href="https://ru.reactjs.org/">Изучаем React</a></li>
            <li><a href="https://ru.reactjs.org/">Информация о релизах</a></li>
            <li><a href="https://ru.reactjs.org/">Документация на старые версии React</a></li>
            <li><a href="https://ru.reactjs.org/">Обратная связь</a></li>
        </ul>

        <hr />

        <h3>Пробуем React</h3>
        <p>React изначально был спроектирован так, чтобы его можно было внедрять постепенно. Другими словами, <b>вы можете начать с малого и использовать только ту функциональность React, которая необходима вам в данный момент.</b> Информация в этом разделе будет полезна в любой ситуации: при первом знакомстве с React, при создании простой динамической HTML-страницы и даже при проектировании сложного React-приложения.</p>
    </div>
  )
}

export default DocsPage;
