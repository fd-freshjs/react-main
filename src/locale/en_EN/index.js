const en_EN = {
  // общеиспользуемые переводы
  'user': 'user',
  'app': 'app',
};

const enText = (options) => {
  return en_EN[options.code]?.(options);
};

export default enText;
