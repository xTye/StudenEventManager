import * as types from "./types";
import {
  postRsoAxios,
  getRsosAxios,
  getRsoAxios,
  putRsoAxios,
  deleteRsoAxios,
  deleteRsosAxios,
} from "@/services/rsoService";
import {
  reqCreateRsoModel,
  reqDeleteRsoModel,
  reqFindAllRsoModel,
  reqFindOneRsoModel,
  reqUpdateRsoModel,
} from "@/models/rsoModel";

export function createRsoAction(
  { commit }: { commit: any },
  req: reqCreateRsoModel
) {
  commit(types.LOADING_RSO, true);

  return postRsoAxios(req)
    .then(async ({ data }) => await commit(types.CREATE_RSO, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_RSO, false));
}

export function getRsosAction(
  { commit }: { commit: any },
  req: reqFindAllRsoModel
) {
  commit(types.LOADING_RSO, true);

  return getRsosAxios(req)
    .then(({ data }) => commit(types.GET_RSOS, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_RSO, false));
}

export function getRsoAction(
  { commit }: { commit: any },
  req: reqFindOneRsoModel
) {
  commit(types.LOADING_RSO, true);

  return getRsoAxios(req)
    .then(({ data }) => commit(types.GET_RSO, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_RSO, false));
}

export function updateRsoAction(
  { commit }: { commit: any },
  req: reqUpdateRsoModel
) {
  commit(types.LOADING_RSO, true);

  return putRsoAxios(req)
    .then(({ data }) => commit(types.UPDATE_RSO, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_RSO, false));
}

export function deleteRsoAction(
  { commit }: { commit: any },
  req: reqDeleteRsoModel
) {
  commit(types.LOADING_RSO, true);

  return deleteRsoAxios(req)
    .then(({ data }) => commit(types.DELETE_RSO, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_RSO, false));
}

export function deleteRsosAction({ commit }: { commit: any }) {
  commit(types.LOADING_RSO, true);

  return deleteRsosAxios()
    .then(() => commit(types.DELETE_RSOS))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_RSO, false));
}
