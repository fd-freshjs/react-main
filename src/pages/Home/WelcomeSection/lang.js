import { langEnum } from '../../../enums';

const dict = {
  [langEnum.ru]: {
    'home.welcome.header1': ({ ctx }) =>
      `Добро пожаловать, ${ctx ? ctx.firstName : 'Незнакомец'}`,
    'home.welcome.subheader1': () =>
      'JavaScript-библиотека для создания пользовательских интерфейсов',
    'home.welcome.getStartedBtn': () => 'Get started',
    'home.welcome.takeTutorialLink': () => 'Take the tutorial >',
  },
  [langEnum.en]: {
    'home.welcome.header1': ({ ctx }) =>
      `Welcome, ${ctx ? ctx.firstName : 'Stranger'}`,
    'home.welcome.subheader1': () =>
      'A JavaScript library for building user interfaces',
    'home.welcome.getStartedBtn': () => 'Get started',
    'home.welcome.takeTutorialLink': () => 'Take the tutorial >',
  },
};

export default dict;
