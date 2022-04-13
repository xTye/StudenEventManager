import api, { endpoints } from "@/api/axios";
import {
  reqCreatePrivateEventModel,
  reqDeletePrivateEventModel,
  reqFindAllPrivateEventModel,
  reqFindOnePrivateEventModel,
  reqUpdatePrivateEventModel,
  resCreatePrivateEventModel,
  resDeleteAllPrivateEventModel,
  resDeletePrivateEventModel,
  resFindAllPrivateEventModel,
  resFindOnePrivateEventModel,
  resUpdatePrivateEventModel,
} from "@/models/privateEventModel";

export async function postPrivateEventAxios(req: reqCreatePrivateEventModel) {
  return await api.post<resCreatePrivateEventModel>(
    endpoints.privateEvents,
    req
  );
}

export async function getPrivateEventsAxios(req: reqFindAllPrivateEventModel) {
  const eventid = req ? req.eventid : "";
  return await api.get<resFindAllPrivateEventModel[]>(
    `${endpoints.privateEvents}/${eventid}`
  );
}

export async function getPrivateEventAxios(req: reqFindOnePrivateEventModel) {
  return await api.get<resFindOnePrivateEventModel>(
    `${endpoints.privateEvents}/${req.eventid}`
  );
}

export async function putPrivateEventAxios(req: reqUpdatePrivateEventModel) {
  return await api.put<resUpdatePrivateEventModel>(
    `${endpoints.privateEvents}/${req.eventid}`,
    req
  );
}

export async function deletePrivateEventAxios(req: reqDeletePrivateEventModel) {
  return await api.delete<resDeletePrivateEventModel>(
    `${endpoints.privateEvents}/${req.eventid}`
  );
}

export async function deletePrivateEventsAxios() {
  return await api.delete<resDeleteAllPrivateEventModel>(
    endpoints.privateEvents
  );
}
