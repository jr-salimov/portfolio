import styles from "./About.module.scss";
import { WordToLetters } from "../../components/WordToLetters";
import { useAtom } from "jotai";
import { langAtom } from "../../atom";

export function About() {
  const [chosenLang, setChosenLang] = useAtom(langAtom);
  return (
    <section className={styles.wrapper} id="about">
      <div className={styles.title}>
        <span className={styles.name}>
          <WordToLetters words={chosenLang.title2_1.defaultMessage} />
        </span>
        <br />

        <span className={styles.position}>
          <WordToLetters words={chosenLang.title2_2.defaultMessage} />
        </span>

        <br />
        <span className={styles.small}>
          {chosenLang.smallText1.defaultMessage}
        </span>
      </div>{" "}
      <div className={styles.description}>
        {chosenLang.description2.defaultMessage}
      </div>
    </section>
  );
}
