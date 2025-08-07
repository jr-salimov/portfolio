import { FC } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { WordToLetters } from '../../components/WordToLetters';
import { INSTAGRAM_LINK, GMAIL } from '../../links.js';
import styles from './Contacts.module.scss';
import mail from '../../assets/images/mail.svg';

export const Contacts: FC = () => {
  const intl = useIntl();

  return (
    <section className={styles.wrapper} id="contacts">
      <div className={styles.title}>
        <WordToLetters words={intl.formatMessage({ id: 'title5' })} />
      </div>

      <div className={styles.description}>
        <FormattedMessage id="description5" />{' '}
        <a href={INSTAGRAM_LINK} target="_blank" className={styles.link} rel="noreferrer">
          Instagram
        </a>
        <a href={`mailto:${GMAIL}`} target="_blank" className={styles.email} rel="noreferrer">
          <div>
            <img src={mail} alt="mail_logo" className={styles.mailIcon} />
          </div>
          <div>{GMAIL}</div>
        </a>
      </div>
    </section>
  );
};

export default Contacts;
