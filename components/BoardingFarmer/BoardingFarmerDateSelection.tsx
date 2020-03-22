import React, { Fragment, useState } from "react";
import { Calendar } from "../Calendar";
import { BoardingTitle } from "../Title";

type Props = {};

const BoardingFarmerDateSelection = ({}: Props) => {
  const [dates, setDates] = useState<[string, string]>(null);

  return (
    <Fragment>
      <BoardingTitle>Wann benötigst Du Unterstützung?</BoardingTitle>
      <Calendar onChange={setDates} />
    </Fragment>
  );
};

export default BoardingFarmerDateSelection;
