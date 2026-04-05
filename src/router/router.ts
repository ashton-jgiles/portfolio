// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/pages/About.vue"),
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import("@/pages/Portfolio.vue"),
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("@/pages/Blog.vue"),
    },
    {
      path: "/blog/:slug",
      name: "post",
      component: () => import("@/pages/Post.vue"),
    },
    {
      path: "/resume",
      name: "resume",
      component: () => import("@/pages/Resume.vue"),
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    }
    return { top: 0 };
  },
});

export default router;
