import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home Page",
    component: HomePage,
  },
  {
    path: "/units",
    name: "Units",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Units/UnitsPage.vue"),
  },
  {
    path: "/units/:id",
    name: "Units-Detail",
    component: () => import("../views/Units/UnitsDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_TITLE} | ${to.name}`;
  next();
});

export default router;
