import gridStyles from "../../styles/grid.module.css";
import styles from "./services.module.css";
import utilStyles from "styles/utils.module.css";
import Service from "components/service";

export default () => (
  <div className={styles.block}>
    <div className={gridStyles.container}>
      <h2 className={styles.title}>Como posso ajudar</h2>

      <Service title="Produto">
        <p>
          Desenvolvimento de{" "}
          <strong className={utilStyles.textWithBorder}>
            produtos e aplicativos
          </strong>{" "}
          web e mobile (<strong>IOS ou Android</strong>).
        </p>
        <p>
          Não me apego a linguagens ou frameworks. Já trabalhei com diferentes
          stacks incluindo:
        </p>
        <ul>
          <li>Ruby on Rails</li>
          <li>Node JS + React</li>
          <li>Laravel</li>
          <li>React Native</li>
        </ul>
      </Service>

      <Service title="Performance Audit">
        <p>
          Ao longo do tempo, sites podem se tornar lentos. Isso se deve a
          diversos fatores. Um deles, e o mais comum é a grande quantidade de
          scripts e serviços de terceiros carregados no código da página.
        </p>
        <p>
          Farei uma{" "}
          <strong className={utilStyles.textWithBorder}>
            auditoria de desempenho detalhada
          </strong>{" "}
          de todo o seu site ou projeto. Você terá uma compreensão mais profunda
          do desempenho do site com soluções práticas.
        </p>
        <ul>
          <li>Análise de velocidade de página;</li>
          <li>Análise e sugestão de otimização de HTML, CSS e JavaScript;</li>
          <li>
            Análise e sugestão de otimização de mídia (imagem, vídeo, webfonts
            etc.);
          </li>
          <li>Relatório de design responsivo.</li>
        </ul>
      </Service>

      <Service title="User Experience Design Report">
        <p>
          Revisão completa do website, incluindo o relatório de design da
          experiência do usuário, pontos de conversão e um relatório de{" "}
          <strong className={utilStyles.textWithBorder}>SEO + CRO</strong>.{" "}
        </p>
        <p>
          Vou te ajudar a melhorar não só a experiência interativa do seu
          projeto, mas também o aspecto visual focando no objetivo do projeto,
          que na maioria das vezes é{" "}
          <strong className={utilStyles.textWithBorder}>
            aumentar as conversões
          </strong>
          .
        </p>
        <p>
          O pacote de{" "}
          <strong className={utilStyles.textWithBorder}>
            auditoria de desempenho
          </strong>{" "}
          está incluso.
        </p>
        <ul>
          <li>
            Auditoria de design completa (usabilidade, fluxos, CTA, etc.);
          </li>
          <li>Pontos de conversão;</li>
          <li>Relatório de SEO e CRO;</li>
          <li>Pacote de Auditoria de Desempenho.</li>
        </ul>
      </Service>

      <Service title="WordPress">
        <p>
          Criação temas em WordPress para{" "}
          <strong>blogs, sites e e-commerces</strong> com foco em{" "}
          <strong>performance e conversão</strong>.
        </p>
        <p>
          {" "}
          Os temas tem funcionalidades nativas e o resultado final é um site com
          2~4 plugins carregando em{" "}
          <strong className={utilStyles.textWithBorder}>
            menos de 2 segundos
          </strong>{" "}
          e com uma nota acima de 95 no Google Page Speed e GTMetrix.
        </p>
        <p>
          Utilizo um tema próprio de base e faço as devidas modificações
          baseadas no Layout.
        </p>
        <p>
          Além disso, faço o{" "}
          <strong className={utilStyles.textWithBorder}>
            setup de infraestrutura
          </strong>{" "}
          para sites de alto volume - entre 100.000 até 5 milhões de visitas por
          mês. Minha especialidade é peparar ambientes na Amazon AWS e Digital
          Ocean para sites em WordPress.
        </p>
      </Service>
    </div>
  </div>
);
