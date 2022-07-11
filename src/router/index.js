import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "chat",
    component: () => import("../views/ChatView.vue"),
    meta: {
      authReq: true,
    },
  },
  {
    path: "/about",
    name: "about",
    meta: {
      authReq: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/register",
    name: "register",
    meta: {
      authReq: false,
    },
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      authReq: false,
    },
    component: () => import("../views/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.authReq) {
    if (store.getters["auth/user"].username === null) {
      next({ name: "login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
