import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/play_game',
        name: 'Game',
        component: () => import('./pages/play_game.vue')
    },
    {
        path: '/',
        name: 'Main Menu',
        component: () => import('./pages/main_menu.vue')
    },
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;