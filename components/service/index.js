import styles from "./service.module.css";

export default ({ title, children }) => (
  <div className={styles.block}>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.content}>{children}</div>
  </div>
);
