import React, { Fragment } from "react";
import Head from "next/head";
import "../assets/styles/main.css";

type Props = {
  children: React.ReactNode;
};

/**
 * The `Root` component MUST be used in each page to include tailwindcss.
 */
const Root = ({ children }: Props) => {
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="font-body">{children}</div>
    </Fragment>
  );
};

export default Root;
