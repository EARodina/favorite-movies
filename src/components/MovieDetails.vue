<template>
    <div class="movie-back">
        <button class="movie-back__btn" @click="$router.push({ path: '/movies' })">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6809 17.5C12.515 17.5 12.3492 17.4394 12.2183 17.3097L6.52726 11.6687C5.60204 10.7516 5.60204 9.24621 6.52726 8.32913L12.2183 2.68818C12.4714 2.43727 12.8904 2.43727 13.1435 2.68818C13.3966 2.93908 13.3966 3.35436 13.1435 3.60526L7.45249 9.24622C7.03352 9.6615 7.03352 10.3363 7.45249 10.7516L13.1435 16.3926C13.3966 16.6435 13.3966 17.0588 13.1435 17.3097C13.0126 17.4308 12.8467 17.5 12.6809 17.5Z" fill="white"/>
            </svg>
        </button>
        <span class="movie-back__label">Detail</span>
    </div>

    <div v-if="movie" class="movie-card">
        <div class="movie-card__backdrop">
            <img :src="movie.backdrop.url !== null ? movie.backdrop.url : '/no-avatar.jpg'" :alt="movie.alternativeName">
        </div>
        <div class="movie-card__info">
            <div class="movie-card__head">
                <div class="movie-card__poster">
                    <img :src="movie.poster.url !== null ? movie.poster.url : '/no-avatar.jpg'" :alt="movie.alternativeName">
                </div>
                <h1 class="movie-card__title">{{ movie.alternativeName }}</h1>
            </div>
            <div class="movie-card__properties">
                <span class="movie-card__properties-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.27569 11.9208L11.4279 13.9179C11.8308 14.1732 12.3311 13.7935 12.2115 13.3232L11.3008 9.74052C11.2752 9.64073 11.2782 9.53573 11.3096 9.4376C11.3409 9.33946 11.3994 9.25218 11.4781 9.18577L14.3049 6.83306C14.6763 6.52392 14.4846 5.90751 14.0074 5.87654L10.3159 5.63696C10.2165 5.62986 10.1211 5.59465 10.0409 5.53545C9.96069 5.47625 9.89896 5.39548 9.86289 5.30255L8.48612 1.83549C8.44869 1.73685 8.38215 1.65194 8.29532 1.59201C8.2085 1.53209 8.1055 1.5 8 1.5C7.89451 1.5 7.79151 1.53209 7.70468 1.59201C7.61786 1.65194 7.55131 1.73685 7.51389 1.83549L6.13712 5.30255C6.10104 5.39548 6.03931 5.47625 5.95912 5.53545C5.87892 5.59465 5.78355 5.62986 5.68412 5.63696L1.99263 5.87654C1.51544 5.90751 1.32373 6.52392 1.69515 6.83306L4.52185 9.18577C4.60063 9.25218 4.65906 9.33946 4.69044 9.4376C4.72181 9.53573 4.72485 9.64073 4.6992 9.74052L3.85459 13.063C3.71111 13.6274 4.31143 14.083 4.79495 13.7767L7.72431 11.9208C7.8067 11.8683 7.90234 11.8405 8 11.8405C8.09767 11.8405 8.1933 11.8683 8.27569 11.9208V11.9208Z" stroke="#FF8700" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>{{ movie.rating.imdb }}</span>
                </span>
                |
                <span class="movie-card__properties-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5Z" stroke="#92929D" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11 1.5V3.5" stroke="#92929D" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5 1.5V3.5" stroke="#92929D" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.5 5.5H13.5" stroke="#92929D" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>{{ movie.year }}</span>
                </span>
                |
                <span class="movie-card__properties-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#92929D" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 4.5V8H11.5" stroke="#92929D" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>{{ movie.movieLength ? `${movie.movieLength} Minutes` : '_ Minutes' }}</span>
                </span>
            </div>
            <div class="movie-card__description">{{ movie.description }}</div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useMovieStore } from '../stores/MovieStore'
import { useRoute } from 'vue-router';

const route = useRoute()
const movieStore = useMovieStore()

onMounted(() => movieStore.loadMovies())

const movie = computed(() => {
    return movieStore.movies.find(item => item.id == route.params.id)
})
</script>

<style scoped>
.movie-back {
    display: grid;
    grid-template-columns: 32px 1fr 32px;
    align-items: center;
    margin-bottom: 24px;
}

.movie-back__btn {
    height: 20px;
    background: none;
    border: 0;
    cursor: pointer;
}

.movie-back__btn:hover svg path {
    fill: #6100C2;
}

.movie-back__label {
    flex-grow: 1;
    font-weight: 500;
    text-align: center;
}

.movie-card {
    display: flex;
    flex-direction: column;
}

.movie-card__backdrop {
    position: relative;
    height: 210px;
    margin-bottom: 12px;
}

.movie-card__backdrop img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.movie-card__info {
    padding: 0 16px;
}

.movie-card__head {
    position: relative;
    margin-bottom: 12px;
}

.movie-card__poster {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 95px;
    height: 120px;
    border-radius: 16px;
    overflow: hidden;
    z-index: 1;
}

.movie-card__poster img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.movie-card__title {
    margin-left: 107px;
    font-weight: 600;
    font-size: 18px;
}

.movie-card__properties {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0 12px;
    margin-bottom: 20px;
    color: #92929d;
}

.movie-card__properties-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 0.01em;
    color: #92929d;
}

.movie-card__description {
    font-size: 14px;
}

@media screen and (min-width: 768px) {
    .movie-card__backdrop {
        height: 300px;
    }

    .movie-card__properties {
        margin-bottom: 30px;
    }

    .movie-card__info {
        padding: 0 30px;
    }

    .movie-card__description {
        font-size: 16px;
    }
}
</style>