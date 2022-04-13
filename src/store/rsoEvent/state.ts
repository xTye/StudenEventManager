import { RsoEventModel } from "@/models/rsoEventModel";

export type RsoEventStateType = {
  rsoEvents: RsoEventModel[];
  rsoEvent: RsoEventModel;
  loading: boolean;
};

const state: RsoEventStateType = {
  rsoEvents: [],
  rsoEvent: {
    eventid: -1,
    rsoid: "",
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
