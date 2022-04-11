import * as types from "./types";
import {
  resCreateEventsAtModel,
  resFindOneEventsAtModel,
  resFindAllEventsAtModel,
  reqUpdateEventsAtModel,
  reqDeleteEventsAtModel,
} from "@/models/eventsAtModel";
import { EventsAtStateType } from "./state";

const mutations = {
  [types.LOADING_EVENTSAT](state: EventsAtStateType, toggle: boolean) {
    state.loading = toggle;
  },

  [types.CREATE_EVENTSAT](
    state: EventsAtStateType,
    res: resCreateEventsAtModel
  ) {
    state.eventsAt = res;
  },

  [types.GET_EVENTSATS](
    state: EventsAtStateType,
    res: resFindAllEventsAtModel[]
  ) {
    state.eventsAts = res;
  },

  [types.GET_EVENTSAT](state: EventsAtStateType, res: resFindOneEventsAtModel) {
    state.eventsAt = res;
  },

  [types.UPDATE_EVENTSAT](
    state: EventsAtStateType,
    res: reqUpdateEventsAtModel
  ) {
    state.eventsAt = res;
  },

  [types.DELETE_EVENTSAT](
    state: EventsAtStateType,
    res: reqDeleteEventsAtModel
  ) {
    state.eventsAt = {
      eventname: "",
      time: "",
      date: new Date(),
      description: "",
      location: "",
      category: "",
      phonenumber: "",
      emailaddress: "",
    };
  },

  [types.DELETE_EVENTSATS](state: EventsAtStateType) {
    state.eventsAts = [];
    state.eventsAt = {
      eventname: "",
      time: "",
      date: new Date(),
      description: "",
      location: "",
      category: "",
      phonenumber: "",
      emailaddress: "",
    };
  },
};

export default mutations;
