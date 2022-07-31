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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UnitsPage.vue"),
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
