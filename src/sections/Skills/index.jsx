import styles from "./Skills.module.scss";
import { WordToLetters } from "../../components/WordToLetters";
import html5 from "../../assets/images/Skills/html5.svg";
import css3 from "../../assets/images/Skills/css3.svg";
import figma from "../../assets/images/Skills/figma.svg";
import sass from "../../assets/images/Skills/sass.svg";
import js from "../../assets/images/Skills/js.svg";
import git from "../../assets/images/Skills/git.svg";
import react from "../../assets/images/Skills/reactjs.svg";
import node from "../../assets/images/Skills/nodejs.svg";
import { LINKEDIN_LINK } from "../../links.js";
import { useAtom } from "jotai";
import { langAtom } from "../../atom";

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
  const [chosenLang, setChosenLang] = useAtom(langAtom);
  return (
    <section className={styles.wrapper} id="skills">
      <div className={styles.skillsText}>
        <div className={styles.small}>
          {chosenLang.smallText2.defaultMessage}
        </div>
        <div className={styles.title}>
          <WordToLetters words={chosenLang.title3.defaultMessage} />
        </div>
        <div className={styles.description}>
          {chosenLang.description3.defaultMessage}{" "}
          <a
            href={LINKEDIN_LINK}
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>{" "}
          {chosenLang.description3_1.defaultMessage}
        </div>
      </div>
      <div className={styles.langs}>
        {langArr.map((lang, id) => (
          <div id={styles.eachLang} className={styles.skillEl} key={id}>
            <a href={lang.href}>
              <img src={lang.src} alt={lang.name} className={styles.langIcon} />
              <div className={styles.langName}>{lang.name}</div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
