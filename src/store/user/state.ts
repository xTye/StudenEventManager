import { UserModel } from "@/models/userModel";
import { boolean } from "yup/lib/locale";

type Users = {
  userid: string;
};

export type UserStateType = {
  users: Users[];
  user: UserModel;
  loading: boolean;
  loggedin: boolean;
  error: string;
  type: string;
};

const state: UserStateType = {
  users: [],
  user: {
    userid: "",
  },
  loading: false,
  loggedin: false,
  error: "",
  type: "",
};

export default state;
