import {createWebHistory, createRouter} from "vue-router";
import VRViewer from "../VRViewer.vue";
import App from "../App.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: App,
    },
    {
        path: "/VR",
        name: "VRViewer",
        component: VRViewer,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;