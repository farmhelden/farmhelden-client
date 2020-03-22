import React from "react";
import classnames from "classnames";

type Props = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

const Pill = ({ children, className, ...rest }: Props) => {
  const css = classnames(
    "bg-gray-200 rounded-full px-4 py-1",
    !className && "inline-block",
    className
  );

  return (
    <span className={css} {...rest}>
      {children}
    </span>
  );
};

export default Pill;
