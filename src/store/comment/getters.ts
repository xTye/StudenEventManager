import { CommentStateType } from "./state";
import { CommentModel } from "@/models/commentModel";

const getters = {
  comments: (state: CommentStateType) => {
    return state.comments;
  },
  comment: (state: CommentStateType) => {
    return state.comment;
  },
  loading: (state: CommentStateType) => {
    return state.loading;
  },
};

export default getters;
