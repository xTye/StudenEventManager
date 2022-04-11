import { api, endpoints } from "@/api/axios";
import {
  reqCreateLocationModel,
  reqDeleteLocationModel,
  reqFindAllLocationModel,
  reqFindOneLocationModel,
  reqUpdateLocationModel,
  resCreateLocationModel,
  resDeleteAllLocationModel,
  resDeleteLocationModel,
  resFindAllLocationModel,
  resFindOneLocationModel,
  resUpdateLocationModel,
} from "@/models/locationModel";

export async function postLocationAxios(req: reqCreateLocationModel) {
  return await api.post<resCreateLocationModel>(endpoints.locations, req);
}

export async function getLocationsAxios(req: reqFindAllLocationModel) {
  return await api.get<resFindAllLocationModel[]>(
    `${endpoints.locations}/${req.lname}`
  );
}

export async function getLocationAxios(req: reqFindOneLocationModel) {
  return await api.get<resFindOneLocationModel>(
    `${endpoints.locations}/${req.lname}`
  );
}

export async function putLocationAxios(req: reqUpdateLocationModel) {
  return await api.put<resUpdateLocationModel>(
    `${endpoints.locations}/${req.lname}`,
    req
  );
}

export async function deleteLocationAxios(req: reqDeleteLocationModel) {
  return await api.delete<resDeleteLocationModel>(
    `${endpoints.locations}/${req.lname}`
  );
}

export async function deleteLocationsAxios() {
  return await api.delete<resDeleteAllLocationModel>(endpoints.locations);
}
