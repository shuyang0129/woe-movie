<template>
    <div
        class="flex items-start w-full py-6 pr-6 ml-6 border-b border-gray-400 lg:pr-0 lg:ml-0"
    >
        <!-- Poster -->
        <img
            v-if="movie.poster_path"
            class="h-32 shadow-md rounded-sm sm:h-48 md:h-56"
            :src="`https://image.tmdb.org/t/p/w185/${movie.poster_path}`"
            alt="movie poster"
        />
        <div class="px-6 lg:pr-0 flex-grow">
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
                    :scoreOfStars="scoreOfStars"
                    :color="'text-yellow-600'"
                />
                <span class="text-xs font-semibold ml-2">
                    {{ scoreOfStars }}
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
                <router-link
                    :to="`/movies/${movie.id}`"
                    class="inline-block mt-4 text-xs underline text-indigo-600 hover:text-indigo-400 transition-all"
                    >More Info >></router-link
                >
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import StarIcon from '@/components/StarIcon/StarIcon.vue';
import * as Interface from '@/models/interface/interface';

@Component({
    components: {
        StarIcon,
    },
})
export default class MovieCard extends Vue {
    @Prop({ default: {} }) readonly movie!: Interface.IMovies;
    @Getter('movieGenres/getGenreObj')
    private getGenreObj!: Interface.IGenreObj;

    // Loop ids of movie genres and search with id of genre
    genreNames(ids: number[]) {
        // Convert array of genre_ids to genre_names
        return ids.map((id: number) => {
            if (this.getGenreObj[id]) return this.getGenreObj[id].name;
        });
    }

    get scoreOfStars(): number {
        // Convert score format from max: 10 unit: 0.1 to max: 5 unit: 0.5
        // 2.3 -> 2 ; 2.6 -> 2.5
        return Math.floor(this.movie.vote_average) / 2;
    }
}
</script>
