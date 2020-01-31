<template>
    <div class="w-full h-full">
        <router-link
            tag="img"
            :to="`/movies/${movie.id}`"
            class="w-full object-cover mx-1 rounded-sm shadow cursor-pointer"
            :src="movie.poster_path | tmdbImagePath('w300')"
            alt
        />
        <div class="flex flex-col items-center text-center my-2">
            <h4
                class="text-gray-700 font-semibold sm:font-bold text-xs break-words"
            >
                {{ movie.title }}
            </h4>
            <div class="flex flex-col items-center mt-1 hidden sm:block">
                <StarIcon
                    :scoreOfStars="movie.vote_average | scoreOfStars"
                    :color="'text-yellow-600'"
                />
                <span class="text-xs font-semibold"
                    >{{ movie.vote_average | scoreOfStars }} ({{
                        movie.vote_count
                    }})</span
                >
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop, Watch } from 'vue-property-decorator';
import * as Interface from '@/models/interface/interface';
import { Getter, Action } from 'vuex-class';
import StarIcon from '@/components/StarIcon/StarIcon.vue';
import { scoreOfStars, tmdbImagePath } from '@/utilities/display-filter';

@Component({
    components: {
        StarIcon,
    },
    filters: {
        scoreOfStars,
        tmdbImagePath,
    },
})
export default class MovieDetailSimilar extends Vue {
    @Prop() movie!: Interface.IMovieSimilar;
}
</script>
