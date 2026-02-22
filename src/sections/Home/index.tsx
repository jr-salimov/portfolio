import type { FC } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { WordToLetters } from '../../components/WordToLetters';
import styles from './Home.module.scss';
import arrow from '../../assets/images/arrow.svg';
import { Computer } from '../../assets/images/Computer/index';

export const Home: FC = () => {
  const intl = useIntl();

  return (
    <section className={styles.wrapper} id="home">
      <div className={styles.content}>
        <span className={styles.job}>
          <WordToLetters words={intl.formatMessage({ id: 'title1' })} />
        </span>
        <span className={styles.description}>
          <FormattedMessage id="description1" />
        </span>
        <span className={styles.link}>
          <a href="#about" className={styles.aboutMe}>
            <FormattedMessage id="aboutMe" />
            <img src={arrow} alt="arrow" className={styles.arrow} />
          </a>
        </span>
      </div>
      <div className={styles.computer}>
        <Computer />
      </div>
    </section>
  );
};

export default Home;
