import Vue from "vue";
import App from "./App.vue";
import {
  Button,
  Radio,
  Container,
  Main,
  Header,
  Aside,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Dropdown,
  DropdownItem,
  DropdownMenu
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import "./assets/index.less";
import store from './store'

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Radio);
Vue.use(Container);
Vue.use(Main);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
Vue.use(Dropdown);
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
