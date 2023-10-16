import styles from "./Projects.module.scss";
import arrow from "../../images/arrow.svg";

export function Projects() {
  const expTitle = "Portfolio & Previous Projects".split("");
  return (
    <section className={styles.wrapper} id="projects">
      <div className={styles.center}>
        <div className={styles.expInfo}>
          <div className={styles.experience}>
            {expTitle.map((char) => (
              <span key={Math.random()}>{char}</span>
            ))}
          </div>
          <div className={styles.description}>
            I have built various different projects to fit different aspects of
            the client's business. If you want to see more examples of my work
            than the ones showcased in this site, please contact me!
          </div>
          <div className={styles.link}>
            <a href="home" className={styles.aboutMe}>
              <div>See Projects</div>
              <img src={arrow} alt="arrow" style={{ zIndex: -1 }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
