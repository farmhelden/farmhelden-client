import { State } from "../../pages/boarding-farmer";

export { default as BoardingFarmerSupport } from "./BoardingFarmerSupport";

export type BoardingFarmerProps = {
  handleUpdate: (value: any) => void;
  state: State;
};
