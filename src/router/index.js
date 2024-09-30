import { createWebHashHistory, createRouter } from "vue-router";
import Search from "../components/Search.vue";
import MovieList from "../components/MovieList.vue";
import MovieDetails from "../components/MovieDetails.vue";

const routes = [
    {
        path: '/',
        component: Search
    },
    {
        path: '/movies',
        component: MovieList
    },
    {
        path: '/movie/:id',
        component: MovieDetails
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactPathActiveClass : 'active'
})

export default router