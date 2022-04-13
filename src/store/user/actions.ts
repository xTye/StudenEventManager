import * as types from "./types";
import {
  getUserAxios,
  deleteUserAxios,
  getUsersAxios,
  deleteUsersAxios,
  registerUserAxios,
  loginUserAxios,
  putUserAxios,
  verifyUserAxios,
} from "@/services/userService";
import {
  reqLoginModel,
  reqRegisterModel,
  reqDeleteUserModel,
  reqFindAllUserModel,
  reqFindOneUserModel,
  reqUpdateUserModel,
  reqUpdateParamsUserModel,
  resVerifyModel,
} from "@/models/userModel";
import user from ".";

export function getUsersAction(
  { commit }: { commit: any },
  req: reqFindAllUserModel
) {
  commit(types.LOADING_USER, true);

  return getUsersAxios(req)
    .then(({ data }) => commit(types.GET_USERS, data))
    .catch((e: any) => commit(types.ERROR_USER, e))
    .finally(() => commit(types.LOADING_USER, false));
}

export function getUserAction(
  { commit }: { commit: any },
  req: reqFindOneUserModel
) {
  commit(types.LOADING_USER, true);

  return getUserAxios(req)
    .then(({ data }) => commit(types.GET_USERS, data))
    .catch((e: any) => commit(types.ERROR_USER, e))
    .finally(() => commit(types.LOADING_USER, false));
}

export function updateUserAction(
  { commit }: { commit: any },
  reqq: reqUpdateParamsUserModel
) {
  const userid = reqq.oldid;
  const req: reqUpdateUserModel = {
    userid: reqq.userid,
    password: reqq.password,
  };
  return putUserAxios(req, userid)
    .then(() => commit(types.UPDATE_USER))
    .catch((e: any) => commit(types.ERROR_USER, e))
    .finally(() => commit(types.LOADING_USER, false));
}

export function removeUserAction(
  { commit }: { commit: any },
  req: reqDeleteUserModel
) {
  commit(types.LOADING_USER, true);

  return deleteUserAxios(req)
    .then(({ data }) => commit(types.REMOVE_USER, data))
    .catch((e: any) => commit(types.ERROR_USER, e))
    .finally(() => commit(types.LOADING_USER, false));
}

export function removeUsersAction({ commit }: { commit: any }) {
  commit(types.LOADING_USER, true);

  return deleteUsersAxios()
    .then(({ data }) => commit(types.REMOVE_USERS, data))
    .catch((e: any) => commit(types.ERROR_USER, e))
    .finally(() => commit(types.LOADING_USER, false));
}
export function registerAction(
  { commit }: { commit: any },
  req: reqRegisterModel
) {
  commit(types.LOADING_USER, true);

  return registerUserAxios(req)
    .then(({ data }) => commit(types.REGISTER_USER, data))
    .catch((e: any) => commit(types.ERROR_USER, e))
    .finally(() => commit(types.LOADING_USER, false));
}

export function loginAction({ commit }: { commit: any }, req: reqLoginModel) {
  commit(types.LOADING_USER, true);

  return loginUserAxios(req)
    .then(({ data }) => commit(types.LOGIN_USER, data))
    .catch((e: any) => commit(types.ERROR_USER, e))
    .finally(() => commit(types.LOADING_USER, false));
}

export function errorSet({ commit }: { commit: any }, string: string) {
  return commit(types.ERROR_SET, string);
}

export function logoutAction({ commit }: { commit: any }) {
  commit(types.LOADING_USER, true);

  return commit(types.LOGOUT_USER).finally(() =>
    commit(types.LOADING_USER, false)
  );
}

export function verifyAction({ commit }: { commit: any }) {
  commit(types.LOADING_USER, true);

  return verifyUserAxios()
    .then(({ data }) => commit(types.VERIFY_USER, data))
    .catch((e: any) => commit(types.ERROR_USER, e))
    .finally(() => commit(types.LOADING_USER, false));
}
