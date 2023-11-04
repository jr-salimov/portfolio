import { useState } from "react";
import styles from "./MobileMenu.module.scss";

export function MobileMenu({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <section className={styles.topNav}>
      <input id={styles.menuToggle} type="checkbox" onClick={handleToggle} />
      <label className={styles.menuButtonContainer} htmlFor={styles.menuToggle}>
        <div className={styles.menuButton}></div>
      </label>

      {isOpen && !isClicked && (
        <nav className={styles.menu}>
          {items.map((item) => (
            <a
              className={styles.menuItem}
              key={item.link}
              href={item.link}
              onClick={handleClick}
            >
              {item.title}
            </a>
          ))}
        </nav>
      )}
    </section>
  );
}
