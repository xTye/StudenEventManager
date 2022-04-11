import { JoinModel } from "@/models/joinModel";

export type JoinStateType = {
  joins: JoinModel[];
  join: JoinModel;
  loading: boolean;
};

const state: JoinStateType = {
  joins: [],
  join: {
    userid: "",
    rsoid: "",
  },
  loading: false,
};

export default state;
