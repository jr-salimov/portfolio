import { Link } from 'react-router-dom';
import styles from './Contacts.module.scss';
import TopSide from '../../components/TopSide';
import Menu from '../../components/Menu';
import DownSide from '../../components/DownSide';

export default function Contacts() {
  return (
    <div className={styles.wrapper}>
      <TopSide />
      <div className={styles.contentWithMenu}>
        <div className={styles.genInfo}>
          <span className={styles.description}>
            What would you do if you had a software expert available at your fingertips?
          </span>{' '}
          <div className={styles.description}>
            Want to start new project? Or just say hey. You can also follow me on{' '}
            <Link to="https://www.instagram.com/_jr._sa/" target="_blank" className={styles.link}>
              Instagram
            </Link>
          </div>
          <Link to="mailto:jr.salimov@gmail.com" target="_blank" className={styles.email}>
            jr.salimov@gmail.com
          </Link>
        </div>
        <Menu />
      </div>
      <DownSide next="/home" />
    </div>
  );
}
