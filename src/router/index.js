import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/HomePage";
import NotFound from "@/views/NotFound";
import ChatPage from "@/views/ChatPage";

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


    // Catch 404
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
]

// To cycle between farmers specification see this video for the links with the ':'
// https://www.youtube.com/watch?v=juocv4AtrHo&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=9

// Create a navigable history accessible through back and forward in the browser

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router