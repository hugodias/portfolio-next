import utilStyles from "../../styles/utils.module.css";
import styles from "./customers.module.css";

const Logo = ({ filename, alt, vertical = false }) => (
  <img
    src={`/images/${filename}`}
    alt={alt}
    className={vertical ? styles.imageVerical : styles.image}
  />
);

export default () => (
  <div className={utilStyles.container}>
    <div className={styles.list}>
      <Logo filename="rock-content.png" alt="Rock Content" />
      <Logo filename={"magnetis.svg"} alt="Magnetis Investimentos" />
      <Logo filename={"emeritus.png"} alt="Emeritus" />
      <Logo filename={"totvs.png"} alt="Totvs" />
      <Logo filename={"lett.png"} vertical alt="Lett" />
      <Logo filename={"vidmonsters.svg"} alt="Vidmonsters" />
      <Logo filename={"smartalk.png"} alt="Smartalk" />
    </div>
  </div>
);
