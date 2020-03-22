import React, { Fragment } from "react";
import Header from "../Header";
import { NextStepProps } from ".";
import { PrimaryButton } from "../Button";

type Props = {} & Pick<NextStepProps, "triggerNextPage">;

const BoardingFarmerIntroduction = (props: Props) => {
  return (
    <Fragment>
      <Header />
      <p className="text-primary-dark font-title mb-12">
        Als landwirtschaftlicher Betrieb ist es zur Zeit nicht einfach. Erstelle
        jetzt schnell und einfach Unterstützungsanfragen und lass Dir von
        Menschen aus deiner Umgebung helfen.
        <br />
        Los geht's!
      </p>
      <PrimaryButton onClick={props.triggerNextPage} block>
        Unterstützung suchen
      </PrimaryButton>
    </Fragment>
  );
};

export default BoardingFarmerIntroduction;
