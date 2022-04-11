import { EventsAtModel } from "@/models/eventsAtModel";

export type EventsAtStateType = {
  eventsAts: EventsAtModel[];
  eventsAt: EventsAtModel;
  loading: boolean;
};

const state: EventsAtStateType = {
  eventsAts: [],
  eventsAt: {
    eventname: "",
    time: "",
    date: new Date(),
    description: "",
    location: "",
    category: "",
    phonenumber: "",
    emailaddress: "",
  },
  loading: false,
};

export default state;
