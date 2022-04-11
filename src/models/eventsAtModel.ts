export type EventsAtModel = {
  eventname: string;
  time: string;
  date: Date;
  description: string;
  location: string;
  category: string;
  phonenumber: string;
  emailaddress: string;
};

export type reqCreateEventsAtModel = {
  eventname: number;
  time: string;
  date: Date;
  description: string;
  location: string;
  category: string;
  phonenumber: string;
  emailaddress: string;
};

export type resCreateEventsAtModel = {
  eventid: number;
  eventname: string;
  time: string;
  date: Date;
  description: string;
  location: string;
  category: string;
  phonenumber: string;
  emailaddress: string;
};

export type reqFindAllEventsAtModel = {
  eventid: number;
};

export type resFindAllEventsAtModel = {
  eventid: number;
  eventname: string;
  time: string;
  date: Date;
  description: string;
  location: string;
  category: string;
  phonenumber: string;
  emailaddress: string;
};

export type reqFindOneEventsAtModel = {
  eventid: number;
};

export type resFindOneEventsAtModel = {
  eventid: number;
  eventname: string;
  time: string;
  date: Date;
  description: string;
  location: string;
  category: string;
  phonenumber: string;
  emailaddress: string;
};

export type reqUpdateEventsAtModel = {
  eventid: number;
  eventname: string;
  time: string;
  date: Date;
  description: string;
  location: string;
  category: string;
  phonenumber: string;
  emailaddress: string;
};

export type resUpdateEventsAtModel = {
  message: string;
};

export type reqDeleteEventsAtModel = {
  eventid: number;
};

export type resDeleteEventsAtModel = {
  message: string;
};

export type resDeleteAllEventsAtModel = {
  message: string;
};
