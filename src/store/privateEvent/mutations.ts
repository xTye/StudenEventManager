import * as types from "./types";
import {
  resCreatePrivateEventModel,
  resFindOnePrivateEventModel,
  resFindAllPrivateEventModel,
  reqUpdatePrivateEventModel,
  reqDeletePrivateEventModel,
  resUpdatePrivateEventModel,
} from "@/models/privateEventModel";
import { PrivateEventStateType } from "./state";

const mutations = {
  [types.LOADING_PRIVATEEVENT](state: PrivateEventStateType, toggle: boolean) {
    state.loading = toggle;
  },

  [types.CREATE_PRIVATEEVENT](
    state: PrivateEventStateType,
    res: resCreatePrivateEventModel
  ) {
    state.privateEvent = res;
  },

  [types.GET_PRIVATEEVENTS](
    state: PrivateEventStateType,
    res: resFindAllPrivateEventModel[]
  ) {
    state.privateEvents = res;
  },

  [types.GET_PRIVATEEVENT](
    state: PrivateEventStateType,
    res: resFindOnePrivateEventModel
  ) {
    state.privateEvent = res;
  },

  [types.UPDATE_PRIVATEEVENT](
    state: PrivateEventStateType,
    res: resUpdatePrivateEventModel
  ) {
    state.privateEvent = res;
  },

  [types.DELETE_PRIVATEEVENT](
    state: PrivateEventStateType,
    res: reqDeletePrivateEventModel
  ) {
    state.privateEvent = {
      eventid: -1,
      adminid: "",
      superadminid: "",
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

  [types.DELETE_PRIVATEEVENTS](state: PrivateEventStateType) {
    state.privateEvents = [];
    state.privateEvent = {
      eventid: -1,
      adminid: "",
      superadminid: "",
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
