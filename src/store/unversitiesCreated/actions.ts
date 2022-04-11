import * as types from "./types";
import {
  postUniversitiesCreatedAxios,
  getUniversitiesCreatedsAxios,
  getUniversitiesCreatedAxios,
  putUniversitiesCreatedAxios,
  deleteUniversitiesCreatedAxios,
  deleteUniversitiesCreatedsAxios,
} from "@/services/universitiesCreatedService";
import {
  reqCreateUniversitiesCreatedModel,
  reqDeleteUniversitiesCreatedModel,
  reqFindAllUniversitiesCreatedModel,
  reqFindOneUniversitiesCreatedModel,
  reqUpdateUniversitiesCreatedModel,
} from "@/models/universitiesCreatedModel";

export function createUniversitiesCreatedAction(
  { commit }: { commit: any },
  req: reqCreateUniversitiesCreatedModel
) {
  commit(types.LOADING_UNIVERSITIESCREATED, true);

  return postUniversitiesCreatedAxios(req)
    .then(
      async ({ data }) => await commit(types.CREATE_UNIVERSITIESCREATED, data)
    )
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_UNIVERSITIESCREATED, false));
}

export function getUniversitiesCreatedsAction(
  { commit }: { commit: any },
  req: reqFindAllUniversitiesCreatedModel
) {
  commit(types.LOADING_UNIVERSITIESCREATED, true);

  return getUniversitiesCreatedsAxios(req).then(({ data }) =>
    commit(types.GET_UNIVERSITIESCREATEDS, data)
      .catch((e: any) => console.log(e.message))
      .finally(() => commit(types.LOADING_UNIVERSITIESCREATED, false))
  );
}

export function getUniversitiesCreatedAction(
  { commit }: { commit: any },
  req: reqFindOneUniversitiesCreatedModel
) {
  commit(types.LOADING_UNIVERSITIESCREATED, true);

  return getUniversitiesCreatedAxios(req).then(({ data }) =>
    commit(types.GET_UNIVERSITIESCREATED, data)
      .catch((e: any) => console.log(e.message))
      .finally(() => commit(types.LOADING_UNIVERSITIESCREATED, false))
  );
}

export function updateUniversitiesCreatedAction(
  { commit }: { commit: any },
  req: reqUpdateUniversitiesCreatedModel
) {
  commit(types.LOADING_UNIVERSITIESCREATED, true);

  return putUniversitiesCreatedAxios(req)
    .then(({ data }) => commit(types.UPDATE_UNIVERSITIESCREATED, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_UNIVERSITIESCREATED, false));
}

export function deleteUniversitiesCreatedAction(
  { commit }: { commit: any },
  req: reqDeleteUniversitiesCreatedModel
) {
  commit(types.LOADING_UNIVERSITIESCREATED, true);

  return deleteUniversitiesCreatedAxios(req)
    .then(({ data }) => commit(types.DELETE_UNIVERSITIESCREATED, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_UNIVERSITIESCREATED, false));
}

export function deleteUniversitiesCreatedsAction({ commit }: { commit: any }) {
  commit(types.LOADING_UNIVERSITIESCREATED, true);

  return deleteUniversitiesCreatedsAxios()
    .then(() => commit(types.DELETE_UNIVERSITIESCREATEDS))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_UNIVERSITIESCREATED, false));
}
