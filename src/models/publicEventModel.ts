import { CommentModel } from "./commentModel";
import { EventsAtModel } from "./eventsAtModel";

export type PublicEventModel = {
  eventid: number;
  adminid: string;
  superadminid: string;
  EventsAt: EventsAtModel;
  Comments: CommentModel[];
};

export type reqCreatePublicEventModel = {
  eventid: number;
  adminid: string;
  superadminid: string;
  EventsAt: EventsAtModel;
};

export type resCreatePublicEventModel = {
  eventid: number;
  adminid: string;
  superadminid: string;
  EventsAt: EventsAtModel;
  Comments: CommentModel[];
};

export type reqFindAllPublicEventModel = {
  eventid: number;
};

export type resFindAllPublicEventModel = {
  eventid: number;
  adminid: string;
  superadminid: string;
  EventsAt: EventsAtModel;
  Comments: CommentModel[];
};

export type reqFindOnePublicEventModel = {
  eventid: number;
};

export type resFindOnePublicEventModel = {
  eventid: number;
  adminid: string;
  superadminid: string;
  EventsAt: EventsAtModel;
  Comments: CommentModel[];
};

export type reqUpdatePublicEventModel = {
  eventid: number;
  adminid: string;
  superadminid: string;
};

export type resUpdatePublicEventModel = {
  eventid: number;
  adminid: string;
  superadminid: string;
  EventsAt: EventsAtModel;
  Comments: CommentModel[];
};

export type reqDeletePublicEventModel = {
  eventid: number;
};

export type resDeletePublicEventModel = {
  message: string;
};

export type resDeleteAllPublicEventModel = {
  message: string;
};
