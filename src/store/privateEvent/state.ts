import { PrivateEventModel } from "@/models/privateEventModel";

export type PrivateEventStateType = {
  privateEvents: PrivateEventModel[];
  privateEvent: PrivateEventModel;
  loading: boolean;
};

const state: PrivateEventStateType = {
  privateEvents: [],
  privateEvent: {
    eventid: -1,
    adminid: "",
    superadminid: "",
  },
  loading: false,
};

export default state;
