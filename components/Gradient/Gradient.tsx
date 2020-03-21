import React from "react";
import classnames from "classnames";
import "./Gradient.css";

type Props = {
  block?: boolean;
  height: number | string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

/**
 * We may want to show a small gradient using css, e.g. when having a smooth transition
 * to our map.
 */
const Gradient = ({ block, className, height, style, ...rest }: Props) => {
  const css = classnames(
    "gradient-white-transparent",
    { "w-full block": block },
    className
  );
  const styles = { ...style, height };

  return <div className={css} style={styles} {...rest} />;
};

export default Gradient;
