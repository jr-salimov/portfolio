import styles from './TopSide.module.scss';
import { Link } from 'react-router-dom';

export default function topSide() {
  return (
    <div className={styles.top}>
      <div className={styles.logo}>
        <Link to="/about">
          <img width={54} height={54} src="/img/logo.png" alt="logo" />
        </Link>
        <span>DVLPR</span>
      </div>
      <Link to="/contacts">
        <button className={styles.contactsBtn}>Contacts</button>
      </Link>
    </div>
  );
}
