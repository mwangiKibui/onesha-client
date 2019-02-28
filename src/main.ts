import Vue from "vue";
import App from "@/App.vue";
import Argon from "@/plugins/argon-kit";
import router from "@/router";
import InitProgress from "@/progressbar";

Vue.config.productionTip = false;
Vue.use(Argon);

InitProgress(router);

new Vue({
  router,
  // @ts-ignore
  render: h => h(App)
}).$mount("#app");
