import Vue from "vue";
import App from "@/App.vue";
import Argon from "@/plugins/argon-kit";
import router from "@/router";
import InitProgress from "@/progressbar";
import FormSelect from 'bootstrap-vue/es/components/form-select'


Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(FormSelect)
InitProgress(router);

new Vue({
  router,
  // @ts-ignore
  render: h => h(App)
}).$mount("#app");
