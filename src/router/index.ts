import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        redirect: '/movies',
    },
    {
        path: '/movies',
        name: 'discoverMovie',
        component: () => import('@/views/Movies.vue'),
    },
    {
        path: '/movies/:movieId',
        name: 'movieDetail',
        component: () => import('@/views/MovieDetail.vue'),
    },
    {
        path: '/*',
        name: '404',
        component: () => import('@/views/404.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
});

// router.beforeEach((to, from, next) => {
//     console.log(to);
//     console.log(from);
//     if (from.name === to.name && from.params.movieId !== to.params.movieId) {
//         // next(`/movies/${to.params.movieId}`);
//         // location.reload();
//         document.body.scrollTop = 0;
//     }
//     next();
// });

export default router;
