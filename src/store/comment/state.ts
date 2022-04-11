import { CommentModel } from "@/models/commentModel";

export type CommentStateType = {
  comments: CommentModel[];
  comment: CommentModel;
  loading: boolean;
};

const state: CommentStateType = {
  comments: [],
  comment: {
    userid: "",
    eventid: -1,
    text: "",
    rating: -1,
    timestamp: "",
  },
  loading: false,
};

export default state;
