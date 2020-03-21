import React from "react";
import classnames from "classnames";
import { FCProps } from "../../types";
import { Input } from "./components";
import { FormField } from "./components";
import { useFormField } from "./hooks";

type Props = {
  name: string;
  block?: boolean;
} & Omit<FCProps<typeof Input>, "name">;

const InputField = ({
  name,
  type = "text",
  style,
  block = false,
  className,
  ...rest
}: Props) => {
  const css = classnames({ "w-full block": block }, className);
  const [field, { error, hasError }] = useFormField({ name, type });
  // Reset bottom margin for error message.
  const styles = hasError ? { ...style, marginBottom: 0 } : style;

  return (
    <FormField hasError={hasError} error={error}>
      <Input type={type} {...field} className={css} {...rest} style={styles} />
    </FormField>
  );
};

export default InputField;
