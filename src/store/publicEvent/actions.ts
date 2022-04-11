import * as types from "./types";
import {
  postPublicEventAxios,
  getPublicEventsAxios,
  getPublicEventAxios,
  putPublicEventAxios,
  deletePublicEventAxios,
  deletePublicEventsAxios,
} from "@/services/publicEventService";
import {
  reqCreatePublicEventModel,
  reqDeletePublicEventModel,
  reqFindAllPublicEventModel,
  reqFindOnePublicEventModel,
  reqUpdatePublicEventModel,
} from "@/models/publicEventModel";

export interface Error {
  message: "";
}

export function createPublicEventAction(
  { commit }: { commit: any },
  req: reqCreatePublicEventModel
) {
  commit(types.LOADING_PUBLICEVENT, true);

  return postPublicEventAxios(req)
    .then(async ({ data }) => await commit(types.CREATE_PUBLICEVENT, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_PUBLICEVENT, false));
}

export function getPublicEventsAction(
  { commit }: { commit: any },
  req: reqFindAllPublicEventModel
) {
  commit(types.LOADING_PUBLICEVENT, true);

  return getPublicEventsAxios(req)
    .then(({ data }) => commit(types.GET_PUBLICEVENTS, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_PUBLICEVENT, false));
}

export function getPublicEventAction(
  { commit }: { commit: any },
  req: reqFindOnePublicEventModel
) {
  commit(types.LOADING_PUBLICEVENT, true);

  return getPublicEventAxios(req)
    .then(({ data }) => commit(types.GET_PUBLICEVENT, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_PUBLICEVENT, false));
}

export function updatePublicEventAction(
  { commit }: { commit: any },
  req: reqUpdatePublicEventModel
) {
  commit(types.LOADING_PUBLICEVENT, true);

  return putPublicEventAxios(req)
    .then(({ data }) => commit(types.UPDATE_PUBLICEVENT, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_PUBLICEVENT, false));
}

export function deletePublicEventAction(
  { commit }: { commit: any },
  req: reqDeletePublicEventModel
) {
  commit(types.LOADING_PUBLICEVENT, true);

  return deletePublicEventAxios(req)
    .then(({ data }) => commit(types.DELETE_PUBLICEVENT, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_PUBLICEVENT, false));
}

export function deletePublicEventsAction({ commit }: { commit: any }) {
  commit(types.LOADING_PUBLICEVENT, true);

  return deletePublicEventsAxios()
    .then(() => commit(types.DELETE_PUBLICEVENTS))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_PUBLICEVENT, false));
}
