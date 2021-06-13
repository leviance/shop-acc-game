import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "@/components/HomePage";
import RechargeOnlinePage from "@/components/RechargeOnlinePage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/",
    name: "RechargeOnline",
    component: RechargeOnlinePage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
