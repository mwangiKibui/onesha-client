import Vue from "vue";
import Router from "vue-router";
import Meta from "vue-meta";
import AppFooter from "@/views/components/layout/AppFooter.vue";
import AppHeader from "@/views/components/layout/AppHeader.vue";
import About from "@/views/About.vue";
import LearnMore from "@/views/LearnMore.vue";
import JobCategory from "@/views/components/Categories/JobCategory.vue";
import CategoryPage from "@/views/components/Categories/CategoryPage.vue";
import JobPage from "@/views/components/JobTemplates/JobPage.vue";
import JobView from "@/views/components/JobTemplates/JobView.vue";
import Landing from "@/views/Landing2.vue";
import Login from "@/views/Login.vue";
import Profile from "@/views/Profile.vue";
import Register from "@/views/Register.vue";
import Redirector from "@/views/Redirector.vue";
import Guidelines from "@/views/components/Landing/Guidelines.vue";
import Portfolio from "@/views/components/Landing/Portfolio.vue";
import Privacy from "@/views/components/Landing/Privacy.vue";
import Terms from "@/views/components/Landing/Terms.vue";

Vue.use(Meta);
Vue.use(Router);

// @ts-ignore
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
      }
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
      path: "/learn-more",
      name: "learn-more",
      components: {
        header: AppHeader,
        default: LearnMore,
        footer: AppFooter
      }
    },
    {
      path: "/support",
      name: "Support",
      components: {
        header: AppHeader,
        default: Guidelines,
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
      path: "/privacy",
      name: "Privacy",
      components: {
        header: AppHeader,
        default: Privacy,
        footer: AppFooter
      }
    },
    {
      path: "/terms",
      name: "Terms",
      components: {
        header: AppHeader,
        default: Terms,
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
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/categories/:slug",
      name: "Category view",
      components: {
        header: AppHeader,
        default: JobCategory,
        footer: AppFooter
      },
      props: { default: true, header: false, footer: false }
    },
    {
      path: "/job/:slug",
      name: "Job Title",
      components: {
        header: AppHeader,
        default: JobPage,
        footer: AppFooter
      },
      props: { default: true, header: false, footer: false }
    },
    {
      path: "/job-preview/:slug",
      name: "Job Details",
      components: {
        header: AppHeader,
        default: JobView,
        footer: AppFooter
      },
      props: { default: true, header: false, footer: false }
    },
    {
      path: "/category/:slug",
      name: "Category Title",
      components: {
        header: AppHeader,
        default: CategoryPage,
        footer: AppFooter
      },
      props: { default: true, header: false, footer: false }
    },
    //handle older routes
    {
      path: "/profile/:slug",
      name: "Redirector",
      component: Redirector,
      alias: "/user",
      props: { default: true }
    },
    {
      path: "/user/:slug",
      name: "Redirector1",
      component: Redirector,
      props: { default: true }
    },
    {
      path: "/affiliate/:slug",
      name: "Redirector2",
      component: Redirector,
      props: { default: true }
    },
    {
      path: "/institution/:slug",
      name: "Redirector3",
      component: Redirector,
      props: { default: true }
    },
    {
      path: "/institutions",
      name: "Redirector4",
      component: Redirector,
      props: { default: true }
    },
    {
      path: "/project/:slug",
      name: "Redirector5",
      component: Redirector,
      props: { default: true }
    },
    {
      path: "/projects",
      name: "Redirector6",
      component: Redirector,
      props: { default: true }
    },
    {
      path: "/creatives",
      name: "Redirector61",
      component: Redirector,
      props: { default: true }
    },
    {
      path: "/students/:slug",
      name: "Redirector7",
      component: Redirector,
      props: { default: true }
    },
    {
      path: "/service/:slug",
      name: "Redirector8",
      component: Redirector,
      props: { default: true }
    },
    {
      path: "/all-services",
      name: "Redirector9",
      component: Redirector,
      props: { default: true }
    },
    {
      path: "/jobs",
      name: "Redirector10",
      component: Redirector,
      props: { default: true }
    },
    {
      path: "/company/:slug",
      name: "Redirector11",
      component: Redirector,
      props: { default: true }
    },
    {
      path: "/companies",
      name: "Redirector12",
      component: Redirector,
      props: { default: true }
    },
    {
      path: "/adminpage",
      name: "Redirector13",
      component: Redirector,
      props: { default: true }
    },
    {
      path: "/viewProject",
      name: "Redirector14",
      component: Redirector,
      props: { default: true }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
