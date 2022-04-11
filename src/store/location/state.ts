import { LocationModel } from "@/models/locationModel";

export type LocationStateType = {
  locations: LocationModel[];
  location: LocationModel;
  loading: boolean;
};

const state: LocationStateType = {
  locations: [],
  location: {
    lname: "",
    address: "",
    longitude: "",
    latitude: "",
  },
  loading: false,
};

export default state;
