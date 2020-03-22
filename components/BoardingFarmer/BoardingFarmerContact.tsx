import React from "react";
import { useRouter } from "next/router";
import { NextStepProps } from ".";
import { BoardingFarmerStepsHeader } from "./steps";
import { BoardingTitle } from "../Title";
import BaseButton from "../Button/BaseButton";
import { Input } from "../Form/components";

type Props = {} & Pick<NextStepProps, "triggerNextPage">;

const BoardingFarmerContact = (props: Props) => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-between h-100vh py-4">
      <div>
        <BoardingFarmerStepsHeader handleGoBack={() => {}} />
        <BoardingTitle>Wie können Dich Erntehelfer erreichen?</BoardingTitle>
        <Input placeholder="Namen eingeben" />
        <Input placeholder="E-Mail-Adresse eingeben" />
        <Input placeholder="Telefonnummer eingeben" />
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
