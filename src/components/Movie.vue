<template>
    <div class="movie">
        <router-link v-if="isDetail" :to="`/movie/${movie.id}`" class="movie-link">
            <img 
                :src="movie.poster.url !== null ? movie.poster.url : '/no-avatar.jpg'" 
                :alt="movie.alternativeName" 
                class="movie-img"
            />
        </router-link>
        <img 
            v-else
            :src="movie.poster.url !== null ? movie.poster.url : '/no-avatar.jpg'" 
            :alt="movie.alternativeName" 
            class="movie-img"
        />
        <div class="movie-info">
            <div class="movie-name">{{ movie.alternativeName }} ({{ movie.year }})</div>
            <span v-if="movie.shortDescription" class="movie-overview">{{ movie.shortDescription }}</span>
            <div v-if="!isSearch" class="movie-buttons">
                <button class="btn btn_primary" @click="movieStore.toggleWatched(movie.id)">
                    <span v-if="!movie.isWatched">Watched</span>
                    <span v-else>Unwatched</span>
                </button>
                <button class="btn btn_delete" @click="movieStore.deleteMovie(movie.id)">Delete</button>
            </div>
            <div v-else class="movie-buttons">
                <button class="btn btn_primary" @click="searchStore.addToUserMovies(movie)">Add</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useMovieStore } from '../stores/MovieStore'
import { useSearchStore } from '../stores/SearchStore'

const searchStore = useSearchStore()

const props = defineProps({
    movie: {
        type: Object,
        required: true,
        default: () => {}
    },
    isDetail: {
        type: Boolean,
        required: false
    },
    isSearch: {
        type: Boolean,
        required: false
    }
})

const movieStore = useMovieStore()

</script>

<style lang="css" scoped>
.movie {
    display: grid;
    grid-template-columns: 95px 1fr;
    column-gap: 12px;
    margin-bottom: 32px;
}

.movie-link {
    display: flex;
}

.movie-img {
    width: 95px;
    height: 120px;
    object-fit: cover;
    border-radius: 16px;
}

.movie-info {
    display: flex;
    flex-direction: column;
}

.movie-name {
    margin-bottom: 8px;
    font-size: 20px;
    font-weight: 400;
    font-size: 16px;
}

.movie-overview {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    -webkit-line-clamp: 4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.movie-buttons {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: auto;
}

@media screen and (min-width: 768px) {
    .movie {
        grid-template-columns: 140px 1fr;
    }

    .movie-img {
        width: 140px;
        height: 176px;
    }
}
</style>