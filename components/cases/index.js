import styles from "./cases.module.css";
import gridStyles from "styles/grid.module.css";
import utilStyles from "styles/utils.module.css";
import Case from "components/case";

export default () => (
  <div className={styles.block}>
    <div className={gridStyles.container}>
      <h2 className={styles.title}>Cases</h2>

      <Case title="Magnetis">
        <p>
          Trabalhei no desenvolvimento de dois projetos para a Magnetis, o Blog
          e o FAQ. Em ambos os projetos criei todo o código dos temas, com
          funcionalidades customizadas.
        </p>
        <p>Os temas tem foco em performance e conversão.</p>
        <div className={utilStyles.mb}>
          <p>
            Blog:{" "}
            <a
              href="https://blog.magnetis.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              blog.magnetis.com.br
            </a>
          </p>
          <p>
            FAQ:{" "}
            <a
              href="https://ajuda.magnetis.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ajuda.magnetis.com.br
            </a>
          </p>
        </div>
        <h4>Tech</h4>
        <ul>
          <li>WordPress</li>
        </ul>
      </Case>

      <Case title="Marketing Quizz">
        <p>
          Quizz de marketing que coleta as repostas dos usuários, tem integração
          com ferramentas de automação e gera relatórios baseados nas respostas.
        </p>
        <div className={utilStyles.mb}>
          URL:{" "}
          <a
            href="https://diagnostico.rockcontent.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            diagnostico.rockcontent.com
          </a>
        </div>
        <h4>Tech</h4>
        <ul>
          <li>React JS</li>
          <li>GraphQL</li>
          <li>AWS Lambdas</li>
        </ul>
      </Case>

      <Case title="Rock Convert">
        <p>
          Plugin para fazer o gerenciamento em massa de banners para WordPress.
        </p>
        <div className={utilStyles.mb}>
          O Rock Convert possibilita gerenciar banners em massa, gerenciamento
          de formulários e integração com ferramentas de automação como
          MailChimp, RD Station e HubSpot
        </div>
        <div>
          URL:{" "}
          <a
            href="https://stage.rockcontent.com/plugin-de-conversao/"
            target="_blank"
            rel="noopener noreferrer"
          >
            convert.rockcontent.com
          </a>
        </div>
        <h4>Tech</h4>
        <ul>
          <li>WordPress</li>
          <li>PHP</li>
        </ul>
      </Case>

      <Case title="VidMonsters">
        <p>Blog de alta performance com diversos pontos de conversão.</p>
        <p>
          URL:{" "}
          <a
            href="https://vidmonsters.com/blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            vidmonsters.com/blog
          </a>
        </p>
        <div>
          O escopo do projeto foi o desenvolvimento do tema, a partir de um
          layout fornecido pelo pessoal da VidMonsters
        </div>
        <h4>Resultados:</h4>
        <ul>
          <li>
            Score de <strong>96%</strong> no GTmetrix;
          </li>
          <li>Diversos pontos de conversão e foco na versão mobile;</li>
          <li>
            Integração nativa com a ferramenta de automação utilizada pela
            VidMonsters;
          </li>
          <li>
            Tema com <strong>100% das funcionalidades nativas</strong>,
            totalmente idependente da instalação de plugins de terceiros.
          </li>
        </ul>
      </Case>

      <Case title="Smartalk">
        <p>
          Este projeto teve como objetivo, criar um blog com foco em{" "}
          <strong>conversões</strong> com alta <strong>performance</strong>.
        </p>
        <p>
          URL:{" "}
          <a
            href="https://blog.smartalk.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            blog.smartalk.com.br
          </a>
        </p>
        <div>
          O escopo do projeto foi desde a criação do layout até configuração da
          infraestrutura do blog.
        </div>
        <h4>Resultados:</h4>
        <ul>
          <li>
            Construimos uma <strong>máquina de conversões</strong>. Fiz uma
            análise de 15 dos melhores websites em CRO do mundo para fazer o
            design do blog com foco em resultados.
          </li>
          <li>
            Tema com <strong>90% das funcionalidades nativas</strong>. Com isso
            foi possível reduzir o número de plugins no WordPress para 4.
          </li>
          <li>
            Score de <strong>98</strong> no Google Page Speed, tendo algumas
            páginas carregando em <strong>menos de 1 segundo</strong>.
          </li>
          <li>
            Infraestrutura que suporta até{" "}
            <strong>1 milhão de visitas por mês</strong> com um custo baixo.
          </li>
        </ul>
      </Case>
    </div>
  </div>
);
