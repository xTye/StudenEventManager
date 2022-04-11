import * as types from "./types";
import {
  resCreatePublicEventModel,
  resFindOnePublicEventModel,
  resFindAllPublicEventModel,
  reqUpdatePublicEventModel,
  reqDeletePublicEventModel,
} from "@/models/publicEventModel";
import { PublicEventStateType } from "./state";

const mutations = {
  [types.LOADING_PUBLICEVENT](state: PublicEventStateType, toggle: boolean) {
    state.loading = toggle;
  },

  [types.CREATE_PUBLICEVENT](
    state: PublicEventStateType,
    res: resCreatePublicEventModel
  ) {
    state.publicEvent = res;
  },

  [types.GET_PUBLICEVENTS](
    state: PublicEventStateType,
    res: resFindAllPublicEventModel[]
  ) {
    state.publicEvents = res;
  },

  [types.GET_PUBLICEVENT](
    state: PublicEventStateType,
    res: resFindOnePublicEventModel
  ) {
    state.publicEvent = res;
  },

  [types.UPDATE_PUBLICEVENT](
    state: PublicEventStateType,
    res: reqUpdatePublicEventModel
  ) {
    state.publicEvent = res;
  },

  [types.DELETE_PUBLICEVENT](
    state: PublicEventStateType,
    res: reqDeletePublicEventModel
  ) {
    state.publicEvent = {
      eventid: -1,
      adminid: "",
      superadminid: "",
    };
  },

  [types.DELETE_PUBLICEVENTS](state: PublicEventStateType) {
    state.publicEvents = [];
    state.publicEvent = {
      eventid: -1,
      adminid: "",
      superadminid: "",
    };
  },
};

export default mutations;
