import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../../contexts';
import LangText from '../../../component/LangText';
import { useTranslation } from '../../../hooks';
import dict from './lang';
import styles from './WelcomeSection.module.css';

function WelcomeSection () {
  const [store] = useContext(StoreContext);
  const translate = useTranslation(dict);

  const {
    user: { data: user },
  } = store;

  return (
    <section className={styles.welcomeSection}>
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
    </section>
  );
}

export default WelcomeSection;
