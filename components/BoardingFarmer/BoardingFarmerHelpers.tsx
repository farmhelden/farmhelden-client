import React from "react";
import { BoardingFarmerProps } from ".";
import { Input } from "../Form/components";

type Props = BoardingFarmerProps;

const BoardingFarmerHelpers = ({ state, handleUpdate }: Props) => {
  return (
    <Input
      type="number"
      min={1}
      max={1000}
      value={state.helpersNeededCount}
      onChange={e => handleUpdate(e.currentTarget.value)}
      autoFocus
      block
    />
  );
};

export default BoardingFarmerHelpers;
