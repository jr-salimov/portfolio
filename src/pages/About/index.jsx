import styles from './About.module.scss';
import TopSide from '../../components/TopSide';
import Menu from '../../components/Menu';
import DownSide from '../../components/DownSide';

export default function About() {
  return (
    <div className={styles.wrapper} id="about">
      <TopSide />
      <div className={styles.contentWithMenu}>
        <div className={styles.genInfo}>
          <div className={styles.about}>
            <span className={styles.title}>
              <span className={styles.name}>
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
              </span>
              <span className={styles.position}>
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
              </span>
            </span>{' '}
            <span className={styles.small}>
              Front End Developer / JavaScript Fan / Wordpress Expert
            </span>
          </div>
          <div className={styles.description}>
            <span>Professionally connected with the web development industry.</span>
            <span>
              Problem solver, well-organised person, loyal freelancer with high attention to detail.{' '}
              Fan of Football, debate games, chess, and coding of course.
            </span>
            <span>
              Interested in the entire frontend spectrum and working on ambitious projects with
              interesting people.
            </span>
          </div>
        </div>
        <Menu />
      </div>
      <DownSide next="/skills" />
    </div>
  );
}
