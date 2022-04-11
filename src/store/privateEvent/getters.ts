import { PrivateEventStateType } from "./state";

const getters = {
  privateEvents: (state: PrivateEventStateType) => {
    return state.privateEvents;
  },
  privateEvent: (state: PrivateEventStateType) => {
    return state.privateEvent;
  },
  loading: (state: PrivateEventStateType) => {
    return state.loading;
  },
};

export default getters;
