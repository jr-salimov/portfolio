import styles from "./Theme.module.scss";

export function Theme() {
  return (
    <div className={styles.wrapper}>
      <div>Theme:</div>
      <label className={styles.switch}>
        <input className={styles.switchInput} type="checkbox" role="switch" />
        <svg
          className={styles.switchIcon}
          id={styles.lightSwitch}
          viewBox="0 0 12 12"
          aria-hidden="true"
        >
          <g
            fill="#ff9100"
            stroke="#ff9100"
            strokeWidth="1"
            strokeLinecap="round"
          >
            <circle cx="6" cy="6" r="2" />
            <g strokeDasharray="1.5 1.5">
              <polyline points="6 10,6 11.5" transform="rotate(0,6,6)" />
              <polyline points="6 10,6 11.5" transform="rotate(45,6,6)" />
              <polyline points="6 10,6 11.5" transform="rotate(90,6,6)" />
              <polyline points="6 10,6 11.5" transform="rotate(135,6,6)" />
              <polyline points="6 10,6 11.5" transform="rotate(180,6,6)" />
              <polyline points="6 10,6 11.5" transform="rotate(225,6,6)" />
              <polyline points="6 10,6 11.5" transform="rotate(270,6,6)" />
              <polyline points="6 10,6 11.5" transform="rotate(315,6,6)" />
            </g>
          </g>
        </svg>
        <svg
          className={styles.switchIcon}
          id={styles.darkSwitch}
          viewBox="0 0 12 12"
          aria-hidden="true"
        >
          <g
            fill="none"
            stroke="aliceblue"
            strokeWidth="1"
            strokeLinejoin="round"
            transform="rotate(-45,6,6)"
          >
            <path d="m9,10c-2.209,0-4-1.791-4-4s1.791-4,4-4c.304,0,.598.041.883.105-.995-.992-2.367-1.605-3.883-1.605C2.962.5.5,2.962.5,6s2.462,5.5,5.5,5.5c1.516,0,2.888-.613,3.883-1.605-.285.064-.578.105-.883.105Z" />
          </g>
        </svg>
        <span className={styles.switchSr}>Dark Mode</span>
      </label>
    </div>
  );
}
