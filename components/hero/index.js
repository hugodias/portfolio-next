import styles from "./hero.module.css";
import gridStyles from "../../styles/grid.module.css";

export default () => (
  <div className={styles.background}>
    <div className={gridStyles.container}>
      <h1 className={styles.title}>
        I <span>design</span> and <span className={styles.break} />{" "}
        <span>develop</span> <span>experiences</span>
        <span className={styles.break} /> that make people's lives{" "}
        <span className={styles.fontWithBg}>simple.</span>
      </h1>
    </div>
  </div>
);
