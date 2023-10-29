import styles from "./Languages.module.scss";
import { useState } from "react";

export function Languages() {
  const [lang, setLang] = useState(true);

  const onChange = () => {
    setLang(!lang);
  };

  return (
    <div className={styles.langChoice}>
      {lang === true ? (
        <button
          className={styles.language}
          id={styles.english}
          onClick={onChange}
        >
          EN
        </button>
      ) : (
        <button
          className={styles.language}
          id={styles.english}
          onClick={onChange}
        >
          RU
        </button>
      )}
    </div>
  );
}
