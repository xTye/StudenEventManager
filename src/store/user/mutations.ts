import * as types from "./types";
import { UserStateType } from "@/store/user/state";
import {
  resLoginModel,
  resRegisterModel,
  resDeleteAllUserModel,
  resDeleteUserModel,
  resFindAllUserModel,
  resFindOneUserModel,
  resUpdateUserModel,
  resVerifyModel,
} from "@/models/userModel";
import Cookies from "js-cookie";
import user from ".";

const mutations = {
  [types.LOADING_USER](state: UserStateType, toggle: boolean) {
    state.loading = toggle;
  },

  [types.GET_USERS](state: UserStateType, res: resFindAllUserModel[]) {
    state.users = res;
  },

  [types.GET_USER](state: UserStateType, res: resFindOneUserModel) {
    state.users = [];
    state.users.push(res);
  },

  [types.UPDATE_USER](state: UserStateType, res: resUpdateUserModel) {
    state.user.userid = res.userid;
  },

  [types.REMOVE_USER](state: UserStateType, res: resDeleteUserModel) {},

  [types.REMOVE_USERS](state: UserStateType, res: resDeleteAllUserModel) {
    state.user = { userid: "" };
    state.users = [];
  },

  [types.REGISTER_USER](state: UserStateType, res: resRegisterModel) {},

  [types.LOGIN_USER](state: UserStateType, res: resLoginModel) {
    state.loggedin = true;
    Cookies.set("accessToken", res.accessToken, { expires: 30 });
  },

  [types.ERROR_USER](state: UserStateType, res: any) {
    const data = "" + res.response.data;
    if (!data) {
      state.error = "Unkown error!";
      return;
    }
    const regex = /(?<=(Error:\s))[^<]*/g;
    const inter = data.match(regex);
    if (inter) state.error = inter[0];
  },

  [types.ERROR_SET](state: UserStateType, string: string) {
    state.error = string;
  },

  [types.LOGOUT_USER](state: UserStateType) {
    state.user.userid = "";
    Cookies.remove("accessToken");
    state.loggedin = false;
  },

  [types.VERIFY_USER](state: UserStateType, res: resVerifyModel) {},
};

export default mutations;
