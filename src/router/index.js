import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main";
import User from "../views/user";
import Home from "../views/home";
import Mall from "../views/mall"
import PageOne from "../views/other/pageOne.vue"
import PageTwo from "../views/other/pageTwo.vue"

Vue.use(VueRouter);
const routes = [{
  path: "/",
  name: "Main",
  component: Main,
  redirect: '/home',
  children: [{
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/user",
      name: "user",
      component: User,
    },
    {
      path: "/mall",
      name: "mall",
      component: Mall
    },
    {
      path: "/page1",
      name: "page1",
      component: PageOne
    },
    {
      path: "/page2",
      name: "page2",
      component: PageTwo
    },
  ],
}, ];

export default new VueRouter({
  mode: "history",
  routes,
});

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}