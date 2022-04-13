import * as types from "./types";
import {
  resCreatePublicEventModel,
  resFindOnePublicEventModel,
  resFindAllPublicEventModel,
  reqUpdatePublicEventModel,
  reqDeletePublicEventModel,
  resUpdatePublicEventModel,
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
    res: resUpdatePublicEventModel
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

  [types.DELETE_PUBLICEVENTS](state: PublicEventStateType) {
    state.publicEvents = [];
    state.publicEvent = {
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
