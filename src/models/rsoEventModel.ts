export type RsoEventModel = {
  eventid: number;
  rsoid: string;
};

export type reqCreateRsoEventModel = {
  eventid: number;
  rsoid: string;
};

export type resCreateRsoEventModel = {
  eventid: number;
  rsoid: string;
};

export type reqFindAllRsoEventModel = {
  eventid: number;
};

export type resFindAllRsoEventModel = {
  eventid: number;
  rsoid: string;
};

export type reqFindOneRsoEventModel = {
  eventid: number;
};

export type resFindOneRsoEventModel = {
  eventid: number;
  rsoid: string;
};

export type reqUpdateRsoEventModel = {
  eventid: number;
  rsoid: string;
};

export type resUpdateRsoEventModel = {
  message: string;
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
