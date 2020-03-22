import React from "react";
import { BoardingFarmerProps } from ".";
import { Input } from "../Form/components";

type Props = BoardingFarmerProps;

const BoardingFarmerHelpers = ({ state, handleUpdate }: Props) => {
  return (
    <Input
      type="number"
      value={state.helpersNeededCount}
      onChange={e => handleUpdate(e.currentTarget.value)}
    />
  );
};

export default BoardingFarmerHelpers;
