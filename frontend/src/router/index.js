import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "@/components/HomePage";
import RechargeOnlinePage from "@/components/RechargeOnlinePage";
import LoginPage from "@/components/LoginPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/recharge",
    name: "RechargeOnline",
    component: RechargeOnlinePage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
