const ru_RU = {
  // общеиспользуемые переводы
  'user': 'пользователь',
  'app': 'приложение',
};

const ruText = (options) => {
  return ru_RU[options.code]?.(options);
};

export default ruText;
