import api, { endpoints } from "@/api/axios";
import {
  reqCreateJoinModel,
  reqDeleteJoinModel,
  reqFindAllJoinModel,
  reqFindOneJoinModel,
  reqUpdateJoinModel,
  resCreateJoinModel,
  resDeleteAllJoinModel,
  resDeleteJoinModel,
  resFindAllJoinModel,
  resFindOneJoinModel,
  resUpdateJoinModel,
} from "@/models/joinModel";

export async function postJoinAxios(req: reqCreateJoinModel) {
  return await api.post<resCreateJoinModel>(endpoints.joins, req);
}

export async function getJoinsAxios(req: reqFindAllJoinModel) {
  const userid = req ? req.userid : "";
  return await api.get<resFindAllJoinModel[]>(`${endpoints.joins}/${userid}`);
}

export async function getJoinAxios(req: reqFindOneJoinModel) {
  return await api.get<resFindOneJoinModel>(`${endpoints.joins}/${req.userid}`);
}

export async function putJoinAxios(req: reqUpdateJoinModel) {
  return await api.put<resUpdateJoinModel>(
    `${endpoints.joins}/${req.userid}`,
    req
  );
}

export async function deleteJoinAxios(req: reqDeleteJoinModel) {
  return await api.delete<resDeleteJoinModel>(
    `${endpoints.joins}/${req.userid}`
  );
}

export async function deleteJoinsAxios() {
  return await api.delete<resDeleteAllJoinModel>(endpoints.joins);
}
