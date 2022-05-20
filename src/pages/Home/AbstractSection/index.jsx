import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from '../../../app/store';
import { useThemeClasses, useTranslation } from '../../../hooks';
import styles from './AbstractSection.module.css';
import dict from './lang';

function AbstractSection () {
  const translate = useTranslation(dict);
  const theme = useSelector((store) => store.theme);

  const classes = useThemeClasses(theme, styles);

  return (
    <section className={classes('abstractSection')}>
      <ul className={classes('abstractList')}>
        <li>
          <h3>{translate('home.abstract.subheader1')}</h3>
          <p>{translate('home.abstract.text1.p1')}</p>
          <p>{translate('home.abstract.text1.p2')}</p>
        </li>
        <li>
          <h3>{translate('home.abstract.subheader2')}</h3>
          <p>{translate('home.abstract.text2.p1')}</p>
          <p>{translate('home.abstract.text2.p2')}</p>
        </li>
        <li>
          <h3>{translate('home.abstract.subheader3')}</h3>
          <p>{translate('home.abstract.text3.p1')}</p>
          <p>
            {translate('home.abstract.text3.p2')}{' '}
            <Link to='https://facebook.github.io/react-native/'>
              React Native
            </Link>
            .
          </p>
        </li>
      </ul>
    </section>
  );
}

export default AbstractSection;
