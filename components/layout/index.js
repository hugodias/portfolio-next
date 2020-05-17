import Head from "next/head";
import Nav from "components/nav";
import Footer from "components/footer";
import "./layout.module.css";

export default ({ children, title = "Hugo Dias | Software Enginner" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;700&amp;display=swap"
        rel="stylesheet"
      />
      <meta
        name="description"
        content="Engenheiro de Software em Belo Horizonte trabalhando com desenvolvimento de produtos digitais (web e mobile) e consultoria em performance e conversão."
      />
      <meta property="og:title" content="Hugo Dias | Software Enginner" />
      <meta
        property="og:description"
        content="Engenheiro de Software em Belo Horizonte trabalhando com desenvolvimento de produtos digitais (web e mobile) e consultoria em performance e conversão."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://hdias.dev/images/hugo-dias.png"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@hugodias" />
      <meta name="twitter:title" content="Hugo Dias | Software Enginner" />
      <meta
        name="twitter:description"
        content="Engenheiro de Software em Belo Horizonte trabalhando com desenvolvimento de produtos digitais (web e mobile) e consultoria em performance e conversão."
      />
      <meta
        name="keywords"
        content="WordPress, Ruby on Rails, Node JS, React JS, React Native, Product Development"
      />
      <link rel="icon" href="/icons/icon-48x48.png" />
      <link rel="manifest" href="/manifest.webmanifest" />
      <meta name="theme-color" content="#663399" />
      <link rel="apple-touch-icon" sizes="48x48" href="/icons/icon-48x48.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="96x96" href="/icons/icon-96x96.png" />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/icons/icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/icons/icon-192x192.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="256x256"
        href="/icons/icon-256x256.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="384x384"
        href="/icons/icon-384x384.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="512x512"
        href="/icons/icon-512x512.png"
      />
    </Head>
    <header>
      <Nav />
    </header>

    {children}

    <Footer />
  </div>
);
