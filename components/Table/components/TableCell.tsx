import React from "react";
import classnames from "classnames";

type Props = {
  as: "th" | "td";
  align?: "left" | "center" | "right";
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>;

const TableRow = ({ as: Component, className, align, ...rest }: Props) => {
  const css = classnames(
    "table-cell",
    {
      "text-left": align === "left",
      "text-center": align === "center",
      "text-right": align === "right"
    },
    className
  );

  return <Component className={css} {...rest} />;
};

export default TableRow;
