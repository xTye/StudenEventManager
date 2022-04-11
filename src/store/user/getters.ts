import { UserStateType } from "@/store/user/state";
import { UserModel } from "@/models/userModel";

export type Getters = {
  user(state: UserStateType): UserModel;
  loading(state: UserStateType): boolean;
};

const getters = {
  user: (state: UserStateType) => {
    return state.user;
  },
  loading: (state: UserStateType) => {
    return state.loading;
  },
};

export default getters;
