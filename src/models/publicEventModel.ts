export type PublicEventModel = {
  eventid: number;
  adminid: string;
  superadminid: string;
};

export type reqCreatePublicEventModel = {
  eventid: number;
  adminid: string;
  superadminid: string;
};

export type resCreatePublicEventModel = {
  eventid: number;
  adminid: string;
  superadminid: string;
};

export type reqFindAllPublicEventModel = {
  eventid: number;
};

export type resFindAllPublicEventModel = {
  eventid: number;
  adminid: string;
  superadminid: string;
};

export type reqFindOnePublicEventModel = {
  eventid: number;
};

export type resFindOnePublicEventModel = {
  eventid: number;
  adminid: string;
  superadminid: string;
};

export type reqUpdatePublicEventModel = {
  eventid: number;
  adminid: string;
  superadminid: string;
};

export type resUpdatePublicEventModel = {
  message: string;
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
