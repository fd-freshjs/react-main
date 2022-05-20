const en_EN = {};

const enText = (options) => {
  return en_EN[options.code]?.(options);
};

export default enText;
