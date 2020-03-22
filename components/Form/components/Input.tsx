import React from "react";
import classnames from "classnames";

type Props = {
  block?: boolean;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
const Input = ({ className, type = "text", block = false, ...rest }: Props) => {
  const css = classnames(
    "px-2 py-2 border-2 border-gray-400 rounded focus:border-secondary-dark",
    { "w-full block": block },
    className
  );

  return <input type={type} className={css} {...rest} />;
};

export default Input;
