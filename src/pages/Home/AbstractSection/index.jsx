import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../../hooks';
import './AbstractSection.css';
import dict from './lang';

function AbstractSection () {
  const translate = useTranslation(dict);

  return (
    <section className='abstractSection'>
      <ul className='abstractList'>
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
