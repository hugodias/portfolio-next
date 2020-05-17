import Layout from "components/layout";
import Hero from "components/hero";
import Intro from "components/intro";
import Customers from "components/customers";
import Services from "components/services";
import Cases from "components/cases";

export default () => (
  <Layout>
    <Hero />
    <Intro />
    <Customers />
    <Services />
    <Cases />
  </Layout>
);
