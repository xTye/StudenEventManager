import api, { endpoints } from "@/api/axios";
import {
  reqRegisterModel,
  resLoginModel,
  reqLoginModel,
  resRegisterModel,
  reqDeleteUserModel,
  reqFindAllUserModel,
  reqFindOneUserModel,
  reqUpdateUserModel,
  resDeleteAllUserModel,
  resDeleteUserModel,
  resFindAllUserModel,
  resFindOneUserModel,
  resUpdateUserModel,
  resVerifyModel,
} from "@/models/userModel";

export async function getUsersAxios(req: reqFindAllUserModel) {
  const userid = req ? req.userid : "";
  return await api.get<resFindAllUserModel[]>(`${endpoints.users}/${userid}`);
}

export async function getUserAxios(req: reqFindOneUserModel) {
  return await api.get<resFindOneUserModel>(`${endpoints.users}/${req.userid}`);
}

export async function putUserAxios(req: reqUpdateUserModel, userid: string) {
  return await api.put<void>(`${endpoints.users}/${userid}`, req);
}

export async function deleteUserAxios(req: reqDeleteUserModel) {
  return await api.delete<resDeleteUserModel>(
    `${endpoints.users}/${req.userid}`
  );
}

export async function deleteUsersAxios() {
  return await api.delete<resDeleteAllUserModel>(endpoints.users);
}

export async function registerUserAxios(req: reqRegisterModel) {
  return await api.post<resRegisterModel>(`${endpoints.users}/signup`, req);
}

export async function loginUserAxios(req: reqLoginModel) {
  return await api.post<resLoginModel>(`${endpoints.users}/signin`, req);
}

export async function verifyUserAxios() {
  return await api.get<resVerifyModel>(`${endpoints.users}/verify`);
}
