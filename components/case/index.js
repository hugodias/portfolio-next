import styles from "./case.module.css";
import utilStyles from "styles/utils.module.css";

export default ({ title, children }) => (
  <div className={styles.block}>
    <div className={styles.titleWrapper}>
      <h3 className={utilStyles.textWithBackgroundYellow}>{title}</h3>
    </div>
    <div className={styles.contentWrapper}>{children}</div>
  </div>
);
