export type LocationModel = {
  lname: string;
  address: string;
  longitude: string;
  latitude: string;
};

export type reqCreateLocationModel = {
  lname: string;
  address: string;
  longitude: string;
  latitude: string;
};

export type resCreateLocationModel = {
  lname: string;
  address: string;
  longitude: string;
  latitude: string;
};

export type reqFindAllLocationModel = {
  lname: string;
};

export type resFindAllLocationModel = {
  lname: string;
  address: string;
  longitude: string;
  latitude: string;
};

export type reqFindOneLocationModel = {
  lname: string;
};

export type resFindOneLocationModel = {
  lname: string;
  address: string;
  longitude: string;
  latitude: string;
};

export type reqUpdateLocationModel = {
  lname: string;
  address: string;
  longitude: string;
  latitude: string;
};

export type resUpdateLocationModel = {
  message: string;
};

export type reqDeleteLocationModel = {
  lname: string;
};

export type resDeleteLocationModel = {
  message: string;
};

export type resDeleteAllLocationModel = {
  message: string;
};
