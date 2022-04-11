import { api, endpoints } from "@/api/axios";
import {
  reqRegisterModel,
  resLoginModel,
  reqLoginModel,
  resRegisterModel,
  UserModel,
} from "@/models/userModel";

export async function postUserAxios(user: UserModel) {
  return await api.post<UserModel>(endpoints.users, user);
}

export async function getUsersAxios() {
  return await api.get<UserModel[]>(endpoints.users);
}

export async function putUserAxios(user: UserModel) {
  return await api.put<void>(`${endpoints.users}/${user.userid}`, user);
}

export async function getUserAxios(search: string) {
  return await api.get<UserModel>(`${endpoints.users}/${search}`);
}

export async function deleteUserAxios(userid: string) {
  return await api.delete<void>(`${endpoints.users}/${userid}`);
}

export async function deleteUsersAxios() {
  return await api.delete<void>(endpoints.users);
}

export async function registerUserAxios(req: reqRegisterModel) {
  return await api.post<resRegisterModel>(`${endpoints.users}/signup`, req);
}

export async function loginUserAxios(req: reqLoginModel) {
  return await api.post<resLoginModel>(`${endpoints.users}/signin`, req);
}
