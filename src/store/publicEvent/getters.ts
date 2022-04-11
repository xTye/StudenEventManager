import { PublicEventStateType } from "./state";

const getters = {
  publicEvents: (state: PublicEventStateType) => {
    return state.publicEvents;
  },
  publicEvent: (state: PublicEventStateType) => {
    return state.publicEvent;
  },
  loading: (state: PublicEventStateType) => {
    return state.loading;
  },
};

export default getters;
