import * as types from "./types";
import {
  postJoinAxios,
  getJoinsAxios,
  getJoinAxios,
  putJoinAxios,
  deleteJoinAxios,
  deleteJoinsAxios,
} from "@/services/joinService";
import {
  reqCreateJoinModel,
  reqDeleteJoinModel,
  reqFindAllJoinModel,
  reqFindOneJoinModel,
  reqUpdateJoinModel,
} from "@/models/joinModel";

export function createJoinAction(
  { commit }: { commit: any },
  req: reqCreateJoinModel
) {
  commit(types.LOADING_JOIN, true);

  return postJoinAxios(req)
    .then(async ({ data }) => await commit(types.CREATE_JOIN, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_JOIN, false));
}

export function getJoinsAction(
  { commit }: { commit: any },
  req: reqFindAllJoinModel
) {
  commit(types.LOADING_JOIN, true);

  return getJoinsAxios(req)
    .then(({ data }) => commit(types.GET_JOINS, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_JOIN, false));
}

export function getJoinAction(
  { commit }: { commit: any },
  req: reqFindOneJoinModel
) {
  commit(types.LOADING_JOIN, true);

  return getJoinAxios(req)
    .then(({ data }) => commit(types.GET_JOIN, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_JOIN, false));
}

export function updateJoinAction(
  { commit }: { commit: any },
  req: reqUpdateJoinModel
) {
  commit(types.LOADING_JOIN, true);

  return putJoinAxios(req)
    .then(({ data }) => commit(types.UPDATE_JOIN, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_JOIN, false));
}

export function deleteJoinAction(
  { commit }: { commit: any },
  req: reqDeleteJoinModel
) {
  commit(types.LOADING_JOIN, true);

  return deleteJoinAxios(req)
    .then(({ data }) => commit(types.DELETE_JOIN, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_JOIN, false));
}

export function deleteJoinsAction({ commit }: { commit: any }) {
  commit(types.LOADING_JOIN, true);

  return deleteJoinsAxios()
    .then(() => commit(types.DELETE_JOINS))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_JOIN, false));
}
