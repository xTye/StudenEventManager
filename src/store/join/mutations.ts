import * as types from "./types";
import {
  resCreateJoinModel,
  resFindOneJoinModel,
  resFindAllJoinModel,
  reqUpdateJoinModel,
  reqDeleteJoinModel,
} from "@/models/joinModel";
import { JoinStateType } from "./state";

const mutations = {
  [types.LOADING_JOIN](state: JoinStateType, toggle: boolean) {
    state.loading = toggle;
  },

  [types.CREATE_JOIN](state: JoinStateType, res: resCreateJoinModel) {
    state.join = res;
  },

  [types.GET_JOINS](state: JoinStateType, res: resFindAllJoinModel[]) {
    state.joins = res;
  },

  [types.GET_JOIN](state: JoinStateType, res: resFindOneJoinModel) {
    state.join = res;
  },

  [types.UPDATE_JOIN](state: JoinStateType, res: reqUpdateJoinModel) {
    state.join = res;
  },

  [types.DELETE_JOIN](state: JoinStateType, res: reqDeleteJoinModel) {
    state.join = {
      userid: "",
      rsoid: "",
    };
  },

  [types.DELETE_JOINS](state: JoinStateType) {
    state.joins = [];
    state.join = {
      userid: "",
      rsoid: "",
    };
  },
};

export default mutations;
