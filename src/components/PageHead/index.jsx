import Head from "next/head";

export const PageHead = ({
  title = "ガチャ一点狙いシミュレーター",
  description = "学習しながら色々作った記録",
}) => {
  return (
    <Head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#">
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <title>
        {title}|{process.env.NEXT_PUBLIC_SITE_NAME}
      </title>
      <meta name="description" content={description} />
      <meta
        property="og:title"
        content={`${title}|${process.env.NEXT_PUBLIC_SITE_NAME}`}
      />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_SITE_URL}/hero.png`}
      />
      <meta
        property="og:site_name"
        content={process.env.NEXT_PUBLIC_SITE_NAME}
      />
      {/* Facebook */}
      <meta property="fb:app_id" content={process.env.NEXT_PUBLIC_FB_ID} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
    </Head>
  );
};
