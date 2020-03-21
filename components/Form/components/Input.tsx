import React from "react";
import classnames from "classnames";

type Props = {} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
const Input = ({ className, type = "text", ...rest }: Props) => {
  const css = classnames(
    "px-2 py-2 border-2 border-gray-400 rounded focus:border-secondary-dark",
    className
  );

  return <input type="text" className={css} {...rest} />;
};

export default Input;
