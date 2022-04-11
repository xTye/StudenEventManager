import { PublicEventModel } from "@/models/publicEventModel";

export type PublicEventStateType = {
  publicEvents: PublicEventModel[];
  publicEvent: PublicEventModel;
  loading: boolean;
};

const state: PublicEventStateType = {
  publicEvents: [],
  publicEvent: {
    eventid: -1,
    adminid: "",
    superadminid: "",
  },
  loading: false,
};

export default state;
