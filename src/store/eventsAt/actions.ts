import * as types from "./types";
import {
  postEventsAtAxios,
  getEventsAtsAxios,
  getEventsAtAxios,
  putEventsAtAxios,
  deleteEventsAtAxios,
  deleteEventsAtsAxios,
} from "@/services/eventsAtService";
import {
  reqCreateEventsAtModel,
  reqDeleteEventsAtModel,
  reqFindAllEventsAtModel,
  reqFindOneEventsAtModel,
  reqUpdateEventsAtModel,
} from "@/models/eventsAtModel";

export function createEventsAtAction(
  { commit }: { commit: any },
  req: reqCreateEventsAtModel
) {
  commit(types.LOADING_EVENTSAT, true);

  return postEventsAtAxios(req)
    .then(async ({ data }) => await commit(types.CREATE_EVENTSAT, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_EVENTSAT, false));
}

export function getEventsAtsAction(
  { commit }: { commit: any },
  req: reqFindAllEventsAtModel
) {
  commit(types.LOADING_EVENTSAT, true);

  return getEventsAtsAxios(req)
    .then(({ data }) => commit(types.GET_EVENTSATS, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_EVENTSAT, false));
}

export function getEventsAtAction(
  { commit }: { commit: any },
  req: reqFindOneEventsAtModel
) {
  commit(types.LOADING_EVENTSAT, true);

  return getEventsAtAxios(req)
    .then(({ data }) => commit(types.GET_EVENTSAT, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_EVENTSAT, false));
}

export function updateEventsAtAction(
  { commit }: { commit: any },
  req: reqUpdateEventsAtModel
) {
  commit(types.LOADING_EVENTSAT, true);

  return putEventsAtAxios(req)
    .then(({ data }) => commit(types.UPDATE_EVENTSAT, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_EVENTSAT, false));
}

export function deleteEventsAtAction(
  { commit }: { commit: any },
  req: reqDeleteEventsAtModel
) {
  commit(types.LOADING_EVENTSAT, true);

  return deleteEventsAtAxios(req)
    .then(({ data }) => commit(types.DELETE_EVENTSAT, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_EVENTSAT, false));
}

export function deleteEventsAtsAction({ commit }: { commit: any }) {
  commit(types.LOADING_EVENTSAT, true);

  return deleteEventsAtsAxios()
    .then(() => commit(types.DELETE_EVENTSATS))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_EVENTSAT, false));
}
