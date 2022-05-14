import Head from "next/head";
import React from "react";

export default function Meta({ title, description, keyword }) {
  // 3ta default rakci
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="keyword" content={keyword} />
    </Head>
  );
}

// Meta.defaultProps={

// }
