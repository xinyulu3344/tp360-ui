import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main";
import User from "../views/user";
import Home from "../views/home";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    children: [
      {
        path: "/home",
        name: "home",
        component: Home,
      },
      {
        path: "/user",
        name: "user",
        component: User,
      },
    ],
  },
];

export default new VueRouter({
  mode: "history",
  routes,
});

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}