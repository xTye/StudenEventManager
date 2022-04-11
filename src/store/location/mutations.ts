import * as types from "./types";
import {
  resCreateLocationModel,
  resFindOneLocationModel,
  resFindAllLocationModel,
  reqUpdateLocationModel,
  reqDeleteLocationModel,
} from "@/models/locationModel";
import { LocationStateType } from "./state";

const mutations = {
  [types.LOADING_LOCATION](state: LocationStateType, toggle: boolean) {
    state.loading = toggle;
  },

  [types.CREATE_LOCATION](
    state: LocationStateType,
    res: resCreateLocationModel
  ) {
    state.location = res;
  },

  [types.GET_LOCATIONS](
    state: LocationStateType,
    res: resFindAllLocationModel[]
  ) {
    state.locations = res;
  },

  [types.GET_LOCATION](state: LocationStateType, res: resFindOneLocationModel) {
    state.location = res;
  },

  [types.UPDATE_LOCATION](
    state: LocationStateType,
    res: reqUpdateLocationModel
  ) {
    state.location = res;
  },

  [types.DELETE_LOCATION](
    state: LocationStateType,
    res: reqDeleteLocationModel
  ) {
    state.location = {
      lname: "",
      address: "",
      longitude: "",
      latitude: "",
    };
  },

  [types.DELETE_LOCATIONS](state: LocationStateType) {
    state.locations = [];
    state.location = {
      lname: "",
      address: "",
      longitude: "",
      latitude: "",
    };
  },
};

export default mutations;
