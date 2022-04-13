import api, { endpoints } from "@/api/axios";
import {
  reqCreateRsoEventModel,
  reqDeleteRsoEventModel,
  reqFindAllRsoEventModel,
  reqFindOneRsoEventModel,
  reqUpdateRsoEventModel,
  resCreateRsoEventModel,
  resDeleteAllRsoEventModel,
  resDeleteRsoEventModel,
  resFindAllRsoEventModel,
  resFindOneRsoEventModel,
  resUpdateRsoEventModel,
} from "@/models/rsoEventModel";

export async function postRsoEventAxios(req: reqCreateRsoEventModel) {
  return await api.post<resCreateRsoEventModel>(endpoints.rsoEvents, req);
}

export async function getRsoEventsAxios(req: reqFindAllRsoEventModel) {
  const eventid = req ? req.eventid : "";
  return await api.get<resFindAllRsoEventModel[]>(
    `${endpoints.rsoEvents}/${eventid}`
  );
}

export async function getRsoEventAxios(req: reqFindOneRsoEventModel) {
  return await api.get<resFindOneRsoEventModel>(
    `${endpoints.rsoEvents}/${req.eventid}`
  );
}

export async function putRsoEventAxios(req: reqUpdateRsoEventModel) {
  return await api.put<resUpdateRsoEventModel>(
    `${endpoints.rsoEvents}/${req.eventid}`,
    req
  );
}

export async function deleteRsoEventAxios(req: reqDeleteRsoEventModel) {
  return await api.delete<resDeleteRsoEventModel>(
    `${endpoints.rsoEvents}/${req.eventid}`
  );
}

export async function deleteRsoEventsAxios() {
  return await api.delete<resDeleteAllRsoEventModel>(endpoints.rsoEvents);
}
