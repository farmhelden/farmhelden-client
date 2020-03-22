import { State } from "../../pages/boarding-farmer";

export { default as BoardingFarmerDifficulty } from "./BoardingFarmerDifficulty";
export { default as BoardingFarmerHelpers } from "./BoardingFarmerHelpers";
export { default as BoardingFarmerLocation } from "./BoardingFarmerLocation";
export { default as BoardingFarmerSkills } from "./BoardingFarmerSkills";
export { default as BoardingFarmerSupport } from "./BoardingFarmerSupport";

export type BoardingFarmerProps = {
  handleUpdate: (value: any) => void;
  state: State;
};
