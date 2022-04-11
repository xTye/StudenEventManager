import * as types from "./types";
import {
  postCommentAxios,
  getCommentsAxios,
  getCommentAxios,
  putCommentAxios,
  deleteCommentAxios,
  deleteCommentsAxios,
} from "@/services/commentService";
import {
  reqCreateCommentModel,
  reqDeleteCommentModel,
  reqFindAllCommentModel,
  reqFindOneCommentModel,
  reqUpdateCommentModel,
} from "@/models/commentModel";

export function createCommentAction(
  { commit }: { commit: any },
  req: reqCreateCommentModel
) {
  commit(types.LOADING_COMMENT, true);

  return postCommentAxios(req)
    .then(async ({ data }) => await commit(types.CREATE_COMMENT, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_COMMENT, false));
}

export function getCommentsAction(
  { commit }: { commit: any },
  req: reqFindAllCommentModel
) {
  commit(types.LOADING_COMMENT, true);

  return getCommentsAxios(req)
    .then(({ data }) => commit(types.GET_COMMENTS, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_COMMENT, false));
}

export function getCommentAction(
  { commit }: { commit: any },
  req: reqFindOneCommentModel
) {
  commit(types.LOADING_COMMENT, true);

  return getCommentAxios(req)
    .then(({ data }) => commit(types.GET_COMMENT, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_COMMENT, false));
}

export function updateCommentAction(
  { commit }: { commit: any },
  req: reqUpdateCommentModel
) {
  commit(types.LOADING_COMMENT, true);

  return putCommentAxios(req)
    .then(({ data }) => commit(types.UPDATE_COMMENT, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_COMMENT, false));
}

export function deleteCommentAction(
  { commit }: { commit: any },
  req: reqDeleteCommentModel
) {
  commit(types.LOADING_COMMENT, true);

  return deleteCommentAxios(req)
    .then(({ data }) => commit(types.DELETE_COMMENT, data))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_COMMENT, false));
}

export function deleteCommentsAction({ commit }: { commit: any }) {
  commit(types.LOADING_COMMENT, true);

  return deleteCommentsAxios()
    .then(() => commit(types.DELETE_COMMENTS))
    .catch((e: any) => console.log(e.message))
    .finally(() => commit(types.LOADING_COMMENT, false));
}
