<template>
    <div
        class="flex items-start py-6 pr-6 ml-6 border-b border-gray-400 lg:pr-0 lg:ml-0"
    >
        <!-- Poster -->
        <img
            class="h-32 shadow-md rounded-sm sm:h-48 md:h-56"
            :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
            alt="movie poster"
        />
        <div class="pl-6">
            <div class="flex items-center">
                <h4 class="font-semibold text-lg text-gray-700">
                    {{ movie.title }}
                </h4>
                <span
                    class="ml-2 text-xs font-semibold text-gray-500 uppercase tracking-wide"
                    >{{ movie.original_language }}</span
                >
            </div>
            <div class="flex items-center sm:mt-1">
                <StarIcon
                    :scoreOfStars="scoreOfStarts"
                    :color="'text-yellow-600'"
                />
                <span class="text-xs font-semibold ml-2">
                    {{ scoreOfStarts }}
                    ({{ movie.vote_count }})
                    <span class="text-xs font-semibold hidden sm:inline-block"
                        >&bull; {{ movie.release_date }}</span
                    >
                </span>
            </div>
            <p class="hidden sm:block text-sm mt-4">{{ movie.overview }}</p>
            <div class="mt-4">
                <span
                    v-for="genreName in genreNames(movie.genre_ids)"
                    :key="genreName"
                    class="inline-block rounded-full px-1 mr-1 mb-1 text-xs tracking-wide break-word border bg-gray-400 sm:px-2 sm:py-1 sm:mr-2 sm:mb-2"
                    >{{ genreName }}</span
                >
            </div>
            <div class="flex items-center justify-end">
                <a
                    href="#"
                    class="inline-block mt-4 text-xs underline text-indigo-600 hover:text-indigo-400 transition-all"
                    >More Info >></a
                >
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import StarIcon from './StarIcon/StarIcon.vue';
import * as Interface from '@/models/interface/interface';

@Component({
    components: {
        StarIcon,
    },
})
export default class MovieCard extends Vue {
    @Prop({ default: {} }) readonly movie!: Interface.IMovies;
    @Prop({ default: [] }) readonly genres!: Interface.IGenre[];

    // Loop ids of movie genres and search with id of genre
    genreNames(ids: number[]) {
        // Convert array of genre_ids to genre_names
        return ids.map((id: number) => {
            if (this.genreObj[id]) return this.genreObj[id].name;
        });
    }

    // Convert response genres object to id indexes
    get genreObj() {
        const genreObj: Interface.IGenreObj = {};

        // Create a object with genre_ids as keys
        this.genres.forEach((genre: Interface.IGenre) => {
            const { id, name } = genre;
            genreObj[id] = { name }; // ex "28": { name: "Action" }
        });

        return genreObj;
    }

    get scoreOfStarts(): number {
        // Convert score format from max: 10 unit: 0.1 to max: 5 unit: 0.5
        // 2.3 -> 2 ; 2.6 -> 2.5
        return Math.floor(this.movie.vote_average) / 2;
    }
}
</script>
