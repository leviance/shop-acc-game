import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "@/components/HomePage";
import RechargeOnlinePage from "@/components/RechargeOnlinePage";
import LoginPage from "@/components/LoginPage";
import RegisterPage from "@/components/RegisterPage";
import AccountCategories from "@/components/AccountCategories";
import ListAccountsPage from "@/components/ListAccountsPage";
import DetailAccountPage from "@/components/DetailAccountPage";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/recharge", name: "RechargeOnline", component: RechargeOnlinePage },
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/register", name: "Register", component: RegisterPage },
  { path: "/account-categories/:categoryName", name: "AccountCategories", component: AccountCategories },
  { path: "/account/:typeAccount", name: "ListAccountsPage", component: ListAccountsPage },
  { path: "/detail/:accountID", name: "DetailAccountPage", component: DetailAccountPage },
  { path: "*", component: HomePage },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
