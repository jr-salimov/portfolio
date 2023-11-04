import styles from "./Home.module.scss";
import arrow from "../../assets/images/arrow.svg";
import computer from "../../assets/images/computer.svg";
import { WordToLetters } from "../../components/WordToLetters";
import { useAtom } from "jotai";
import { langAtom } from "../../atom";

export function Home() {
  const [chosenLang, setChosenLang] = useAtom(langAtom);
  return (
    <section className={styles.wrapper} id="home">
      <div className={styles.content}>
        <span className={styles.job}>
          <WordToLetters words={chosenLang.title1.defaultMessage} />
        </span>
        <span className={styles.description}>
          {chosenLang.description1.defaultMessage}
        </span>
        <span className={styles.link}>
          <a href="#about" className={styles.aboutMe}>
            {chosenLang.aboutMe.defaultMessage}
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
