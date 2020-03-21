import React from "react";
import classnames from "classnames";

type Props = {} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement
>;

const TableRow = ({ className, ...rest }: Props) => {
  const css = classnames("table-row", className);

  return <tr className={css} {...rest} />;
};

export default TableRow;
