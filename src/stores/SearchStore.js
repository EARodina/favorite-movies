import { ref } from "vue"
import { defineStore } from "pinia"
import { useRouter } from "vue-router"
import { useMovieStore } from "./MovieStore"

const url = 'https://api.kinopoisk.dev/v1.4/movie/search?query='
const options = {method: 'GET', headers: {accept: 'application/json', 'X-API-KEY': 'YOUR_KEY'}};

export const useSearchStore = defineStore('searchStore', () => {
    const router = useRouter()
    const loader = ref(false)
    const movies = ref([])

    const getMovies = (search = '') => {
        loader.value = true
        
        fetch(`${url}${search}`, options)
            .then(response => response.json())
            .then(response => movies.value = response.docs)
            .catch(err => console.error(err))
        
        loader.value = false
    }

    const addToUserMovies = (object) => {
        const movieStore = useMovieStore()

        movieStore.movies.push({...object, isWatched: false})
        localStorage.setItem('movies', JSON.stringify(movieStore.movies))
        router.push('/movies')
    }

    return {
        loader,
        movies,
        getMovies,
        addToUserMovies
    }
})