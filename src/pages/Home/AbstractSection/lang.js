import { langEnum } from '../../../enums';

const dict = {
  [langEnum.ru]: {
    'home.abstract.subheader1': () => `Декларативный`,
    'home.abstract.text1.p1': () =>
      'Создавать интерактивные пользовательские интерфейсы на React — приятно и просто. Вам достаточно описать, как части интерфейса приложения выглядят в разных состояниях. React будет своевременно их обновлять, когда данные изменяются.',
    'home.abstract.text1.p2': () =>
      'Декларативные представления сделают код более предсказуемым и упростят отладку.',
    'home.abstract.subheader2': () => 'Основан на компонентах',
    'home.welcome.text2.p1': () =>
      'Создавайте инкапсулированные компоненты с собственным состоянием, а затем объединяйте их в сложные пользовательские интерфейсы.',
    'home.abstract.text2.p2': () =>
      'Поскольку логика компонента написана на JavaScript, а не содержится в шаблонах, можно с лёгкостью передавать самые разные данные по всему приложению и держать состояние вне DOM.',
    'home.abstract.subheader3': () => 'Научитесь однажды — пишите где угодно',
    'home.abstract.text3.p1': () =>
      'Нам не нужно ничего знать про остальную часть вашего технологического стека, поэтому вы можете разрабатывать новую функциональность на React, не изменяя существующий код.',
    'home.abstract.text3.p2': () =>
      'React также может работать на сервере, используя Node.js и на мобильных платформах, используя',
  },
  [langEnum.en]: {
    'home.abstract.subheader1': () => `Declarative`,
    'home.abstract.text1.p1': () =>
      'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
    'home.abstract.text1.p2': () =>
      'Declarative views make your code more predictable and easier to debug.',
    'home.abstract.subheader2': () => 'Component-Based',
    'home.abstract.text2.p1': () =>
      'Build encapsulated components that manage their own state, then compose them to make complex UIs.',
    'home.abstract.text2.p2': () =>
      'Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.',
    'home.abstract.subheader3': () => 'Learn Once, Write Anywhere',
    'home.abstract.text3.p1': () =>
      'We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.',
    'home.abstract.text3.p2': () =>
      'React can also render on the server using Node and power mobile apps using',
  },
};

export default dict;
