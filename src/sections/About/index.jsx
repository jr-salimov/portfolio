import styles from "./About.module.scss";

export function About() {
  const myName = "Hi, I'm Atoullo,".split("");
  const myPosition = "Web Developer".split("");
  return (
    <section className={styles.wrapper} id="about">
      <div className={styles.contentWithMenu}>
        <div className={styles.genInfo}>
          <div className={styles.about}>
            <div className={styles.title}>
              <div className={styles.name}>
                {myName.map((char) => (
                  <span key={Math.random()}>{char}</span>
                ))}
              </div>
              <div className={styles.position}>
                {myPosition.map((char) => (
                  <span key={Math.random()}>{char}</span>
                ))}
              </div>
            </div>{" "}
            <div className={styles.small}>
              Front-End Developer / JavaScript & React Fan
            </div>
          </div>
          <div className={styles.description}>
            <div>
              Professionally connected with the web development industry.
            </div>
            <div>
              Problem solver, well-organised person, loyal freelancer with high
              attention to detail. Fan of Football, debate games, chess, and
              coding of course.
            </div>
            <div>
              Interested in the entire frontend spectrum and working on
              ambitious projects with interesting people.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
