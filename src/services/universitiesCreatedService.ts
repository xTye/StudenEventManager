import api, { endpoints } from "@/api/axios";
import {
  reqCreateUniversitiesCreatedModel,
  reqDeleteUniversitiesCreatedModel,
  reqFindAllUniversitiesCreatedModel,
  reqFindOneUniversitiesCreatedModel,
  reqUpdateUniversitiesCreatedModel,
  resCreateUniversitiesCreatedModel,
  resDeleteAllUniversitiesCreatedModel,
  resDeleteUniversitiesCreatedModel,
  resFindAllUniversitiesCreatedModel,
  resFindOneUniversitiesCreatedModel,
  resUpdateUniversitiesCreatedModel,
} from "@/models/universitiesCreatedModel";

export async function postUniversitiesCreatedAxios(
  req: reqCreateUniversitiesCreatedModel
) {
  return await api.post<resCreateUniversitiesCreatedModel>(
    endpoints.universitiesCreated,
    req
  );
}

export async function getUniversitiesCreatedsAxios(
  req: reqFindAllUniversitiesCreatedModel
) {
  const name = req ? req.name : "";
  return await api.get<resFindAllUniversitiesCreatedModel[]>(
    `${endpoints.universitiesCreated}/${name}`
  );
}

export async function getUniversitiesCreatedAxios(
  req: reqFindOneUniversitiesCreatedModel
) {
  return await api.get<resFindOneUniversitiesCreatedModel>(
    `${endpoints.universitiesCreated}/${req.name}`
  );
}

export async function putUniversitiesCreatedAxios(
  req: reqUpdateUniversitiesCreatedModel
) {
  return await api.put<resUpdateUniversitiesCreatedModel>(
    `${endpoints.universitiesCreated}/${req.name}`,
    req
  );
}

export async function deleteUniversitiesCreatedAxios(
  req: reqDeleteUniversitiesCreatedModel
) {
  return await api.delete<resDeleteUniversitiesCreatedModel>(
    `${endpoints.universitiesCreated}/${req.name}`
  );
}

export async function deleteUniversitiesCreatedsAxios() {
  return await api.delete<resDeleteAllUniversitiesCreatedModel>(
    endpoints.universitiesCreated
  );
}
