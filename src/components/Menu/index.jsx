import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

export default function Menu() {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Link to="/home">00</Link>
          <div className={styles.line}></div>
        </li>
        <li>
          <Link to="/about">01</Link>
        </li>
        <li>
          <Link to="/skills">02</Link>
        </li>
        <li>
          <Link to="/projects">03</Link>
        </li>
        <li>
          <Link to="/contacts">04</Link>
        </li>
      </ul>
    </div>
  );
}
