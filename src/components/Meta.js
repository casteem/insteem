import React from "react";
import { Helmet } from "react-helmet";
import logo from "components/Layout/insteem.png";

const Meta = props => {
  const { data = {} } = props;

  const { title } = data || "Insteem";
  const {
    body: description = "Decentralized News by Independent Journalists"
  } = data;
  const path =
    "/" + data.category + "/@" + data.author + "/" + data.permlink || "";

  return (
    <Helmet titleTemplate="%s | Insteem" defaultTitle="Insteem">
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={title} />
      <meta name="author" content={data.author} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={data.description} />
      <meta name="og:image" content={logo} />
      {data.image ? <meta name="og:image" content={data.image.url} /> : null}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@GatsbyCentral" />
      <meta name="twitter:image" content={logo} />
      <link rel="canonical" href={`https://www.steemit.com${path}`} />
      <link rel="image_src" href={logo} />
    </Helmet>
  );
};

export default Meta;
