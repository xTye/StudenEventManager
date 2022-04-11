export type UniversitiesCreatedModel = {
  name: string;
  location: string;
  description: string;
  numstudents: number;
  superadminid: string;
};

export type reqCreateUniversitiesCreatedModel = {
  name: string;
  location: string;
  description: string;
  numstudents: number;
  superadminid: string;
};

export type resCreateUniversitiesCreatedModel = {
  name: string;
  location: string;
  description: string;
  numstudents: number;
  superadminid: string;
};

export type reqFindAllUniversitiesCreatedModel = {
  name: string;
};

export type resFindAllUniversitiesCreatedModel = {
  name: string;
  location: string;
  description: string;
  numstudents: number;
  superadminid: string;
};

export type reqFindOneUniversitiesCreatedModel = {
  name: string;
};

export type resFindOneUniversitiesCreatedModel = {
  name: string;
  location: string;
  description: string;
  numstudents: number;
  superadminid: string;
};

export type reqUpdateUniversitiesCreatedModel = {
  name: string;
  location: string;
  description: string;
  numstudents: number;
  superadminid: string;
};

export type resUpdateUniversitiesCreatedModel = {
  message: string;
};

export type reqDeleteUniversitiesCreatedModel = {
  name: string;
};

export type resDeleteUniversitiesCreatedModel = {
  message: string;
};

export type resDeleteAllUniversitiesCreatedModel = {
  message: string;
};
