import { langEnum } from '../enums';
import enText from './en_EN';
import ruText from './ru_RU';

const Dictionary = {
  [langEnum.en]: enText,
  [langEnum.ru]: ruText,
};

const checkOptions = (options) => {
  if (!options.code) {
    return false;
  }

  return true;
};

function getTranslation(dict, locale, options) {
  const lang = dict[locale];
  return typeof lang === 'function' ? lang(options) : lang[options.code];
}

export const getLocaleText = (options) => {
  if (!checkOptions(options)) {
    throw new Error('Invalid options');
  }

  if (!options.locale) {
    return Dictionary[langEnum.en](options);
  }

  const dict = options.dict ? options.dict : Dictionary;

  const translation = getTranslation(dict, options.locale, options);
  if (translation) {
    return typeof translation === 'function' ? translation(options) : translation;
  }

  const defaultTranslation = getTranslation(dict, langEnum.en, options);
  if (defaultTranslation) {
    return typeof defaultTranslation === 'function' ? defaultTranslation(options) : defaultTranslation;;
  }

  throw new Error(
    `Cannot find translation for the specified code '${options.code}' in ${
      Object.is(dict, Dictionary) ? 'global' : 'local'
    } dictionary`
  );
};

export const translate = (ctxFrom, ctxTo) => {};
