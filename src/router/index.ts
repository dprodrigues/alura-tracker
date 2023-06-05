import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Tasks",
    component: () => import("@/views/Tasks.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("@/views/Projects.vue"),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
