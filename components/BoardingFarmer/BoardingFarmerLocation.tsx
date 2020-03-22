import React from "react";
import { BoardingFarmerProps } from ".";
import { Input } from "../Form/components";

type Props = BoardingFarmerProps;

const BoardingFarmerLocation = ({ state, handleUpdate }: Props) => {
  return (
    <Input
      value={state.location}
      onChange={e => handleUpdate(e.currentTarget.value)}
      placeholder="z. B. Frankfurt am Main"
      autoFocus
      block
    />
  );
};

export default BoardingFarmerLocation;
