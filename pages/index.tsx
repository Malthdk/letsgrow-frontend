import * as React from "react";
import { fetchAPI } from "../lib/api";

import Layout from "../components/layout"
import Seo from "../components/seo"
import ContentField from "../components/contentField"
import Profit from "../components/profit"
import Service from "../components/service"
import Partners from "../components/partners"
import References from "../components/references";

export async function getStaticProps() {
  // Run API calls in parallel
  const [headerRes, contentRes, partnersRes, profitRes, serviceRes, globalRes, referencesRes] = await Promise.all([
    fetchAPI("/header"),
    fetchAPI("/contents", {populate: "*", sort: "id"}),
    fetchAPI("/partnerslist", {populate: "partner.partner_image"}),
    fetchAPI("/profit"),
    fetchAPI("/service", {populate: "*"}),
    fetchAPI("/global", {populate: "*"}),
    fetchAPI("/referencelist", {populate: ["reference.image", "reference.video", "reference.poster"]}),
  ]);

  return {
    props: {
      header: headerRes.data,
      contents: contentRes.data,
      partnersList: partnersRes.data,
      profit: profitRes.data,
      service: serviceRes.data,
      seo: globalRes.data,
      references: referencesRes.data
    }
  };
}

const IndexPage = ({header, contents, partnersList, profit, service, seo, references}: any) => (
  <Layout header={header} >
    <Seo seo={seo} />
  <Service service={service} />
  <References references={references} />
  <Profit profit={profit} />
    {contents.map((content: any, index: number) => {
      return (
        <ContentField key={index} content={content} />
      )
    })}
    <Partners partnersList={partnersList}/>
  </Layout>
)

export default IndexPage
