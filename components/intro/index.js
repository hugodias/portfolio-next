import gridStyles from "../../styles/grid.module.css";
import utilStyles from "../../styles/utils.module.css";
import styles from "./intro.module.css";

export default () => (
  <div className={gridStyles.container}>
    <div className={styles.block}>
      <p className={utilStyles.lead}>
        Olá, meu nome é <strong>Hugo Dias</strong>. Sou engenheiro de software
        com 12 anos de experiência em desenvolvimento de produtos e sistemas.
      </p>
      <p className={utilStyles.lead}>
        Trabalho com desenvolvimento de{" "}
        <strong className={utilStyles.textWithBorder}>produtos digitais</strong>{" "}
        (web e mobile) e{" "}
        <strong className={utilStyles.textWithBorder}>
          consultoria em performance
        </strong>{" "}
        e <strong className={utilStyles.textWithBorder}>conversão</strong> .
      </p>
      <p className={utilStyles.lead}>
        Estas são algumas das empresas com quem já trabalhei
      </p>
    </div>
  </div>
);
