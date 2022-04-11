export type RsoModel = {
  rsoid: string;
  adminid: string;
};

export type reqCreateRsoModel = {
  rsoid: string;
  adminid: string;
};

export type resCreateRsoModel = {
  rsoid: string;
  adminid: string;
};

export type reqFindAllRsoModel = {
  rsoid: string;
};

export type resFindAllRsoModel = {
  rsoid: string;
  adminid: string;
};

export type reqFindOneRsoModel = {
  rsoid: string;
};

export type resFindOneRsoModel = {
  rsoid: string;
  adminid: string;
};

export type reqUpdateRsoModel = {
  rsoid: string;
  adminid: string;
};

export type resUpdateRsoModel = {
  message: string;
};

export type reqDeleteRsoModel = {
  rsoid: string;
};

export type resDeleteRsoModel = {
  message: string;
};

export type resDeleteAllRsoModel = {
  message: string;
};
