import { UserModel } from "@/models/userModel";

export type UserStateType = {
  user: UserModel;
  loading: boolean;
};

const state: UserStateType = {
  user: {
    userid: "",
    accessToken: "",
  },
  loading: false,
};

export default state;
