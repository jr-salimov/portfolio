import styles from "./Languages.module.scss";
import { useState } from "react";
import { useAtom } from "jotai";
import { langAtom } from "../../atom";
import en from "../../assets/lang/en.json";
import ru from "../../assets/lang/ru.json";

export function Languages() {
  const [lang, setLang] = useState(true);
  const [chosenLang, setChosenLang] = useAtom(langAtom);

  const inEnglish = () => {
    setLang(!lang);
    setChosenLang(ru);
  };

  const inRussian = () => {
    setLang(!lang);
    setChosenLang(en);
  };

  return (
    <div className={styles.langChoice}>
      {lang ? (
        <button
          className={styles.language}
          id={styles.english}
          onClick={inEnglish}
        >
          EN
        </button>
      ) : (
        <button
          className={styles.language}
          id={styles.english}
          onClick={inRussian}
        >
          RU
        </button>
      )}
    </div>
  );
}
