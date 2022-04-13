export type UserModel = {
  userid: string;
};

export type reqFindAllUserModel = {
  userid: string;
};
export type resFindAllUserModel = {
  userid: string;
};

export type reqFindOneUserModel = {
  userid: string;
};

export type resFindOneUserModel = {
  userid: string;
};

export type reqUpdateUserModel = {
  userid: string;
  password: string;
};
export type reqUpdateParamsUserModel = {
  oldid: string;
  userid: string;
  password: string;
};
export type resUpdateUserModel = {
  userid: string;
};

export type reqDeleteUserModel = {
  userid: string;
};
export type resDeleteUserModel = {
  message: string;
};

export type resDeleteAllUserModel = {
  message: string;
};

export type reqRegisterModel = {
  userid: string;
  password: string;
  secret: string;
};
export type resRegisterModel = {
  message: string;
};

export type reqLoginModel = {
  userid: string;
  password: string;
};
export type resLoginModel = {
  userid: string;
  accessToken: string;
};

export type resVerifyModel = {
  type: string;
};
