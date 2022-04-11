import * as types from "./types";
import {
  postRsoEventAxios,
  getRsoEventsAxios,
  getRsoEventAxios,
  putRsoEventAxios,
  deleteRsoEventAxios,
  deleteRsoEventsAxios,
} from "@/services/rsoEventService";
import {
  reqCreateRsoEventModel,
  reqDeleteRsoEventModel,
  reqFindAllRsoEventModel,
  reqFindOneRsoEventModel,
  reqUpdateRsoEventModel,
} from "@/models/rsoEventModel";

export function createRsoEventAction(
  { commit }: { commit: any },
  req: reqCreateRsoEventModel
) {
  commit(types.LOADING_RSOEVENT, true);

  return postRsoEventAxios(req)
    .then(async ({ data }) => await commit(types.CREATE_RSOEVENT, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_RSOEVENT, false));
}

export function getRsoEventsAction(
  { commit }: { commit: any },
  req: reqFindAllRsoEventModel
) {
  commit(types.LOADING_RSOEVENT, true);

  return getRsoEventsAxios(req).then(({ data }) =>
    commit(types.GET_RSOEVENTS, data)
      .catch((e: any) => console.log(e.message))
      .finally(() => commit(types.LOADING_RSOEVENT, false))
  );
}

export function getRsoEventAction(
  { commit }: { commit: any },
  req: reqFindOneRsoEventModel
) {
  commit(types.LOADING_RSOEVENT, true);

  return getRsoEventAxios(req).then(({ data }) =>
    commit(types.GET_RSOEVENT, data)
      .catch((e: any) => console.log(e.message))
      .finally(() => commit(types.LOADING_RSOEVENT, false))
  );
}

export function updateRsoEventAction(
  { commit }: { commit: any },
  req: reqUpdateRsoEventModel
) {
  commit(types.LOADING_RSOEVENT, true);

  return putRsoEventAxios(req)
    .then(({ data }) => commit(types.UPDATE_RSOEVENT, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_RSOEVENT, false));
}

export function deleteRsoEventAction(
  { commit }: { commit: any },
  req: reqDeleteRsoEventModel
) {
  commit(types.LOADING_RSOEVENT, true);

  return deleteRsoEventAxios(req)
    .then(({ data }) => commit(types.DELETE_RSOEVENT, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_RSOEVENT, false));
}

export function deleteRsoEventsAction({ commit }: { commit: any }) {
  commit(types.LOADING_RSOEVENT, true);

  return deleteRsoEventsAxios()
    .then(() => commit(types.DELETE_RSOEVENTS))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_RSOEVENT, false));
}
