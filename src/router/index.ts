import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/router/routes";

const routerHistory = createWebHistory(process.env.BASE_URL);

export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes,
});
