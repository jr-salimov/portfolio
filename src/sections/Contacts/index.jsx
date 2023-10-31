import styles from "./Contacts.module.scss";
import mail from "../../assets/images/mail.svg";
import { WordToLetters } from "../../components/WordToLetters";
import { INSTAGRAM_LINK, GMAIL_LINK } from "../../links.js";

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
          href={INSTAGRAM_LINK}
          target="_blank"
          className={styles.link}
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          href={GMAIL_LINK}
          target="_blank"
          className={styles.email}
          rel="noreferrer"
        >
          <img src={mail} alt="mail_logo" className={styles.mailIcon} />
          <WordToLetters words="jr.salimov@gmail.com" />
        </a>
      </div>
    </section>
  );
}
