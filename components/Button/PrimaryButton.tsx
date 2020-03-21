import React from "react";
import classnames from "classnames";
import BaseButton, { Props as BaseButtonProps } from "./BaseButton";

type Props = {
  theme?: "flat" | "border";
} & BaseButtonProps;

const PrimaryButton = ({ theme = "flat", className, ...rest }: Props) => {
  const css = classnames(
    "border-green-500 hover:border-green-600 focus:bg-green-700 focus:border-green-700",
    {
      "bg-green-500 hover:bg-green-600 text-white": theme === "flat",
      "text-green-500 hover:bg-green-600 hover:text-white focus:text-white":
        theme === "border"
    },
    className
  );

  return <BaseButton className={css} {...rest} />;
};

export default PrimaryButton;
