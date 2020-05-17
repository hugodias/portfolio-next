import styles from "./nav.module.css";
import utilStyles from "styles/utils.module.css";

export default () => (
  <div className={styles.background}>
    <div className={utilStyles.container}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <a href="/">
            Hugo Dias™
            <br />
            <span>Software Engineer</span>
          </a>
        </div>
        <div className={styles.menu}>
          <ul>
            <li>
              <a
                href="https://blog.hdias.dev"
                className={styles.button}
                rel="noopener"
                target="_blank"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
