import { RsoEventStateType } from "./state";

const getters = {
  rsoEvents: (state: RsoEventStateType) => {
    return state.rsoEvents;
  },
  rsoEvent: (state: RsoEventStateType) => {
    return state.rsoEvent;
  },
  loading: (state: RsoEventStateType) => {
    return state.loading;
  },
};

export default getters;
