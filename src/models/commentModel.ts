export type CommentModel = {
  userid: string;
  eventid: number;
  text: string;
  timestamp: string;
  rating: number;
};

export type reqCreateCommentModel = {
  userid: string;
  eventid: number;
  text: string;
  timestamp: string;
  rating: number;
};
export type resCreateCommentModel = {
  userid: string;
  eventid: number;
  text: string;
  timestamp: string;
  rating: number;
};

export type reqFindAllCommentModel = {
  eventid: number;
};

export type resFindAllCommentModel = {
  userid: string;
  eventid: number;
  text: string;
  timestamp: string;
  rating: number;
};

export type reqFindOneCommentModel = {
  eventid: number;
};

export type resFindOneCommentModel = {
  userid: string;
  eventid: number;
  text: string;
  timestamp: string;
  rating: number;
};

export type reqUpdateCommentModel = {
  userid: string;
  eventid: number;
  text: string;
  timestamp: string;
  rating: number;
};

export type resUpdateCommentModel = {
  message: string;
};

export type reqDeleteCommentModel = {
  eventid: number;
};

export type resDeleteCommentModel = {
  message: string;
};

export type resDeleteAllCommentModel = {
  message: string;
};
