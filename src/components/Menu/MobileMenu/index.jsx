import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { useEffect } from 'react';
import styles from './MobileMenu.module.scss';

const menuAtom = atomWithStorage('menu', false);
export function MobileMenu({ items }) {
  const [isOpen, setIsOpen] = useAtom(menuAtom);
  const [isClicked, setIsClicked] = useAtom(menuAtom);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <section className={styles.topNav}>
      <input
        id={styles.menuToggle}
        type="checkbox"
        onClick={handleToggle}
        checked={isClicked}
        readOnly
      />
      <label className={styles.menuButtonContainer} htmlFor={styles.menuToggle}>
        <div className={styles.menuButton}></div>
      </label>

      {isOpen && (
        <nav className={styles.menu}>
          {items.map(item => (
            <a className={styles.menuItem} key={item.link} href={item.link} onClick={handleClick}>
              {item.title}
            </a>
          ))}
        </nav>
      )}
    </section>
  );
}
