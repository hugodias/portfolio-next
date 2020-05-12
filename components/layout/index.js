import Link from "next/link";
import Head from "next/head";
import Nav from "../nav";
import "./layout.module.css";

export default ({ children, title = "This is the default title" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;700&amp;display=swap"
        rel="stylesheet"
      />
    </Head>
    <header>
      <Nav />
    </header>

    {children}

    <footer>{"I`m here to stay"}</footer>
  </div>
);
