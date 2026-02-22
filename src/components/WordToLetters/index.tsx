import styles from './WordToLetters.module.scss';

interface WordToLettersProps {
  words: string;
}

export function WordToLetters(props: WordToLettersProps): React.ReactElement {
  return (
    <>
      {props.words.split('').map((char, id) => {
        const className = char !== ' ' ? styles.eachLetter : styles.gap;

        return (
          <span key={id} className={className}>
            {char}
          </span>
        );
      })}
    </>
  );
}
