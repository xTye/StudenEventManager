import * as types from "./types";
import {
  resCreateRsoModel,
  resFindOneRsoModel,
  resFindAllRsoModel,
  reqUpdateRsoModel,
  reqDeleteRsoModel,
} from "@/models/rsoModel";
import { RsoStateType } from "./state";

const mutations = {
  [types.LOADING_RSO](state: RsoStateType, toggle: boolean) {
    state.loading = toggle;
  },

  [types.CREATE_RSO](state: RsoStateType, res: resCreateRsoModel) {
    state.rso = res;
  },

  [types.GET_RSOS](state: RsoStateType, res: resFindAllRsoModel[]) {
    state.rsos = res;
  },

  [types.GET_RSO](state: RsoStateType, res: resFindOneRsoModel) {
    state.rso = res;
  },

  [types.UPDATE_RSO](state: RsoStateType, res: reqUpdateRsoModel) {
    state.rso = res;
  },

  [types.DELETE_RSO](state: RsoStateType, res: reqDeleteRsoModel) {
    state.rso = {
      rsoid: "",
      adminid: "",
    };
  },

  [types.DELETE_RSOS](state: RsoStateType) {
    state.rsos = [];
    state.rso = {
      rsoid: "",
      adminid: "",
    };
  },
};

export default mutations;
