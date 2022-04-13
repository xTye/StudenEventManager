import api, { endpoints } from "@/api/axios";
import {
  reqCreateCommentModel,
  reqDeleteCommentModel,
  reqFindAllCommentModel,
  reqFindOneCommentModel,
  reqUpdateCommentModel,
  resCreateCommentModel,
  resDeleteAllCommentModel,
  resDeleteCommentModel,
  resFindAllCommentModel,
  resFindOneCommentModel,
  resUpdateCommentModel,
} from "@/models/commentModel";

export async function postCommentAxios(req: reqCreateCommentModel) {
  return await api.post<resCreateCommentModel>(endpoints.comments, req);
}

export async function getCommentsAxios(req: reqFindAllCommentModel) {
  const eventid = req ? req.eventid : "";
  return await api.get<resFindAllCommentModel[]>(
    `${endpoints.comments}/${eventid}`
  );
}

export async function getCommentAxios(req: reqFindOneCommentModel) {
  return await api.get<resFindOneCommentModel>(
    `${endpoints.comments}/${req.eventid}`
  );
}

export async function putCommentAxios(req: reqUpdateCommentModel) {
  return await api.put<resUpdateCommentModel>(
    `${endpoints.comments}/${req.eventid}`,
    req
  );
}

export async function deleteCommentAxios(req: reqDeleteCommentModel) {
  return await api.delete<resDeleteCommentModel>(
    `${endpoints.comments}/${req.eventid}`
  );
}

export async function deleteCommentsAxios() {
  return await api.delete<resDeleteAllCommentModel>(endpoints.comments);
}
