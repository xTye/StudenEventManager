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
    EventsAt: {
      eventname: "",
      time: "",
      date: "",
      description: "",
      location: "",
      category: "",
      phonenumber: "",
      emailaddress: "",
    },
    Comments: [],
  },
  loading: false,
};

export default state;
