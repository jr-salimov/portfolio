import styles from "./Theme.module.scss";
import sun from "../../assets/images/sun.svg";
import moon from "../../assets/images/moon.svg";

const themeArr = [
  {
    src: sun,
    alt: "sun",
    id: styles.lightSwitch,
  },
  {
    src: moon,
    alt: "moon",
    id: styles.darkSwitch,
  },
];

export function Theme() {
  return (
    <div className={styles.wrapper}>
      <label className={styles.switch}>
        <input className={styles.switchInput} type="checkbox" role="switch" />
        {/* {themeArr.map((theme, id) => (
          <img
            src={theme.src}
            alt={theme.alt}
            className={styles.switchIcon}
            id={theme.id}
            key={id}
          />
        ))} */}
        {/* <span className={styles.switchSr}>Dark Mode</span> */}
      </label>
    </div>
  );
}
