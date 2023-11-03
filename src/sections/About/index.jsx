import styles from "./About.module.scss";
import { WordToLetters } from "../../components/WordToLetters";

export function About() {
  return (
    <section className={styles.wrapper} id="about">
      <div className={styles.title}>
        <span className={styles.name}>
          <WordToLetters words="Hi, I'm Atoullo," />
        </span>
        <br />

        <span className={styles.position}>
          <WordToLetters words="Web Developer" />
        </span>

        <br />
        <span className={styles.small}>
          Front-End Developer / JavaScript & React Fan
        </span>
      </div>{" "}
      <div className={styles.description}>
        Professionally connected with the web development industry. Problem
        solver, well-organised person, loyal freelancer with high attention to
        detail. Fan of Football, debate games, chess, and coding of course.
        Interested in the entire frontend spectrum and working on ambitious
        projects with interesting people.
      </div>
    </section>
  );
}
