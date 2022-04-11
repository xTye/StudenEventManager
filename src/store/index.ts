import { createStore, createLogger } from "vuex";
import commentModule from "./comment";
import eventsAtModule from "./eventsAt";
import joinModule from "./join";
import locationModule from "./location";
import privateEventModule from "./privateEvent";
import publicEventModule from "./publicEvent";
import rsoModule from "./rso";
import rsoEventModule from "./rsoEvent";
import unversitiesCreatedModule from "./unversitiesCreated";
import userModule from "./user";

export const store = createStore({
  modules: {
    userModule,
    commentModule,
    eventsAtModule,
    joinModule,
    locationModule,
    privateEventModule,
    publicEventModule,
    rsoModule,
    rsoEventModule,
    unversitiesCreatedModule,
  },
  plugins: [createLogger()],
});
