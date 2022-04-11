import { EventsAtStateType } from "./state";

const getters = {
  eventAts: (state: EventsAtStateType) => {
    return state.eventsAts;
  },
  eventAt: (state: EventsAtStateType) => {
    return state.eventsAt;
  },
  loading: (state: EventsAtStateType) => {
    return state.loading;
  },
};

export default getters;
