import React from "react";
import { useRouter } from "next/router";

import { BoardingTitle } from "../Title";
import BaseButton from "../Button/BaseButton";
import { Input } from "../Form/components";
import { BoardingFarmerStepsHeader } from "./steps";
import { NextStepProps } from ".";

type Props = {} & Pick<NextStepProps, "triggerNextPage">;

const BoardingFarmerContact = (props: Props) => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-between h-100vh py-4">
      <div>
        <BoardingFarmerStepsHeader handleGoBack={() => {}} />
        <BoardingTitle>Wie können Dich Erntehelfer erreichen?</BoardingTitle>
        <Input
          className="focus:bg-gray-200 mb-4"
          placeholder="Namen eingeben"
          block
          borderless
        />
        <Input
          className="focus:bg-gray-200 mb-4"
          placeholder="E-Mail-Adresse eingeben"
          block
          borderless
        />
        <Input
          className="focus:bg-gray-200 mb-4"
          placeholder="Telefonnummer eingeben"
          block
          borderless
        />
      </div>
      <BaseButton
        className="bg-black text-white border-black"
        onClick={() => router.push("/map")}
        block
      >
        Inserat veröffentlichen
      </BaseButton>
    </div>
  );
};

export default BoardingFarmerContact;
