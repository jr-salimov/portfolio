import { useState } from "react";
import styles from "./MobileMenu.module.scss";

export function MobileMenu({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={styles.topNav}>
      <input id={styles.menuToggle} type="checkbox" onClick={handleToggle} />
      <label className={styles.menuButtonContainer} htmlFor={styles.menuToggle}>
        <div className={styles.menuButton}></div>
      </label>
      {isOpen && (
        <nav className={styles.menu}>
          {items.map((item) => (
            <a className={styles.menuItem} key={item.link} href={item.link}>
              {item.title}
            </a>
          ))}
          <a className={styles.menuItem} key={"#contacts"} href="#contacts">
            Contacts
          </a>
        </nav>
      )}
    </section>
  );
}
