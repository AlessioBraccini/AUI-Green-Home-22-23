import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/HomePage";
import NotFound from "@/views/NotFound";
import ChatPage from "@/views/ChatPage";
import OnboardingPage from "@/views/OnboardingPage";
import test from "@/views/test.vue";
import offenderView from "@/views/offenderView";
import goodBoyView from "@/views/goodBoyView";
// import ChatPage2 from "@/views/ChatPage2";

const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: HomePage
    },

    {
        path: '/ChatPage',
        name: 'ChatPage',
        component: ChatPage
    },

    {
        path: '/OnboardingPage',
        name: 'OnboardingPage',
        component: OnboardingPage
    },

    {
        path: '/OffenderView',
        name: 'OffenderView',
        component: offenderView
    },
    {
        path: '/goodBoyView',
        name: 'goodBoyView',
        component: goodBoyView
    },


    {
        path: '/test',
        name: 'test',
        component: test
    },

    // Catch 404
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
]

// Create a navigable history accessible through back and forward in the browser

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router