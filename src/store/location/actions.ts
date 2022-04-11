import * as types from "./types";
import {
  postLocationAxios,
  getLocationsAxios,
  getLocationAxios,
  putLocationAxios,
  deleteLocationAxios,
  deleteLocationsAxios,
} from "@/services/locationService";
import {
  reqCreateLocationModel,
  reqDeleteLocationModel,
  reqFindAllLocationModel,
  reqFindOneLocationModel,
  reqUpdateLocationModel,
} from "@/models/locationModel";

export function createLocationAction(
  { commit }: { commit: any },
  req: reqCreateLocationModel
) {
  commit(types.LOADING_LOCATION, true);

  return postLocationAxios(req)
    .then(async ({ data }) => await commit(types.CREATE_LOCATION, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_LOCATION, false));
}

export function getLocationsAction(
  { commit }: { commit: any },
  req: reqFindAllLocationModel
) {
  commit(types.LOADING_LOCATION, true);

  return getLocationsAxios(req).then(({ data }) =>
    commit(types.GET_LOCATIONS, data)
      .catch((e: any) => console.log(e.message))
      .finally(() => commit(types.LOADING_LOCATION, false))
  );
}

export function getLocationAction(
  { commit }: { commit: any },
  req: reqFindOneLocationModel
) {
  commit(types.LOADING_LOCATION, true);

  return getLocationAxios(req).then(({ data }) =>
    commit(types.GET_LOCATION, data)
      .catch((e: any) => console.log(e.message))
      .finally(() => commit(types.LOADING_LOCATION, false))
  );
}

export function updateLocationAction(
  { commit }: { commit: any },
  req: reqUpdateLocationModel
) {
  commit(types.LOADING_LOCATION, true);

  return putLocationAxios(req)
    .then(({ data }) => commit(types.UPDATE_LOCATION, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_LOCATION, false));
}

export function deleteLocationAction(
  { commit }: { commit: any },
  req: reqDeleteLocationModel
) {
  commit(types.LOADING_LOCATION, true);

  return deleteLocationAxios(req)
    .then(({ data }) => commit(types.DELETE_LOCATION, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_LOCATION, false));
}

export function deleteLocationsAction({ commit }: { commit: any }) {
  commit(types.LOADING_LOCATION, true);

  return deleteLocationsAxios()
    .then(() => commit(types.DELETE_LOCATIONS))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_LOCATION, false));
}
