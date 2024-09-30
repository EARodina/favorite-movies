import { ref, computed } from "vue"
import { defineStore } from "pinia"

export const useMovieStore = defineStore('movieStore', () => {
    const movies = ref([])

    const watchedMovies = computed(() => movies.value.filter(el => el.isWatched))
    const unWatchedMovies = computed(() => movies.value.filter(el => !el.isWatched))
    const totalCountMovies = computed(() => movies.value.length) 

    const loadMovies = () => {
        return movies.value = JSON.parse(localStorage.getItem('movies')) || []
    }

    const toggleWatched = (id) => {
        const idx = movies.value.findIndex(el => el.id === id)
        
        movies.value[idx].isWatched = !movies.value[idx].isWatched
        localStorage.setItem('movies', JSON.stringify(movies.value))
    }

    const deleteMovie = (id) => {
        movies.value = movies.value.filter(el => el.id !== id)
        localStorage.setItem('movies', JSON.stringify(movies.value))
    }

    return {
        movies,
        watchedMovies,
        unWatchedMovies,
        totalCountMovies,
        loadMovies,
        toggleWatched,
        deleteMovie
    }
})