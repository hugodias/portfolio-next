import styles from "./service.module.css";
import utilStyles from "styles/utils.module.css";

export default ({ title, children }) => (
  <div className={styles.block}>
    <h3 className={utilStyles.textWithBackgroundYellow}>{title}</h3>
    <div className={styles.content}>{children}</div>
  </div>
);
