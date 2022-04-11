export type PrivateEventModel = {
  eventid: number;
  adminid: string;
  superadminid: string;
};

export type reqCreatePrivateEventModel = {
  eventid: number;
  adminid: string;
  superadminid: string;
};

export type resCreatePrivateEventModel = {
  eventid: number;
  adminid: string;
  superadminid: string;
};

export type reqFindAllPrivateEventModel = {
  eventid: number;
};

export type resFindAllPrivateEventModel = {
  eventid: number;
  adminid: string;
  superadminid: string;
};

export type reqFindOnePrivateEventModel = {
  eventid: number;
};

export type resFindOnePrivateEventModel = {
  eventid: number;
  adminid: string;
  superadminid: string;
};

export type reqUpdatePrivateEventModel = {
  eventid: number;
  adminid: string;
  superadminid: string;
};

export type resUpdatePrivateEventModel = {
  message: string;
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
