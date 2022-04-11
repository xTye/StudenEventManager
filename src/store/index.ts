import { createStore, createLogger } from "vuex";
import userModule from "./user";

export const store = createStore({
  modules: {
    userModule,
  },
  plugins: [createLogger()],
});
