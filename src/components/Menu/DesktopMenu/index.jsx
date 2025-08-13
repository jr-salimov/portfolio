import styles from './DesktopMenu.module.scss';

export function DesktopMenu({ items }) {
  return (
    <nav className={styles.navigation}>
      {items.map(item => (
        <a className={styles.link} key={item.link} href={item.link}>
          {item.title}
        </a>
      ))}
    </nav>
  );
}
