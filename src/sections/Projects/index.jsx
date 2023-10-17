import styles from "./Projects.module.scss";
import arrow from "../../images/arrow.svg";

export function Projects() {
  const expTitle = "Portfolio & Previous Projects".split("");
  return (
    <section className={styles.wrapper} id="projects">
      <div className={styles.experience}>
        {expTitle.map((char) => (
          <span key={Math.random()} className={styles.expEl}>
            {char}
          </span>
        ))}
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
