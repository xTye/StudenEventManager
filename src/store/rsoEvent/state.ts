import { RsoEventModel } from "@/models/rsoEventModel";

export type RsoEventStateType = {
  rsoEvents: RsoEventModel[];
  rsoEvent: RsoEventModel;
  loading: boolean;
};

const state: RsoEventStateType = {
  rsoEvents: [],
  rsoEvent: {
    eventid: -1,
    rsoid: "",
  },
  loading: false,
};

export default state;
