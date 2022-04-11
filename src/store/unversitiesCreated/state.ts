import { UniversitiesCreatedModel } from "@/models/universitiesCreatedModel";

export type UniversitiesCreatedStateType = {
  universitiesCreateds: UniversitiesCreatedModel[];
  universitiesCreated: UniversitiesCreatedModel;
  loading: boolean;
};

const state: UniversitiesCreatedStateType = {
  universitiesCreateds: [],
  universitiesCreated: {
    name: "",
    location: "",
    description: "",
    numstudents: -1,
    superadminid: "",
  },
  loading: false,
};

export default state;
