import { CommentModel } from "./commentModel";
import { EventsAtModel } from "./eventsAtModel";

export type RsoEventModel = {
  eventid: number;
  rsoid: string;
  EventsAt: EventsAtModel;
  Comments: CommentModel[];
};

export type reqCreateRsoEventModel = {
  eventid: number;
  rsoid: string;
};

export type resCreateRsoEventModel = {
  eventid: number;
  rsoid: string;
  EventsAt: EventsAtModel;
  Comments: CommentModel[];
};

export type reqFindAllRsoEventModel = {
  eventid: number;
};

export type resFindAllRsoEventModel = {
  eventid: number;
  rsoid: string;
  EventsAt: EventsAtModel;
  Comments: CommentModel[];
};

export type reqFindOneRsoEventModel = {
  eventid: number;
};

export type resFindOneRsoEventModel = {
  eventid: number;
  rsoid: string;
  EventsAt: EventsAtModel;
  Comments: CommentModel[];
};

export type reqUpdateRsoEventModel = {
  eventid: number;
  rsoid: string;
};

export type resUpdateRsoEventModel = {
  eventid: number;
  rsoid: string;
  EventsAt: EventsAtModel;
  Comments: CommentModel[];
};

export type reqDeleteRsoEventModel = {
  eventid: number;
};

export type resDeleteRsoEventModel = {
  message: string;
};

export type resDeleteAllRsoEventModel = {
  message: string;
};
