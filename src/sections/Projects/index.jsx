import styles from "./Projects.module.scss";
import arrow from "../../assets/images/arrow.svg";
import { WordToLetters } from "../../components/WordToLetters";
import { useAtom } from "jotai";
import { langAtom } from "../../atom";

export function Projects() {
  const [chosenLang, setChosenLang] = useAtom(langAtom);
  return (
    <section className={styles.wrapper} id="projects">
      <div className={styles.experience}>
        <WordToLetters words={chosenLang.title4.defaultMessage} />
      </div>
      <div className={styles.description}>
        {chosenLang.description4.defaultMessage}
      </div>
      <div className={styles.link}>
        <a href="#home" className={styles.seeProjects}>
          <div>{chosenLang.seeProjects.defaultMessage}</div>
          <img src={arrow} alt="arrow" className={styles.arrow} />
        </a>
      </div>
    </section>
  );
}
