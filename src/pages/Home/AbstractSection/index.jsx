import React from 'react';
import { Link } from 'react-router-dom';
import './AbstractSection.css';

function AbstractSection() {
  return (
    <section className="abstractSection">
        <ul className="abstractList">
            <li>
                <h3>Декларативный</h3>
                <p>Создавать интерактивные пользовательские интерфейсы на React — приятно и просто. Вам достаточно описать, как части интерфейса приложения выглядят в разных состояниях. React будет своевременно их обновлять, когда данные изменяются.</p>
                <p>Декларативные представления сделают код более предсказуемым и упростят отладку.</p>
            </li>
            <li>
                <h3>Основан на компонентах</h3>
                <p>Создавайте инкапсулированные компоненты с собственным состоянием, а затем объединяйте их в сложные пользовательские интерфейсы.</p>
                <p>Поскольку логика компонента написана на JavaScript, а не содержится в шаблонах, можно с лёгкостью передавать самые разные данные по всему приложению и держать состояние вне DOM.</p>
            </li>
            <li>
                <h3>Научитесь однажды — пишите где угодно</h3>
                <p>Нам не нужно ничего знать про остальную часть вашего технологического стека, поэтому вы можете разрабатывать новую функциональность на React, не изменяя существующий код.</p>
                <p>React также может работать на сервере, используя Node.js и на мобильных платформах, используя <Link to="https://facebook.github.io/react-native/">React Native</Link>.</p>
            </li>
        </ul>
    </section>
  )
}

export default AbstractSection;