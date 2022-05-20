const ru_RU = {};

const ruText = (options) => {
  return ru_RU[options.code]?.(options);
};

export default ruText;
