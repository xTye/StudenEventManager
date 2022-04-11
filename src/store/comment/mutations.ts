import * as types from "./types";
import {
  resCreateCommentModel,
  resFindOneCommentModel,
  resFindAllCommentModel,
  reqUpdateCommentModel,
  reqDeleteCommentModel,
} from "@/models/commentModel";
import { CommentStateType } from "./state";

const mutations = {
  [types.LOADING_COMMENT](state: CommentStateType, toggle: boolean) {
    state.loading = toggle;
  },

  [types.CREATE_COMMENT](state: CommentStateType, res: resCreateCommentModel) {
    state.comment = res;
  },

  [types.GET_COMMENTS](state: CommentStateType, res: resFindAllCommentModel[]) {
    state.comments = res;
  },

  [types.GET_COMMENT](state: CommentStateType, res: resFindOneCommentModel) {
    state.comment = res;
  },

  [types.UPDATE_COMMENT](state: CommentStateType, res: reqUpdateCommentModel) {
    state.comment = res;
  },

  [types.DELETE_COMMENT](state: CommentStateType, res: reqDeleteCommentModel) {
    state.comment = {
      userid: "",
      eventid: -1,
      text: "",
      rating: -1,
      timestamp: "",
    };
  },

  [types.DELETE_COMMENTS](state: CommentStateType) {
    state.comments = [];
    state.comment = {
      userid: "",
      eventid: -1,
      text: "",
      rating: -1,
      timestamp: "",
    };
  },
};

export default mutations;
