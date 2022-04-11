import { api, endpoints } from "@/api/axios";
import {
  reqCreateRsoModel,
  reqDeleteRsoModel,
  reqFindAllRsoModel,
  reqFindOneRsoModel,
  reqUpdateRsoModel,
  resCreateRsoModel,
  resDeleteAllRsoModel,
  resDeleteRsoModel,
  resFindAllRsoModel,
  resFindOneRsoModel,
  resUpdateRsoModel,
} from "@/models/rsoModel";

export async function postRsoAxios(req: reqCreateRsoModel) {
  return await api.post<resCreateRsoModel>(endpoints.rsos, req);
}

export async function getRsosAxios(req: reqFindAllRsoModel) {
  return await api.get<resFindAllRsoModel[]>(`${endpoints.rsos}/${req.rsoid}`);
}

export async function getRsoAxios(req: reqFindOneRsoModel) {
  return await api.get<resFindOneRsoModel>(`${endpoints.rsos}/${req.rsoid}`);
}

export async function putRsoAxios(req: reqUpdateRsoModel) {
  return await api.put<resUpdateRsoModel>(
    `${endpoints.rsos}/${req.rsoid}`,
    req
  );
}

export async function deleteRsoAxios(req: reqDeleteRsoModel) {
  return await api.delete<resDeleteRsoModel>(`${endpoints.rsos}/${req.rsoid}`);
}

export async function deleteRsosAxios() {
  return await api.delete<resDeleteAllRsoModel>(endpoints.rsos);
}
