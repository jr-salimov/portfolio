import React, { useState } from 'react';
import styles from './Layout.module.scss';
import logo from '../images/logo.png';
import menuToggle from '../images/hamburger-menu.png';
import closeToggle from '../images/close.png';
import githubv from '../images/github.svg';
// footer elements
import github from '../images/Contacts/github.svg';
import instagram from '../images/Contacts/instagram.svg';
import linkedin from '../images/Contacts/linkedin.svg';
import dribble from '../images/Contacts/dribble.svg';
import discord from '../images/Contacts/discord.svg';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.layout}>
      <header className={isOpen ? styles.open : styles.top}>
        <div className={styles.logo}>
          <div className={styles.logoMain}>
            <a href="#about">
              <img width={40} height={46} src={logo} alt="logo" />
            </a>
            <div className={styles.logoText}>PORTFOLIO</div>
          </div>

          <img
            src={closeToggle}
            alt="menu-toggle"
            width={30}
            height={30}
            className={styles.closeToggle}
            onClick={handleToggle}
          />
        </div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </nav>
        <div className={styles.contacts}>
          <a href="https://www.github.com/jr-salimov">
            <img src={githubv} alt="github" className={styles.github} />
          </a>
          <a href="#contacts">
            <button className={styles.contactsBtn}>Contacts</button>
          </a>
          <img
            src={menuToggle}
            alt="menu-toggle"
            width={30}
            height={30}
            className={styles.menuToggle}
            onClick={handleToggle}
          />
        </div>
      </header>
      <main> {children} </main>
      <footer>
        <div>
          <a href="https://github.com/jr-salimov">
            <img src={github} alt="github" />
          </a>
          <a href="https://github.com/jr-salimov">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="https://github.com/jr-salimov">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://github.com/jr-salimov">
            <img src={dribble} alt="dribble" />
          </a>
          <a href="https://github.com/jr-salimov">
            <img src={discord} alt="discord" />
          </a>
        </div>
        <div>&copy; 2023. Atoullo Salimov</div>
      </footer>
    </div>
  );
};

export default Layout;
