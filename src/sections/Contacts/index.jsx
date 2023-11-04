import styles from "./Contacts.module.scss";
import mail from "../../assets/images/mail.svg";
import { WordToLetters } from "../../components/WordToLetters";
import { INSTAGRAM_LINK, GMAIL_LINK } from "../../links.js";
import { useAtom } from "jotai";
import { langAtom } from "../../atom";

export function Contacts() {
  const [chosenLang, setChosenLang] = useAtom(langAtom);
  return (
    <section className={styles.wrapper} id="contacts">
      <div className={styles.title}>
        <WordToLetters words={chosenLang.title5.defaultMessage} />
      </div>

      <div className={styles.description}>
        {chosenLang.description5.defaultMessage}{" "}
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
