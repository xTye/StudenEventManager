import { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomePage",
    meta: {
      title: "Home",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomePage.vue"),
  },
  {
    path: "/events",
    name: "EventsPage",
    meta: {
      title: "Events",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EventsPage.vue"),
  },
  {
    path: "/login",
    name: "LoginPage",
    meta: {
      title: "Login",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginPage.vue"),
  },
  {
    path: "/register",
    name: "RegisterPage",
    meta: {
      title: "Register",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RegisterPage.vue"),
  },
  {
    path: "/clubs",
    name: "ClubsPage",
    meta: {
      title: "Clubs",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ClubsPage.vue"),
  },
];
