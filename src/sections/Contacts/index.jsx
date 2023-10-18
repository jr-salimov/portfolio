import styles from "./Contacts.module.scss";
import mail from "../../images/mail.svg";

export function Contacts() {
  const contactsInfo = "Contacts".split("");
  const myEmail = "jr.salimov@gmail.com".split("");
  return (
    <section className={styles.wrapper} id="contacts">
      <div className={styles.title}>
        {contactsInfo.map((char) => (
          <span key={Math.random()} className={styles.conTitle}>
            {char}
          </span>
        ))}
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
          {myEmail.map((char) => (
            <span key={Math.random()} className={styles.mailSpan}>
              {char}
            </span>
          ))}
        </a>
      </div>
    </section>
  );
}
