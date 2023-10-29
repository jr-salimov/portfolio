import styles from "./Home.module.scss";
import arrow from "../../assets/images/arrow.svg";
import computer from "../../assets/images/computer.svg";
import { WordToLetters } from "../../components/WordToLetters";

export function Home() {
  return (
    <section className={styles.wrapper} id="home">
      <div className={styles.content}>
        <span className={styles.job}>
          <WordToLetters words="Front-End Software Developer" />
        </span>
        <span className={styles.description}>
          Resolving design problems, building smart user interfaces and useful
          interactions, developing rich web applications and seamless web
          experiences.
        </span>
        <span className={styles.link}>
          <a href="#about" className={styles.aboutMe}>
            <span>About me</span>
            <img src={arrow} alt="arrow" className={styles.arrow} />
          </a>
        </span>
      </div>
      <div className={styles.computer}>
        <img src={computer} alt="Computer" />
      </div>
    </section>
  );
}
