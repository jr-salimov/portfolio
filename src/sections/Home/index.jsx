import styles from './Home.module.scss';
import arrow from '../../images/arrow.svg';
import computer from '../../images/computer.svg';

export default function Home() {
  return (
    <div className={styles.wrapper} id="home">
      <div className={styles.content}>
        <span className={styles.job}>
          <span>F</span>
          <span>r</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>-</span>
          <span>E</span>
          <span>n</span>
          <span>d</span>
          <span> </span>
          <span>S</span>
          <span>o</span>
          <span>f</span>
          <span>t</span>
          <span>w</span>
          <span>a</span>
          <span>r</span>
          <span>e</span>
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
        </span>
        <span className={styles.description}>
          Resolving design problems, building smart user interfaces and useful interactions,
          developing rich web applications and seamless web experiences.
        </span>
        <span className={styles.link}>
          <a href="#about" className={styles.aboutMe}>
            <span>About me</span>
            <img src={arrow} alt="arrow" />
          </a>
        </span>
      </div>
      <div className={styles.computer}>
        <img src={computer} alt="Computer" />
      </div>
    </div>
  );
}
