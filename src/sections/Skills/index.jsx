import styles from "./Skills.module.scss";
import { WordToLetters } from "../../components/WordToLetters";
//importing icons
import html5 from "../../assets/images/Skills/html5.svg";
import css3 from "../../assets/images/Skills/css3.svg";
import figma from "../../assets/images/Skills/figma.svg";
import sass from "../../assets/images/Skills/sass.svg";
import js from "../../assets/images/Skills/js.svg";
import git from "../../assets/images/Skills/git.svg";
import react from "../../assets/images/Skills/reactjs.svg";
import node from "../../assets/images/Skills/nodejs.svg";

const langArr = [
  {
    src: html5,
    name: "html5",
    href: "https://www.w3.org/TR/2011/WD-html5-20110405/",
  },
  {
    src: css3,
    name: "css3",
    href: "https://www.w3.org/TR/css-2018/",
  },
  {
    src: figma,
    name: "figma",
    href: "https://help.figma.com/",
  },
  {
    src: sass,
    name: "sass",
    href: "https://sass-lang.com/documentation/",
  },
  {
    src: js,
    name: "js",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
  },
  {
    src: git,
    name: "git",
    href: "https://git-scm.com/doc",
  },
  {
    src: react,
    name: "react",
    href: "https://react.dev/",
  },
  {
    src: node,
    name: "node",
    href: "https://nodejs.org/en/docs",
  },
];

export function Skills() {
  return (
    <section className={styles.wrapper} id="skills">
      <div className={styles.skillsText}>
        <span className={styles.small}>
          A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.
        </span>
        <div className={styles.title}>
          <WordToLetters words="Skills & Experience" />
        </div>
        <div className={styles.description}>
          The main area of expertise is front end development (client side of
          the web). HTML, CSS, JS, building small and medium web applications
          with Vue or React, custom plugins, features, animations, and coding
          interactive layouts. Visit my{" "}
          <a
            href="https://www.linkedin.com/in/tdrdimov/"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>{" "}
          for more details.
        </div>
      </div>
      <div className={styles.langs}>
        {langArr.map((lang, id) => (
          <div id={styles.eachLang} className={styles.skillEl} key={id}>
            <a href={lang.href}>
              <img src={lang.src} alt={lang.name} />
              <div>{lang.name}</div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
