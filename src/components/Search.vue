<template>
    <Loader v-if="searchStore.loader" />
    <form class="search-form" @submit.prevent="searchStore.getMovies(searchMovie)">
        <input 
            type="text" 
            class="search-input" 
            placeholder="Input movie" 
            v-model="searchMovie"
        >
        <button type="submit" class="search-btn">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="7.66439" cy="7.4819" rx="7.66439" ry="7.4819" transform="matrix(-1 0 0 1 16.9966 1)" stroke="#67686D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.00146 14.0743L0.996587 17" stroke="#67686D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </form>

    <div>
        <Movie 
            v-for="movie of searchStore.movies"
            :key="movie.id"
            :movie="movie"
            :is-search="true"
        />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useSearchStore } from '../stores/SearchStore'
import Loader from '../components/Loader.vue'
import Movie from '../components/Movie.vue'

const searchStore = useSearchStore()
const searchMovie = ref('')
</script>