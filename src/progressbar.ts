import NProgress from 'nprogress';
import Router from 'vue-router';


/**
 * Initializes NProgress after a specified delay only if the route was not resolved yet.
 */

export default function initProgress(router: Router) {
    router.beforeResolve((to, from, next) => {
        if (to.path) {
            NProgress.start();
        }
        next();
    });

    router.afterEach(() => {
        setTimeout(() => {
            NProgress.done();
        }, 1500);
    });
}
