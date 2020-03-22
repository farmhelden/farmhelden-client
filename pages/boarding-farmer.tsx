import React, { useState } from "react";
import { Container } from "@material-ui/core";
import classnames from "classnames";

import Root from "../components/Root";
import {
  BoardingFarmerIntroduction,
  BoardingFarmerSupportData,
  BoardingFarmerDateSelection
} from "../components/BoardingFarmer";

type Props = {};

const steps = [
  { index: 0, Component: BoardingFarmerIntroduction },
  { index: 1, Component: BoardingFarmerSupportData },
  { index: 2, Component: BoardingFarmerDateSelection }
];

const lastIndex = steps.length - 1;
const dotSize = 9;
const DotStyles = { width: dotSize, height: dotSize };

function Dot({ isActive }: { isActive: boolean }) {
  return (
    <span
      className={classnames(
        "inline-block rounded-full mr-2",
        isActive ? "bg-primary-dark" : "bg-primary-light"
      )}
      style={DotStyles}
    />
  );
}

const BoardingFarmer = ({}: Props) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const ActiveComponent = steps[activeStepIndex].Component;

  return (
    <Root>
      <Container className="pt-4">
        <ActiveComponent
          triggerNextPage={() =>
            setActiveStepIndex(
              activeStepIndex === lastIndex ? lastIndex : activeStepIndex + 1
            )
          }
          stepIndicatorBar={
            <div className="w-full block text-center">
              {steps.slice(1).map((step, i) => (
                <Dot key={step.index} isActive={i === activeStepIndex} />
              ))}
            </div>
          }
        ></ActiveComponent>
      </Container>
    </Root>
  );
};

export default BoardingFarmer;
