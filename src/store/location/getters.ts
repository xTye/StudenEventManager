import { LocationStateType } from "./state";

const getters = {
  locations: (state: LocationStateType) => {
    return state.locations;
  },
  location: (state: LocationStateType) => {
    return state.location;
  },
  loading: (state: LocationStateType) => {
    return state.loading;
  },
};

export default getters;
