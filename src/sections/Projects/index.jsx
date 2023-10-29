import styles from "./Projects.module.scss";
import arrow from "../../assets/images/arrow.svg";
import { WordToLetters } from "../../components/WordToLetters";

export function Projects() {
  return (
    <section className={styles.wrapper} id="projects">
      <div className={styles.experience}>
        <WordToLetters words="Portfolio & Previous Projects" />
      </div>
      <div className={styles.description}>
        I have built various different projects to fit different aspects of the
        client's business. If you want to see more examples of my work than the
        ones showcased in this site, please contact me!
      </div>
      <span className={styles.link}>
        <a href="#home" className={styles.seeProjects}>
          <span>See Projects</span>
          <img src={arrow} alt="arrow" className={styles.arrow} />
        </a>
      </span>
    </section>
  );
}
