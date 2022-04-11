import { UniversitiesCreatedStateType } from "./state";

const getters = {
  universitiesCreateds: (state: UniversitiesCreatedStateType) => {
    return state.universitiesCreateds;
  },
  universitiesCreated: (state: UniversitiesCreatedStateType) => {
    return state.universitiesCreated;
  },
  loading: (state: UniversitiesCreatedStateType) => {
    return state.loading;
  },
};

export default getters;
