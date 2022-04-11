import * as types from "./types";
import {
  postPrivateEventAxios,
  getPrivateEventsAxios,
  getPrivateEventAxios,
  putPrivateEventAxios,
  deletePrivateEventAxios,
  deletePrivateEventsAxios,
} from "@/services/privateEventService";
import {
  reqCreatePrivateEventModel,
  reqDeletePrivateEventModel,
  reqFindAllPrivateEventModel,
  reqFindOnePrivateEventModel,
  reqUpdatePrivateEventModel,
} from "@/models/privateEventModel";

export function createPrivateEventAction(
  { commit }: { commit: any },
  req: reqCreatePrivateEventModel
) {
  commit(types.LOADING_PRIVATEEVENT, true);

  return postPrivateEventAxios(req)
    .then(async ({ data }) => await commit(types.CREATE_PRIVATEEVENT, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_PRIVATEEVENT, false));
}

export function getPrivateEventsAction(
  { commit }: { commit: any },
  req: reqFindAllPrivateEventModel
) {
  commit(types.LOADING_PRIVATEEVENT, true);

  return getPrivateEventsAxios(req)
    .then(({ data }) => commit(types.GET_PRIVATEEVENTS, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_PRIVATEEVENT, false));
}

export function getPrivateEventAction(
  { commit }: { commit: any },
  req: reqFindOnePrivateEventModel
) {
  commit(types.LOADING_PRIVATEEVENT, true);

  return getPrivateEventAxios(req)
    .then(({ data }) => commit(types.GET_PRIVATEEVENT, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_PRIVATEEVENT, false));
}

export function updatePrivateEventAction(
  { commit }: { commit: any },
  req: reqUpdatePrivateEventModel
) {
  commit(types.LOADING_PRIVATEEVENT, true);

  return putPrivateEventAxios(req)
    .then(({ data }) => commit(types.UPDATE_PRIVATEEVENT, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_PRIVATEEVENT, false));
}

export function deletePrivateEventAction(
  { commit }: { commit: any },
  req: reqDeletePrivateEventModel
) {
  commit(types.LOADING_PRIVATEEVENT, true);

  return deletePrivateEventAxios(req)
    .then(({ data }) => commit(types.DELETE_PRIVATEEVENT, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_PRIVATEEVENT, false));
}

export function deletePrivateEventsAction({ commit }: { commit: any }) {
  commit(types.LOADING_PRIVATEEVENT, true);

  return deletePrivateEventsAxios()
    .then(() => commit(types.DELETE_PRIVATEEVENTS))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_PRIVATEEVENT, false));
}
