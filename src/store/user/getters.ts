import { UserStateType } from "@/store/user/state";
import { UserModel } from "@/models/userModel";

export type Getters = {
  user(state: UserStateType): UserModel;
  loading(state: UserStateType): boolean;
};

const getters = {
  users: (state: UserStateType) => {
    return state.users;
  },
  user: (state: UserStateType) => {
    return state.user;
  },
  loading: (state: UserStateType) => {
    return state.loading;
  },
  loggedin: (state: UserStateType) => {
    return state.loggedin;
  },
  error: (state: UserStateType) => {
    return state.error;
  },
};

export default getters;
