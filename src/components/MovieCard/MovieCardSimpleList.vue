<template>
    <div
        v-if="movies.length > 0"
        class="flex items-start overflow-x-scroll customize-scroll py-2"
    >
        <div v-for="movie in movies" :key="movie.id">
            <div class="w-24 sm:w-32 mr-2 sm:mr-4">
                <MovieCardSimple :movie="movie" />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Provide, Watch, Prop } from 'vue-property-decorator';
import MovieCardSimple from '@/components/MovieCard/MovieCardSimple.vue';
import * as Interface from '@/models/interface/interface';

@Component({
    components: {
        MovieCardSimple,
    },
})
export default class MovieDetail extends Vue {
    @Prop() movies!: Interface.IMovieSimilar[] | Interface.IMovies[];
}
</script>
