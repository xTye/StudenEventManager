import { JoinStateType } from "./state";

const getters = {
  joins: (state: JoinStateType) => {
    return state.joins;
  },
  join: (state: JoinStateType) => {
    return state.join;
  },
  loading: (state: JoinStateType) => {
    return state.loading;
  },
};

export default getters;
