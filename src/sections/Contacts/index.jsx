import styles from './Contacts.module.scss';

export default function Contacts() {
  return (
    <div className={styles.wrapper} id="contacts">
      <div className={styles.genInfo}>
        <span className={styles.description}>
          What would you do if you had a software expert available at your fingertips?
        </span>{' '}
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
          jr.salimov@gmail.com
        </a>
      </div>
    </div>
  );
}
