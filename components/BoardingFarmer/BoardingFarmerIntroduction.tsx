import React, { Fragment } from "react";
import Header from "../Header";
import { NextStepProps } from ".";
import { PrimaryButton } from "../Button";

type Props = {} & Pick<NextStepProps, "triggerNextPage">;

const BoardingFarmerIntroduction = (props: Props) => {
  return (
    <div className="flex flex-col justify-between h-100vh py-4">
      <div>
        <Header />
        <p className="text-xl text-primary-dark font-title mb-12">
          Als landwirtschaftlicher Betrieb ist es zur Zeit nicht einfach.
          Erstelle jetzt schnell und einfach Unterstützungsanfragen und lass Dir
          von Menschen aus deiner Umgebung helfen.
          <br />
          <br />
          Los geht's!
        </p>
      </div>
      <PrimaryButton onClick={props.triggerNextPage} block>
        Unterstützung suchen
      </PrimaryButton>
    </div>
  );
};

export default BoardingFarmerIntroduction;
