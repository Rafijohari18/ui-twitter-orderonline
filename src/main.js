import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import Vuesax from "vuesax";
import store from "./store.js";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/main.css";
import "bootstrap-vue/dist/bootstrap-vue-icons.min.css";
import "vuesax/dist/vuesax.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(Vuesax, {
  // options here
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
