import styles from './Projects.module.scss';
import arrow from '../../images/arrow.svg';

export default function Projects() {
  return (
    <div className={styles.wrapper} id="projects">
      <div className={styles.center}>
        <div className={styles.expInfo}>
          <div className={styles.experience}>
            <span>P</span>
            <span>o</span>
            <span>r</span>
            <span>t</span>
            <span>f</span>
            <span>o</span>
            <span>l</span>
            <span>i</span>
            <span>o</span>
            <span> </span>
            <span>&</span>
            <span> </span>
            <span>P</span>
            <span>r</span>
            <span>e</span>
            <span>v</span>
            <span>i</span>
            <span>o</span>
            <span>u</span>
            <span>s</span>
            <span> </span>
            <span>P</span>
            <span>r</span>
            <span>o</span>
            <span>j</span>
            <span>e</span>
            <span>c</span>
            <span>t</span>
            <span>s</span>
          </div>
          <div className={styles.description}>
            I have built various different projects to fit different aspects of the client's
            business. If you want to see more examples of my work than the ones showcased in this
            site, please contact me!
          </div>
          <div className={styles.link}>
            <a href="home" className={styles.aboutMe}>
              <div>See Projects</div>
              <img src={arrow} alt="arrow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
