import styles from './About.module.scss';

export default function About() {
  return (
    <section className={styles.wrapper} id="about">
      <div className={styles.contentWithMenu}>
        <div className={styles.genInfo}>
          <div className={styles.about}>
            <div className={styles.title}>
              <div className={styles.name}>
                <span>H</span>
                <span>i</span>
                <span>,</span>
                <span> </span>
                <span>I</span>
                <span>'</span>
                <span>m</span>
                <span> </span>
                <span>A</span>
                <span>t</span>
                <span>o</span>
                <span>u</span>
                <span>l</span>
                <span>l</span>
                <span>o</span>
                <span>,</span>
              </div>
              <div className={styles.position}>
                <span>W</span>
                <span>e</span>
                <span>b</span>
                <span> </span>
                <span>D</span>
                <span>e</span>
                <span>v</span>
                <span>e</span>
                <span>l</span>
                <span>o</span>
                <span>p</span>
                <span>e</span>
                <span>r</span>
              </div>
            </div>{' '}
            <div className={styles.small}>Front-End Developer / JavaScript & React Fan</div>
          </div>
          <div className={styles.description}>
            <div>Professionally connected with the web development industry.</div>
            <div>
              Problem solver, well-organised person, loyal freelancer with high attention to detail.
              Fan of Football, debate games, chess, and coding of course.
            </div>
            <div>
              Interested in the entire frontend spectrum and working on ambitious projects with
              interesting people.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
