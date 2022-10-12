import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
    mata: {
      title: "Contact",
    },
  },
  {
    path: "/login",
    name: "Login",

    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Login.vue"),
    mata: {
      title: "Login",
    },
  },
  {
    path: "/register",
    name: "Register",

    component: () =>
      import(/* webpackChunkName: "Register" */ "../views/Registe.vue"),
    mata: {
      title: "Register",
    },
  },
  {
    path: "/business",
    name: "Business",

    component: () =>
      import(/* webpackChunkName: "Register" */ "../views/Business.vue"),
    mata: {
      title: "Business",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
