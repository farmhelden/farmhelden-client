import React from "react";
import classnames from "classnames";

export type Props = {
  children: React.ReactNode;
  block?: boolean;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const BaseButton = ({ children, className, block = false, ...rest }: Props) => {
  const css = classnames(
    "border-2 border-solid rounded font-medium px-4 py-1",
    {
      "w-full block": block
    },
    className
  );

  return (
    <button type="button" className={css} {...rest}>
      {children}
    </button>
  );
};

export default BaseButton;
