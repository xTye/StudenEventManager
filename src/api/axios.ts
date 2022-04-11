import axios from "axios";
import state from "@/store/user/state";

export const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "http://studenteventmanager.tech/api/"
      : "http://localhost:8081/api/",
  headers: { Authorization: `Bearer ${state.user.accessToken}` },
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
