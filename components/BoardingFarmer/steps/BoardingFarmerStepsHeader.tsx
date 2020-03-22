import React from "react";
import Link from "next/link";
import { ChevronLeft } from "react-feather";
import { Title } from "../../Title";

type Props = {
  handleGoBack: () => void;
};

const BoardingFarmerStepsHeader = ({ handleGoBack }: Props) => {
  return (
    <div className="flex justify-between items-end mb-4 w-full">
      <span
        className="flex items-center text-primary-dark cursor-pointer"
        onClick={handleGoBack}
      >
        <ChevronLeft className="mr-1" size={16} />
        Zurück
      </span>
      <Title as="h6" className="text-md">
        Unterstützung suchen
      </Title>
      <span className="text-gray-500 hover:text-gray-600">
        <Link href="/">Abbrechen</Link>
      </span>
    </div>
  );
};

export default BoardingFarmerStepsHeader;
