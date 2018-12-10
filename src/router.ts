import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader.vue";
import AppFooter from "./layout/AppFooter.vue";
import About from "./views/About.vue";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import Category from "./views/components/Categories/Category.vue";
import JobType from "./views/components/Categories/JobType.vue";
import JobPage from "./views/components/Categories/JobPage.vue";

Vue.use(Router);

function fetchData() {
  return {};
}

export default new Router({
  linkExactActiveClass: "active",
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      },
      props: fetchData
    },
    {
      path: "/about",
      name: "about",
      components: {
        header: AppHeader,
        default: About,
        footer: AppFooter
      }
    },
    {
      path: "/creatives",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/process",
      name: "process",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/jobtype/:item",
      name: "Job Type",
      components: {
        header: AppHeader,
        default: JobType,
        footer: AppFooter
      }
    },
    { path: "/job/:id",
      name: "Job Title",
      components: {
        header: AppHeader,
        default: JobPage,
        footer: AppFooter
      }
    },
    { path: "/category/:id",
      name: "Category Title",
      components: {
        header: AppHeader,
        default: Category,
        footer: AppFooter
      },
      children: [
        {
          path: "social-media",
          components: {
            header: AppHeader,
            default: Category,
            footer: AppFooter
          }
        },
        {
          path: "graphic-design",
          components: {
            header: AppHeader,
            default: Category,
            footer: AppFooter
          }
        },
        {
          path: "motion-graphics",
          components: {
            header: AppHeader,
            default: Category,
            footer: AppFooter
          }
        }
      ]
    }
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
