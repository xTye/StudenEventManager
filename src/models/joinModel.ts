export type JoinModel = {
  userid: string;
  rsoid: string;
};

export type reqCreateJoinModel = {
  userid: string;
  rsoid: string;
};

export type resCreateJoinModel = {
  userid: string;
  eventid: number;
  rsoid: string;
};

export type reqFindAllJoinModel = {
  userid: string;
};

export type resFindAllJoinModel = {
  userid: string;
  eventid: number;
  rsoid: string;
};

export type reqFindOneJoinModel = {
  userid: string;
};

export type resFindOneJoinModel = {
  userid: string;
  eventid: number;
  rsoid: string;
};

export type reqUpdateJoinModel = {
  userid: string;
  eventid: number;
  rsoid: string;
};

export type resUpdateJoinModel = {
  message: string;
};

export type reqDeleteJoinModel = {
  userid: string;
};

export type resDeleteJoinModel = {
  message: string;
};

export type resDeleteAllJoinModel = {
  message: string;
};
