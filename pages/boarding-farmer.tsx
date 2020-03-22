import React, { useState, Fragment } from "react";
import {
  MapPin,
  Star,
  Users,
  Award,
  MessageSquare,
  ChevronLeft,
  ChevronRight
} from "react-feather";
import { Container } from "@material-ui/core";
import Link from "next/link";

import Root from "../components/Root";
import { Title } from "../components/Title";
import { PrimaryButton } from "../components/Button";
import BaseButton from "../components/Button/BaseButton";
import {
  BoardingFarmerSupport,
  BoardingFarmerHelpers,
  BoardingFarmerLocation,
  BoardingFarmerSkills,
  BoardingFarmerDifficulty
} from "../components/BoardingFarmer";
import { Maybe, ValueOf } from "../types";
import { FadingPillList } from "../components/Pill";

type Props = {};
type RenderProps = {
  value: any;
};

const menuItems = [
  {
    index: 0,
    key: "location",
    stateKey: "location" as "location",
    title: "Standort eingeben",
    Icon: MapPin,
    Component: BoardingFarmerLocation,
    Render: ({ value }: RenderProps) => <Fragment>{value}</Fragment>
  },
  {
    index: 1,
    key: "support",
    stateKey: "supportTypeIds" as "supportTypeIds",
    title: "Art der Unterstützung",
    Icon: Star,
    Component: BoardingFarmerSupport,
    Render: ({ value }: RenderProps) => (
      <FadingPillList>
        {Pill => (
          <Fragment>
            {value.map(v => (
              <Pill key={v} className="mr-1">
                {v}
              </Pill>
            ))}
          </Fragment>
        )}
      </FadingPillList>
    )
  },
  {
    index: 2,
    key: "helpers",
    stateKey: "helpersNeededCount" as "helpersNeededCount",
    title: "Benötigte Helfer",
    Icon: Users,
    Component: BoardingFarmerHelpers,
    Render: ({ value }: RenderProps) => <Fragment>{value}</Fragment>
  },
  {
    index: 3,
    key: "skills",
    stateKey: "requiredSkillsIds" as "requiredSkillsIds",
    title: "Qualifikationen (optional)",
    Icon: Award,
    Component: BoardingFarmerSkills,
    Render: ({ value }: RenderProps) => (
      <FadingPillList>
        {Pill => (
          <Fragment>
            {value.map(v => (
              <Pill key={v} className="mr-1">
                {v}
              </Pill>
            ))}
          </Fragment>
        )}
      </FadingPillList>
    )
  },
  {
    index: 4,
    key: "skills",
    stateKey: "requiredSkillsIds" as "requiredSkillsIds",
    title: "Schwierigkeitsgrad",
    Icon: MessageSquare,
    Component: BoardingFarmerSkills,
    Render: ({ value }: RenderProps) => <Fragment>{value}</Fragment>
  }
];

const totalItems = menuItems.length;

export type State = {
  location: Maybe<string>;
  supportTypeIds: string[];
  helpersNeededCount: Maybe<number>;
  requiredSkillsIds: string[];
  difficulty: Maybe<number>;
};

function useBoardingFarmerState() {
  const initialState: State = {
    location: null,
    supportTypeIds: [],
    helpersNeededCount: null,
    requiredSkillsIds: [],
    difficulty: null
  };

  const [state, setState] = useState<State>(initialState);
  const updateState = (key: keyof State) => (value: ValueOf<typeof key>) =>
    setState({ ...state, [key]: value });

  return [state, updateState] as [typeof state, typeof updateState];
}

function hasValue(v: any) {
  const isNull = v === null;
  const emptyArray = Array.isArray(v) && v.length === 0;

  return !(isNull || emptyArray);
}

const BoardingFarmer = ({}: Props) => {
  const [activeItem, setActiveItem] = useState<typeof menuItems[0]>(null);
  const [state, updateState] = useBoardingFarmerState();
  const reachedFinalStep = activeItem?.index === totalItems - 1;

  return (
    <Root>
      <Container className="pt-4">
        {activeItem === null ? (
          <Fragment>
            {/* Header */}
            <Title as="h1" className="text-primary-dark text-2xl mb-2">
              Was und wo?
            </Title>

            {/* Overview */}
            <ul>
              {menuItems.map(item => {
                const stateValue = state[item.stateKey];
                const showValue = hasValue(stateValue);

                return (
                  <li
                    key={item.key}
                    className="relative flex items-center justify-between border-b border-gray-200 px-1 py-2 cursor-pointer hover:text-primary-light"
                    onClick={() => setActiveItem(item)}
                  >
                    <Fragment>
                      <div className="flex items-center w-full">
                        <item.Icon size={16} className="inline-block mr-2" />
                        {showValue ? (
                          <item.Render value={stateValue} />
                        ) : (
                          item.title
                        )}
                      </div>
                      <ChevronRight className="absolute right-0" />
                    </Fragment>
                  </li>
                );
              })}
            </ul>

            {/* Footer */}
            <span className="fixed bottom-0 left-0 w-full block text-center p-1 my-4 text-gray-500 hover:text-gray-600">
              <Link href="/">Abbrechen</Link>
            </span>
          </Fragment>
        ) : (
          <Fragment>
            {/* Header */}
            <div className="flex justify-between items-end mb-4 w-full">
              <span
                className="flex items-center text-primary-dark cursor-pointer"
                onClick={() => setActiveItem(null)}
              >
                <ChevronLeft className="mr-1" size={16} />
                Zurück
              </span>
              <Title as="h6" className="text-lg">{`Schritt ${activeItem.index +
                1} / ${totalItems}`}</Title>
              <span className="text-gray-500 hover:text-gray-600">
                <Link href="/">Abbrechen</Link>
              </span>
            </div>
            <div className="block">
              <Title as="h2" className="mb-2 text-xl text-primary-dark" bold>
                {activeItem.title}
              </Title>
            </div>

            {/* Subpage */}
            <div>
              {
                <activeItem.Component
                  key={activeItem.key}
                  handleUpdate={updateState(activeItem.stateKey)}
                  state={state}
                />
              }
            </div>

            {/* Footer */}
            <div className="fixed bottom-0 left-0 w-full p-4 pb-6">
              {reachedFinalStep ? (
                <BaseButton className="bg-black text-white border-black" block>
                  Inserat erstellen
                </BaseButton>
              ) : (
                <PrimaryButton
                  onClick={() =>
                    !reachedFinalStep &&
                    setActiveItem(menuItems[activeItem.index + 1])
                  }
                  block
                >
                  Fortfahren
                </PrimaryButton>
              )}
            </div>
          </Fragment>
        )}
      </Container>
    </Root>
  );
};

export default BoardingFarmer;
