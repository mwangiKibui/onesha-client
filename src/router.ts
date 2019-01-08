import Vue from 'vue';
import Router from 'vue-router';
import AppFooter from '@/layout/AppFooter.vue';
import AppHeader from '@/layout/AppHeader.vue';
import About from '@/views/About.vue';
import Category from '@/views/components/Categories/Category.vue';
import JobPage from '@/views/components/Categories/JobPage.vue';
import JobType from '@/views/components/Categories/JobType.vue';
import Landing from '@/views/Landing.vue';
import Login from '@/views/Login.vue';
import Portfolio from '@/views/Portfolio.vue';
import Profile from '@/views/Profile.vue';
import Register from '@/views/Register.vue';

Vue.use(Router);

export default new Router({
    linkExactActiveClass: 'active',
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                header: AppHeader,
                default: Landing,
                footer: AppFooter,
            },
        },
        {
            path: '/about',
            name: 'about',
            components: {
                header: AppHeader,
                default: About,
                footer: AppFooter,
            },
        },
        {
            path: '/projects',
            name: 'Portfolio',
            components: {
                header: AppHeader,
                default: Portfolio,
                footer: AppFooter,
            },
        },
        {
            path: '/process',
            name: 'process',
            components: {
                header: AppHeader,
                default: Landing,
                footer: AppFooter,
            },
        },
        {
            path: '/login',
            name: 'login',
            components: {
                header: AppHeader,
                default: Login,
                footer: AppFooter,
            },
        },
        {
            path: '/register',
            name: 'register',
            components: {
                header: AppHeader,
                default: Register,
                footer: AppFooter,
            },
        },
        {
            path: '/profile',
            name: 'profile',
            components: {
                header: AppHeader,
                default: Profile,
                footer: AppFooter,
            },
        },
        {
            path: '/categories/:slug',
            name: 'Category view',
            components: {
                header: AppHeader,
                default: Category,
                footer: AppFooter,
            },
            props: { default: true, header: false, footer: false },
        },
        {
            path: '/jobtype/:item',
            name: 'Job Type',
            components: {
                header: AppHeader,
                default: JobType,
                footer: AppFooter,
            },
        },
        {
            path: '/job/:id',
            name: 'Job Title',
            components: {
                header: AppHeader,
                default: JobPage,
                footer: AppFooter,
            },
        },
    ],
    scrollBehavior: to => {
        if (to.hash) {
            return { selector: to.hash };
        } else {
            return { x: 0, y: 0 };
        }
    },
});