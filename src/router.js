import { createRouter, createWebHistory } from "vue-router";

import Airlines from '@/pages/Airlines.vue';
import Passengers from "@/pages/Passengers.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/airlines"},
        { path: "/airlines", component: Airlines },
        { path: "/passengers", component: Passengers },

    ]
})

export default router;