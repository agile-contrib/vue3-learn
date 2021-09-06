import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
    routes: [{
        path: "/a",
        name: "a",
        component: () => import('./pages/A.vue')
    }, {
        path: "/b",
        name: "b",
        component: () => import('./pages/B.vue')
    }],
    history: createWebHistory()
});
