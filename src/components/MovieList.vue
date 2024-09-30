<template>
    <div v-if="!movieStore.movies.length" class="empty">
        <img src="/empty.svg" alt="Not Found" width="250">
        <div>MOVIES NOT FOUND</div>
    </div>

    <div v-else>
        <div v-if="movieStore.watchedMovies.length">
            <h3 class="section-heading">Watched movies ({{ movieStore.watchedMovies.length }})</h3>
            <Movie 
                v-for="movie in movieStore.watchedMovies"
                :key="movie.id"
                :movie="movie"
                is-detail
            />
        </div>
        <div v-if="movieStore.unWatchedMovies.length">
            <h3 class="section-heading">All movies ({{ movieStore.totalCountMovies }})</h3>
            <Movie 
                v-for="movie in movieStore.unWatchedMovies"
                :key="movie.id"
                :movie="movie"
                is-detail
            />
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useMovieStore } from '../stores/MovieStore'
import Movie from '../components/Movie.vue'

const movieStore = useMovieStore()

onMounted(() => movieStore.loadMovies())
</script>

<style scoped>
.empty {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.section-heading {
    display: inline-block;
    padding-bottom: 6px;
    border-bottom: 4px solid #3A3F47;
    font-weight: 500;
}
</style>