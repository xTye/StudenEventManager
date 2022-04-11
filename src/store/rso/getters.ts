import { RsoStateType } from "./state";

const getters = {
  rsos: (state: RsoStateType) => {
    return state.rsos;
  },
  rso: (state: RsoStateType) => {
    return state.rso;
  },
  loading: (state: RsoStateType) => {
    return state.loading;
  },
};

export default getters;
