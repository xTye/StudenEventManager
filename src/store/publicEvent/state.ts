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
