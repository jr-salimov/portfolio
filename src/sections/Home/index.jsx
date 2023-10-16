import styles from "./Home.module.scss";
import arrow from "../../images/arrow.svg";
import computer from "../../images/computer.svg";

export function Home() {
  const jobTitle = "Front-End Software Developer".split("");
  return (
    <section className={styles.wrapper} id="home">
      <div className={styles.content}>
        <span className={styles.job}>
          {jobTitle.map((char) => (
            <span key={Math.random()}>{char}</span>
          ))}
        </span>
        <span className={styles.description}>
          Resolving design problems, building smart user interfaces and useful
          interactions, developing rich web applications and seamless web
          experiences.
        </span>
        <span className={styles.link}>
          <a href="#about" className={styles.aboutMe}>
            <span>About me</span>
            <img src={arrow} alt="arrow" style={{ zIndex: -1 }} />
          </a>
        </span>
      </div>
      <div className={styles.computer}>
        <img src={computer} alt="Computer" />
      </div>
    </section>
  );
}
