import React from "react";
import { BoardingFarmerProps } from ".";
import { Checkbox } from "../../Form/components";
import { updateArray } from "../../../utils/immutable";

type Props = BoardingFarmerProps;

const skillTypes = [
  { id: "1", title: "Skill A" },
  { id: "2", title: "Skill B" },
  { id: "3", title: "Skill C" },
  { id: "4", title: "Skill D" },
  { id: "5", title: "Skill E" },
  { id: "6", title: "Skill F" },
  { id: "7", title: "Skill G" }
];

const BoardingFarmerSupport = ({ state, handleUpdate }: Props) => {
  return (
    <ul>
      {skillTypes.map(({ id, title }) => {
        return (
          <li key={id}>
            <Checkbox
              value={id}
              checked={state.requiredSkillsIds.includes(title)}
              onChange={() =>
                handleUpdate(updateArray(title, state.requiredSkillsIds))
              }
              className="py-1 hover:bg-gray-100"
              block
            >
              {title}
            </Checkbox>
          </li>
        );
      })}
    </ul>
  );
};

export default BoardingFarmerSupport;
