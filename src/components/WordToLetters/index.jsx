import styles from "./WordToLetters.module.scss";

export function WordToLetters(props) {
  return (
    <>
      {props.words.split("").map((char, id) => (
        <span key={id} className={styles.eachLetter}>
          {char}
        </span>
      ))}
    </>
  );
}
