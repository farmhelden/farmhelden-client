import React, { Fragment } from "react";
import "../assets/styles/main.css";

type Props = {
  children: React.ReactNode;
};

/**
 * The `Root` component MUST be used in each page to include tailwindcss.
 */
const Root = ({ children }: Props) => {
  return <Fragment>{children}</Fragment>;
};

export default Root;
