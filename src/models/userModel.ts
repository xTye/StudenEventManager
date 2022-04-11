export type UserModel = {
  userid: string;
  accessToken: string;
};

export type reqLoginModel = {
  userid: string;
  password: string;
};
export type resLoginModel = {
  userid: string;
  accessToken: string;
};

export type reqRegisterModel = {
  userid: string;
  password: string;
};
export type resRegisterModel = {
  message: string;
};
