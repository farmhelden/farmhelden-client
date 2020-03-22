import React, { Fragment, useState } from "react";
import BaseButton from "../Button/BaseButton";
import { Calendar } from "../Calendar";
import { BoardingTitle } from "../Title";
import { BoardingFarmerStepsHeader } from "./steps";
import { NextStepProps } from ".";

type Props = {} & Pick<NextStepProps, "triggerNextPage">;

const BoardingFarmerDateSelection = (props: Props) => {
  const [dates, setDates] = useState<[string, string]>(null);

  return (
    <Fragment>
      <BoardingFarmerStepsHeader handleGoBack={() => {}} />
      <BoardingTitle>Wann benötigst Du Unterstützung?</BoardingTitle>
      <Calendar onChange={setDates} />
      <BaseButton
        className="bg-black text-white border-black"
        onClick={props.triggerNextPage}
        block
      >
        Kontaktdaten angeben
      </BaseButton>
    </Fragment>
  );
};

export default BoardingFarmerDateSelection;
