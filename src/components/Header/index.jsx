import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import github from "../../assets/images/github.svg";
import { Menu } from "../Menu";
import { Theme } from "../ThemeToggler";
import { Languages } from "../Languages";
import { GITHUB_LINK } from "../../links.js";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="#about">
          <img src={logo} alt="logo" className={styles.logoIcon} />
        </a>
        <div className={styles.logoText}>PORTFOLIO</div>
      </div>
      <Menu />
      <div className={styles.settings}>
        <a href={GITHUB_LINK}>
          <img src={github} alt="github" className={styles.github} />
        </a>
        <Languages />
        <Theme />
      </div>
    </header>
  );
}
