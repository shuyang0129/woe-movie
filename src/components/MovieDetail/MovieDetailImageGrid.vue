<template>
    <div v-if="movieImages.length > 0" class="flex flex-wrap -mx-1">
        <img
            class="object-cover rounded-sm h-24 sm:h-32 w-2/3 p-1 cursor-pointer"
            :src="`https://image.tmdb.org/t/p/w1280${movieImages[0].file_path}`"
        />
        <img
            class="object-cover rounded-sm h-24 sm:h-32 w-1/3 p-1 cursor-pointer"
            :src="`https://image.tmdb.org/t/p/w1280${movieImages[1].file_path}`"
        />
        <img
            class="object-cover rounded-sm h-24 sm:h-32 w-1/3 p-1 cursor-pointer"
            :src="`https://image.tmdb.org/t/p/w1280${movieImages[2].file_path}`"
        />
        <img
            class="object-cover rounded-sm h-24 sm:h-32 w-1/3 p-1 cursor-pointer"
            :src="`https://image.tmdb.org/t/p/w1280${movieImages[3].file_path}`"
        />
        <img
            class="object-cover rounded-sm h-48 sm:h-64 w-1/3 p-1 cursor-pointer"
            :src="`https://image.tmdb.org/t/p/w1280${movieImages[4].file_path}`"
        />
        <img
            class="object-cover rounded-sm h-24 sm:h-32 w-2/3 p-1 -mt-24 sm:-mt-32 cursor-pointer"
            :src="`https://image.tmdb.org/t/p/w1280${movieImages[5].file_path}`"
        />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator';
import * as Interface from '@/models/interface/interface';
import { Getter, Action } from 'vuex-class';

@Component({
    components: {},
})
export default class MovieDetailImageGrid extends Vue {
    @Prop() movieImages!: Interface.IMovieImage[];
}
</script>
