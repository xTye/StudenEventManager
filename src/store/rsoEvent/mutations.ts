import * as types from "./types";
import {
  resCreateRsoEventModel,
  resFindOneRsoEventModel,
  resFindAllRsoEventModel,
  reqUpdateRsoEventModel,
  reqDeleteRsoEventModel,
  resUpdateRsoEventModel,
} from "@/models/rsoEventModel";
import { RsoEventStateType } from "./state";

const mutations = {
  [types.LOADING_RSOEVENT](state: RsoEventStateType, toggle: boolean) {
    state.loading = toggle;
  },

  [types.CREATE_RSOEVENT](
    state: RsoEventStateType,
    res: resCreateRsoEventModel
  ) {
    state.rsoEvent = res;
  },

  [types.GET_RSOEVENTS](
    state: RsoEventStateType,
    res: resFindAllRsoEventModel[]
  ) {
    state.rsoEvents = res;
  },

  [types.GET_RSOEVENT](state: RsoEventStateType, res: resFindOneRsoEventModel) {
    state.rsoEvent = res;
  },

  [types.UPDATE_RSOEVENT](
    state: RsoEventStateType,
    res: resUpdateRsoEventModel
  ) {
    state.rsoEvent = res;
  },

  [types.DELETE_RSOEVENT](
    state: RsoEventStateType,
    res: reqDeleteRsoEventModel
  ) {
    state.rsoEvent = {
      eventid: -1,
      rsoid: "",
      EventsAt: {
        eventname: "",
        time: "",
        date: "",
        description: "",
        location: "",
        category: "",
        phonenumber: "",
        emailaddress: "",
      },
      Comments: [],
    };
  },

  [types.DELETE_RSOEVENTS](state: RsoEventStateType) {
    state.rsoEvents = [];
    state.rsoEvent = {
      eventid: -1,
      rsoid: "",
      EventsAt: {
        eventname: "",
        time: "",
        date: "",
        description: "",
        location: "",
        category: "",
        phonenumber: "",
        emailaddress: "",
      },
      Comments: [],
    };
  },
};

export default mutations;
