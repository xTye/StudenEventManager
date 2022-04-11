import { api, endpoints } from "@/api/axios";
import {
  reqCreateEventsAtModel,
  reqDeleteEventsAtModel,
  reqFindAllEventsAtModel,
  reqFindOneEventsAtModel,
  reqUpdateEventsAtModel,
  resCreateEventsAtModel,
  resDeleteAllEventsAtModel,
  resDeleteEventsAtModel,
  resFindAllEventsAtModel,
  resFindOneEventsAtModel,
  resUpdateEventsAtModel,
} from "@/models/eventsAtModel";

export async function postEventsAtAxios(req: reqCreateEventsAtModel) {
  return await api.post<resCreateEventsAtModel>(endpoints.eventsAt, req);
}

export async function getEventsAtsAxios(req: reqFindAllEventsAtModel) {
  return await api.get<resFindAllEventsAtModel[]>(
    `${endpoints.eventsAt}/${req.eventid}`
  );
}

export async function getEventsAtAxios(req: reqFindOneEventsAtModel) {
  return await api.get<resFindOneEventsAtModel>(
    `${endpoints.comments}/${req.eventid}`
  );
}

export async function putEventsAtAxios(req: reqUpdateEventsAtModel) {
  return await api.put<resUpdateEventsAtModel>(
    `${endpoints.comments}/${req.eventid}`,
    req
  );
}

export async function deleteEventsAtAxios(req: reqDeleteEventsAtModel) {
  return await api.delete<resDeleteEventsAtModel>(
    `${endpoints.comments}/${req.eventid}`
  );
}

export async function deleteEventsAtsAxios() {
  return await api.delete<resDeleteAllEventsAtModel>(endpoints.comments);
}
