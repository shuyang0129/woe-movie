import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
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
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
