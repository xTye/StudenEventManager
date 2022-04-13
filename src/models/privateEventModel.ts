import { CommentModel } from "./commentModel";
import { EventsAtModel } from "./eventsAtModel";

export type PrivateEventModel = {
  eventid: number;
  adminid: string;
  superadminid: string;
  EventsAt: EventsAtModel;
  Comments: CommentModel[];
};

export type reqCreatePrivateEventModel = {
  eventid: number;
  adminid: string;
  superadminid: string;
  EventsAt: EventsAtModel;
};

export type resCreatePrivateEventModel = {
  eventid: number;
  adminid: string;
  superadminid: string;
  EventsAt: EventsAtModel;
  Comments: CommentModel[];
};

export type reqFindAllPrivateEventModel = {
  eventid: number;
};

export type resFindAllPrivateEventModel = {
  eventid: number;
  adminid: string;
  superadminid: string;
  EventsAt: EventsAtModel;
  Comments: CommentModel[];
};

export type reqFindOnePrivateEventModel = {
  eventid: number;
};

export type resFindOnePrivateEventModel = {
  eventid: number;
  adminid: string;
  superadminid: string;
  EventsAt: EventsAtModel;
  Comments: CommentModel[];
};

export type reqUpdatePrivateEventModel = {
  eventid: number;
  adminid: string;
  superadminid: string;
  EventsAt: EventsAtModel;
};

export type resUpdatePrivateEventModel = {
  eventid: number;
  adminid: string;
  superadminid: string;
  EventsAt: EventsAtModel;
  Comments: CommentModel[];
};

export type reqDeletePrivateEventModel = {
  eventid: number;
};

export type resDeletePrivateEventModel = {
  message: string;
};

export type resDeleteAllPrivateEventModel = {
  message: string;
};
