import * as types from "./types";
import {
  getUserAxios,
  deleteUserAxios,
  getUsersAxios,
  postUserAxios,
  registerUserAxios,
  loginUserAxios,
  putUserAxios,
} from "@/services/userService";
import { reqLoginModel, reqRegisterModel, UserModel } from "@/models/userModel";

export function addUserAction(
  { commit }: { commit: any },
  createdUser: UserModel
) {
  commit(types.LOADING_USER, true);

  return postUserAxios(createdUser)
    .then(async ({ data }) => await commit(types.ADD_USER, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_USER, false));
}

export function getUsersAction({ commit }: { commit: any }) {
  commit(types.LOADING_USER, true);

  return getUsersAxios().then(({ data }) =>
    commit(types.GET_USERS, data)
      .catch((e: any) => console.log(e.message))
      .finally(() => commit(types.LOADING_USER, false))
  );
}

export function getUserAction({ commit }: { commit: any }, search: string) {
  commit(types.LOADING_USER, true);

  return getUserAxios(search).then(({ data }) =>
    commit(types.GET_USERS, data)
      .catch((e: any) => console.log(e.message))
      .finally(() => commit(types.LOADING_USER, false))
  );
}

export function removeUserAction({ commit }: { commit: any }, payload: string) {
  commit(types.LOADING_USER, true);

  return deleteUserAxios(payload)
    .then(() => commit(types.REMOVE_USER, payload))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_USER, false));
}

export function updateUserAction(
  { commit }: { commit: any },
  updatedHero: UserModel
) {
  commit(types.LOADING_USER, true);

  return putUserAxios(updatedHero)
    .then(() => commit(types.UPDATE_USER, updatedHero))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_USER, false));
}

export function registerAction(
  { commit }: { commit: any },
  req: reqRegisterModel
) {
  commit(types.LOADING_USER, true);

  return registerUserAxios(req).then(({ data }) =>
    commit(types.GET_USERS, data)
      .catch((e: any) => console.log(e.message))
      .finally(() => commit(types.LOADING_USER, false))
  );
}

export function loginAction({ commit }: { commit: any }, req: reqLoginModel) {
  commit(types.LOADING_USER, true);

  return loginUserAxios(req).then(({ data }) =>
    commit(types.LOGIN_USER, data)
      .catch((e: any) => console.log(e.message))
      .finally(() => commit(types.LOADING_USER, false))
  );
}
