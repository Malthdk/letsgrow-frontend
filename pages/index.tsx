import * as React from "react";
import { fetchAPI } from "../lib/api";

import Layout from "../components/layout"
import Seo from "../components/seo"
import ContentField from "../components/contentField"
// import How from "../components/how"
// import What from "../components/what"
import Profit from "../components/profit"
import Service from "../components/service"
import Partners from "../components/partners"
import References from "../components/references";

export async function getStaticProps() {
  // Run API calls in parallel
  const [headerRes, contentRes, partnersRes, profitRes, serviceRes, globalRes] = await Promise.all([
    fetchAPI("/header"),
    fetchAPI("/contents", {populate: "*", sort: "id"}),
    fetchAPI("/partnerslist", {populate: "partner.partner_image"}),
    fetchAPI("/profit"),
    fetchAPI("/service", {populate: "*"}),
    fetchAPI("/global", {populate: "*"}),
  ]);

  return {
    props: {
      header: headerRes.data,
      contents: contentRes.data,
      partnersList: partnersRes.data,
      profit: profitRes.data,
      service: serviceRes.data,
      seo: globalRes.data,
    }
  };
}

const IndexPage = ({header, contents, partnersList, profit, service, seo}: any) => (
  <Layout header={header} >
    <Seo seo={seo} />
  <Profit profit={profit} />
  <References />
  <Service service={service} />
    {contents.map((content: any, index: number) => {
      return (
        <ContentField key={index} content={content} />
      )
    })}
    <Partners partnersList={partnersList}/>
  </Layout>
)

export default IndexPage
