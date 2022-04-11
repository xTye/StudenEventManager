import * as types from "./types";
import {
  resCreateUniversitiesCreatedModel,
  resFindOneUniversitiesCreatedModel,
  resFindAllUniversitiesCreatedModel,
  reqUpdateUniversitiesCreatedModel,
  reqDeleteUniversitiesCreatedModel,
} from "@/models/universitiesCreatedModel";
import { UniversitiesCreatedStateType } from "./state";

const mutations = {
  [types.LOADING_UNIVERSITIESCREATED](
    state: UniversitiesCreatedStateType,
    toggle: boolean
  ) {
    state.loading = toggle;
  },

  [types.CREATE_UNIVERSITIESCREATED](
    state: UniversitiesCreatedStateType,
    res: resCreateUniversitiesCreatedModel
  ) {
    state.universitiesCreated = res;
  },

  [types.GET_UNIVERSITIESCREATEDS](
    state: UniversitiesCreatedStateType,
    res: resFindAllUniversitiesCreatedModel[]
  ) {
    state.universitiesCreateds = res;
  },

  [types.GET_UNIVERSITIESCREATED](
    state: UniversitiesCreatedStateType,
    res: resFindOneUniversitiesCreatedModel
  ) {
    state.universitiesCreated = res;
  },

  [types.UPDATE_UNIVERSITIESCREATED](
    state: UniversitiesCreatedStateType,
    res: reqUpdateUniversitiesCreatedModel
  ) {
    state.universitiesCreated = res;
  },

  [types.DELETE_UNIVERSITIESCREATED](
    state: UniversitiesCreatedStateType,
    res: reqDeleteUniversitiesCreatedModel
  ) {
    state.universitiesCreated = {
      name: "",
      location: "",
      description: "",
      numstudents: -1,
      superadminid: "",
    };
  },

  [types.DELETE_UNIVERSITIESCREATEDS](state: UniversitiesCreatedStateType) {
    state.universitiesCreateds = [];
    state.universitiesCreated = {
      name: "",
      location: "",
      description: "",
      numstudents: -1,
      superadminid: "",
    };
  },
};

export default mutations;
