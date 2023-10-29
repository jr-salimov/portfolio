import styles from "./Contacts.module.scss";
import mail from "../../assets/images/mail.svg";
import { WordToLetters } from "../../components/WordToLetters";

export function Contacts() {
  return (
    <section className={styles.wrapper} id="contacts">
      <div className={styles.title}>
        <WordToLetters words="Contacts" />
      </div>

      <div className={styles.description}>
        What would you do if you had a software expert available at your
        fingertips? Want to start new project? Or just say hey. You can also
        follow me on{" "}
        <a
          href="https://www.instagram.com/_jr._sa/"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://mailto:jr.salimov@gmail.com"
          target="_blank"
          className={styles.email}
          rel="noreferrer"
        >
          <img
            src={mail}
            alt="mail_logo"
            width={40}
            height={40}
            className={styles.mailIcon}
          />
          <WordToLetters words="jr.salimov@gmail.com" />
        </a>
      </div>
    </section>
  );
}
