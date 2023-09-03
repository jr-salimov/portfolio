import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import TopSide from '../../components/TopSide';
import Menu from '../../components/Menu';
import DownSide from '../../components/DownSide';

export default function Home() {
  return (
    <div className={styles.wrapper} id="home">
      <TopSide />
      <div className={styles.computer}>
        <img src="/img/computer.svg" alt="Computer" />
      </div>
      <div className={styles.contentWithMenu}>
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
            <Link to="/about" className={styles.aboutMe}>
              <span>About me</span>
              <img src="/img/arrow.svg" alt="arrow" />
            </Link>
          </span>
        </div>
        <Menu />
      </div>
      <DownSide next="/about" />
    </div>
  );
}
