import React from "react";
import { BoardingFarmerProps } from ".";
import { Checkbox } from "../../Form/components";
import { updateArray } from "../../../utils/immutable";

type Props = BoardingFarmerProps;

const supportTypes = [
  { id: "1", title: "Ernte" },
  { id: "2", title: "Verkauf" },
  { id: "3", title: "Sortieren" },
  { id: "4", title: "Pflanzarbeiten" },
  { id: "5", title: "Schlepper fahren" },
  { id: "6", title: "Melken" },
  { id: "7", title: "Sonstige" }
];

const BoardingFarmerSupport = ({ state, handleUpdate }: Props) => {
  return (
    <ul>
      {supportTypes.map(({ id, title }) => {
        return (
          <li key={id}>
            <Checkbox
              value={id}
              checked={state.supportTypeIds.includes(title)}
              onChange={() =>
                handleUpdate(updateArray(title, state.supportTypeIds))
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
