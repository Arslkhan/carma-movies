import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

import HomePage from '@/pages/HomePage'
import DetailsPage from '@/pages/DetailsPage'
import SearchPage from '@/pages/SearchPage'
import StatsPage from '@/pages/StatsPage'

const router = new Router({
    routes: [
        {
            path:'/',
            name:'HomePage',
            component: HomePage
        },
        {
            path:'/movie/:id',
            name:'Details',
            component: DetailsPage
        },
        {
            path:'/search/:searchQuery',
            name:'Search',
            component: SearchPage
        },
        {
            path:'/stats',
            name:'StatsPage',
            component: StatsPage
        },
        {
            path: "*",
            redirect: "/"
        }
    ],
    mode: 'history'
})

export default router
