import styles from './Contacts.module.scss';
import rocket from '../../images/rocket.svg';
import mail from '../../images/mail.svg';

export default function Contacts() {
  return (
    <div className={styles.wrapper} id="contacts">
      <div className={styles.genInfo}>
        <div className={styles.description}>
          What would you do if you had a software expert available at your fingertips?
        </div>{' '}
        <div className={styles.description}>
          Want to start new project? Or just say hey. You can also follow me on{' '}
          <a
            href="https://www.instagram.com/_jr._sa/"
            target="_blank"
            className={styles.link}
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
        <a
          href="mailto:jr.salimov@gmail.com"
          target="_blank"
          className={styles.email}
          rel="noreferrer"
        >
          <div>
            <img src={mail} alt="mail_logo" width={40} height={40} />
          </div>
          <div>jr.salimov@gmail.com</div>
        </a>
      </div>
      <form id="contactForm" method="POST">
        <fieldset>
          <div className={styles.field}>
            <label htmlFor="contact-form-name">Name</label>
            <input
              type="text"
              maxlength="32"
              id="contact-form-name"
              placeholder="Your name is..."
              form="contactForm"
              autoComplete="off"
              required
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="contact-form-email">Email</label>
            <input
              type="email"
              maxlength="32"
              id="contact-form-email"
              placeholder="example@gmail.com"
              form="contactForm"
              autoComplete="off"
              required
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="contact-form-message">Message</label>
            <textarea
              maxlength="5000"
              id="contact-form-message"
              placeholder="How can I help you?"
              form="contactForm"
              autoComplete="off"
              required
            ></textarea>
          </div>
          <div className={styles.buttons}>
            <button type="submit">
              Hit me up!
              <img src={rocket} alt="rocket" />
            </button>
            <input type="reset" value="Reset" />
          </div>
        </fieldset>
      </form>
    </div>
  );
}
