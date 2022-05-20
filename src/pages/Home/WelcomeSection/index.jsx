import React from 'react';
import { Link } from 'react-router-dom';
import LangText from '../../../component/LangText';
import { useTranslation } from '../../../hooks';
import { useSelector } from '../../../app/store';
import styles from './WelcomeSection.module.css';
import dict from './lang';

function WelcomeSection () {
  const { data: user } = useSelector((store) => store.user);

  const translate = useTranslation(dict);

  return (
    <section className={styles.welcomeSection}>
      <div className={styles.welcomeSectionContent}>
        <h1 className={styles.mainHeading}>
          {translate('home.welcome.header1', user)}
        </h1>

        <p className={styles.mainDescription}>
          {translate('home.welcome.subheader1')}
        </p>
        <div className={styles.mainLinks}>
          <Link className={styles.linkButton} to='/docs'>
            <LangText dict={dict} code={'home.welcome.getStartedBtn'} />
          </Link>
          <a
            className={styles.link}
            href='https://ru.reactjs.org/tutorial/tutorial.html'
          >
            {translate('home.welcome.takeTutorialLink')}
          </a>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
