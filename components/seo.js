import Head from "next/head";

const Seo = ({ seo }) => {

  return (
    <Head>
      {seo.attributes.meta_title && (
        <>
          <title>{seo.attributes.site_name ? seo.attributes.site_name : seo.attributes.meta_title}</title>
          <meta property="og:title" content={seo.attributes.meta_title} />
          <meta name="twitter:title" content={seo.attributes.meta_title} />
        </>
      )}
      {seo.attributes.meta_description && (
        <>
          <meta name="description" content={seo.attributes.meta_description} />
          <meta property="og:description" content={seo.attributes.meta_description} />
          <meta name="twitter:description" content={seo.attributes.meta_description} />
        </>
      )}
      {seo.attributes.share_image.data && (
        <>
          <meta property="og:image" content={seo.attributes.share_image.data.attributes.url} />
          <meta name="twitter:image" content={seo.attributes.share_image.data.attributes.url} />
          <meta name="image" content={seo.attributes.share_image.data.attributes.url} />
          <meta itemProp="image primaryImageOfPage" content={seo.attributes.share_image.data.attributes.url} />
        </>
      )}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Seo;