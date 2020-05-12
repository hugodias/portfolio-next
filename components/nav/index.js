import styles from "./nav.module.css";

export default () => (
  <div className={styles.background}>
    <div className="container">
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
