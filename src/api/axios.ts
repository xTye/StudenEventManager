import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "http://studenteventmanager.tech/api/"
      : "http://localhost:8081/api/",
  headers: {
    authorization: "",
  },
});

api.interceptors.request.use(function (config) {
  if (config.headers)
    config.headers["authorization"] = "Bearer " + Cookies.get("accessToken");
  return config;
});

export const endpoints = {
  admins: "admins",
  comments: "comments",
  eventsAt: "eventsAt",
  joins: "joins",
  locations: "locations",
  privateEvents: "privateEvents",
  publicEvents: "publicEvents",
  rsos: "rsos",
  rsoEvents: "rsoEvents",
  superAdmins: "superAdmins",
  universitiesCreated: "universitiesCreated",
  users: "users",
};

export default api;
