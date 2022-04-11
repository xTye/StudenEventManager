import axios from "axios";

export const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://studenteventmanager.tech/api/"
      : "http://localhost:8081/api/",
});

export const endpoints = {
  users: "users",
  admins: "admins",
  universitiesCreated: "universitiesCreated",
};
