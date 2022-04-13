import api, { endpoints } from "@/api/axios";
import {
  reqCreatePublicEventModel,
  reqDeletePublicEventModel,
  reqFindAllPublicEventModel,
  reqFindOnePublicEventModel,
  reqUpdatePublicEventModel,
  resCreatePublicEventModel,
  resDeleteAllPublicEventModel,
  resDeletePublicEventModel,
  resFindAllPublicEventModel,
  resFindOnePublicEventModel,
  resUpdatePublicEventModel,
} from "@/models/publicEventModel";

export async function postPublicEventAxios(req: reqCreatePublicEventModel) {
  return await api.post<resCreatePublicEventModel>(endpoints.publicEvents, req);
}

export async function getPublicEventsAxios(req: reqFindAllPublicEventModel) {
  const eventid = req ? req.eventid : "";
  return await api.get<resFindAllPublicEventModel[]>(
    `${endpoints.publicEvents}/${eventid}`
  );
}

export async function getPublicEventAxios(req: reqFindOnePublicEventModel) {
  return await api.get<resFindOnePublicEventModel>(
    `${endpoints.publicEvents}/${req.eventid}`
  );
}

export async function putPublicEventAxios(req: reqUpdatePublicEventModel) {
  return await api.put<resUpdatePublicEventModel>(
    `${endpoints.publicEvents}/${req.eventid}`,
    req
  );
}

export async function deletePublicEventAxios(req: reqDeletePublicEventModel) {
  return await api.delete<resDeletePublicEventModel>(
    `${endpoints.publicEvents}/${req.eventid}`
  );
}

export async function deletePublicEventsAxios() {
  return await api.delete<resDeleteAllPublicEventModel>(endpoints.publicEvents);
}
