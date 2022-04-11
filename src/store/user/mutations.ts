import * as types from "./types";
import { UserStateType } from "@/store/user/state";
import { resLoginModel, resRegisterModel, UserModel } from "@/models/userModel";
import { MutationTree } from "vuex";

export type Mutations<S = UserStateType> = {
  [types.GET_USERS](state: S, users: UserModel[]): void;
  [types.LOADING_USER](state: S, toggle: boolean): void;
  [types.REMOVE_USER](state: UserStateType, username: string): void;
  [types.ADD_USER](state: UserStateType, createdUser: UserModel): void;
  [types.UPDATE_USER](state: UserStateType, udpatedUser: UserModel): void;
};

//export const mutations: MutationTree<UserStateType> = {
const mutations = {
  [types.GET_USERS](state: UserStateType, users: UserModel[]) {},

  [types.LOADING_USER](state: UserStateType, toggle: boolean) {
    state.loading = toggle;
  },

  [types.REMOVE_USER](state: UserStateType, username: string) {
    state.user = { userid: "", accessToken: "" };
  },

  [types.ADD_USER](state: UserStateType, createdUser: UserModel) {
    state.user = createdUser;
  },

  [types.UPDATE_USER](state: UserStateType, udpatedUser: UserModel) {
    state.user = udpatedUser;
  },

  [types.REGISTER_USER](state: UserStateType, res: resRegisterModel) {},

  [types.LOGIN_USER](state: UserStateType, res: resLoginModel) {
    state.user = res;
  },
};

export default mutations;
