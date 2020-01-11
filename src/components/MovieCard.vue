<template>
    <div class="flex items-start py-6 pr-6 ml-6 border-b border-gray-400 lg:pr-0 lg:ml-0">
        <img
            class="h-32 shadow-md rounded-sm sm:h-48 md:h-56"
            :src="movie.poster_path"
            alt="movie poster"
        />
        <div class="pl-6">
            <div class="flex items-center">
                <h4 class="font-semibold text-lg text-gray-700">{{ movie.title }}</h4>
                <span
                    class="ml-2 text-xs font-semibold text-gray-500 uppercase tracking-wide"
                >{{ movie.original_language }}</span>
            </div>
            <div class="flex items-center sm:mt-1">
                <StarIcon :scoreOfStars="scoreOfStarts" :color="'text-yellow-600'" />
                <span class="text-xs font-semibold ml-2">
                    {{ scoreOfStarts }}
                    ({{ movie.vote_count }})
                    <span
                        class="text-xs font-semibold hidden sm:inline-block"
                    >&bull; {{ movie.release_date }}</span>
                </span>
            </div>
            <p class="hidden sm:block text-sm mt-4">{{ movie.overview }}</p>
            <div class="mt-4">
                <span
                    v-for="genreName in genreNames(movie.genre_ids)"
                    :key="genreName"
                    class="inline-block rounded-full px-1 mr-1 mb-1 text-xs tracking-wide break-word border bg-gray-400 sm:px-2 sm:py-1 sm:mr-2 sm:mb-2"
                >{{ genreName }}</span>
            </div>
            <a
                href="#"
                class="block text-right mt-4 text-xs underline text-indigo-600 hover:text-indigo-400"
            >More Info >></a>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import StarIcon from './StarIcon/StarIcon.vue';
import * as Interface from '@/models/interface';

@Component({
    components: {
        StarIcon,
    },
})
export default class MovieCard extends Vue {
    movie: any = {
        popularity: 752.439,
        vote_count: 1694,
        video: false,
        poster_path:
            'https://image.tmdb.org/t/p/original/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg',
        id: 419704,
        adult: false,
        backdrop_path:
            'https://image.tmdb.org/t/p/original/p3TCqUDoVsrIm8fHK9KOTfWnDjZ.jpg',
        original_language: 'en',
        original_title: 'Ad Astra',
        genre_ids: [12, 18, 9648, 878, 53],
        title: 'Ad Astra',
        vote_average: 5.8,
        overview:
            'The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.',
        release_date: '2019-09-17',
    };

    genres: any = [
        {
            id: 28,
            name: 'Action',
        },
        {
            id: 12,
            name: 'Adventure',
        },
        {
            id: 16,
            name: 'Animation',
        },
        {
            id: 35,
            name: 'Comedy',
        },
        {
            id: 80,
            name: 'Crime',
        },
        {
            id: 99,
            name: 'Documentary',
        },
        {
            id: 18,
            name: 'Drama',
        },
        {
            id: 10751,
            name: 'Family',
        },
        {
            id: 14,
            name: 'Fantasy',
        },
        {
            id: 36,
            name: 'History',
        },
        {
            id: 27,
            name: 'Horror',
        },
        {
            id: 10402,
            name: 'Music',
        },
        {
            id: 9648,
            name: 'Mystery',
        },
        {
            id: 10749,
            name: 'Romance',
        },
        {
            id: 878,
            name: 'Science Fiction',
        },
        {
            id: 10770,
            name: 'TV Movie',
        },
        {
            id: 53,
            name: 'Thriller',
        },
        {
            id: 10752,
            name: 'War',
        },
        {
            id: 37,
            name: 'Western',
        },
    ];

    get scoreOfStarts(): number {
        // Convert score format from max: 10 unit: 0.1 to max: 5 unit: 0.5
        // 2.3 -> 2 ; 2.6 -> 2.5
        return Math.floor(this.movie.vote_average) / 2;
    }

    genreNames(ids: number[]): string[] {
        // Convert array of genre_ids to genre_names
        return ids.map((id: number) => this.genreObj[id].name);
    }

    get genreObj() {
        const genreObj: Interface.IGenreObj = {};

        // Create a object with genre_ids as keys
        this.genres.forEach((genre: Interface.IGenre) => {
            const { id, name } = genre;
            genreObj[id] = { name };
        });

        return genreObj;
    }
}
</script>
