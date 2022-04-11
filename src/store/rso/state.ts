import { RsoModel } from "@/models/rsoModel";

export type RsoStateType = {
  rsos: RsoModel[];
  rso: RsoModel;
  loading: boolean;
};

const state: RsoStateType = {
  rsos: [],
  rso: {
    rsoid: "",
    adminid: "",
  },
  loading: false,
};

export default state;
