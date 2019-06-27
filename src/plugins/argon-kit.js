import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/vendor/font-awesome/css/font-awesome.css";
import "../assets/scss/argon.scss";
import "../assets/vendor/jquery/jquery.min.js";
import "../assets/css/nprogress.css";
import "../assets/css/globalStyle.css";
import "../assets/vendor/scrollreveal.min.js";
import globalComponents from "./globalComponents";
import globalDirectives from "./globalDirectives";
import VueLazyload from "vue-lazyload";
import Vuetify from "vuetify";

export default {
  install(Vue) {
    Vue.use(Vuetify);
    Vue.use(globalComponents);
    Vue.use(globalDirectives);
    Vue.use(VueLazyload);
  },
  name: "Argon"
};
