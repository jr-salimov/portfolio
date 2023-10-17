import styles from "./About.module.scss";

export function About() {
  const myName = "Hi, I'm Atoullo,".split("");
  const myPosition = "Web Developer".split("");
  return (
    <section className={styles.wrapper} id="about">
      <div className={styles.title}>
        {myName.map((char) => (
          <span key={Math.random()} className={styles.name}>
            {char}
          </span>
        ))}
        <br />
        {myPosition.map((char) => (
          <span key={Math.random()} className={styles.position}>
            {char}
          </span>
        ))}
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
