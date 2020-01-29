<template>
    <div v-if="movieImages.length > 0" class="flex flex-wrap -mx-1">
        <img
            @click="handleClick(movieImages[0])"
            class="object-cover rounded-sm h-24 sm:h-32 w-2/3 p-1 cursor-pointer"
            :src="movieImages[0].file_path | tmdbImagePath('w1280')"
        />
        <img
            @click="handleClick(movieImages[1])"
            class="object-cover rounded-sm h-24 sm:h-32 w-1/3 p-1 cursor-pointer"
            :src="movieImages[1].file_path | tmdbImagePath('w1280')"
        />
        <img
            @click="handleClick(movieImages[2])"
            class="object-cover rounded-sm h-24 sm:h-32 w-1/3 p-1 cursor-pointer"
            :src="movieImages[2].file_path | tmdbImagePath('w1280')"
        />
        <img
            @click="handleClick(movieImages[3])"
            class="object-cover rounded-sm h-24 sm:h-32 w-1/3 p-1 cursor-pointer"
            :src="movieImages[3].file_path | tmdbImagePath('w1280')"
        />
        <img
            @click="handleClick(movieImages[4])"
            class="object-cover rounded-sm h-48 sm:h-64 w-1/3 p-1 cursor-pointer"
            :src="movieImages[4].file_path | tmdbImagePath('w1280')"
        />
        <img
            @click="handleClick(movieImages[5])"
            class="object-cover rounded-sm h-24 sm:h-32 w-2/3 p-1 -mt-24 sm:-mt-32 cursor-pointer"
            :src="movieImages[5].file_path | tmdbImagePath('w1280')"
        />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator';
import * as Interface from '@/models/interface/interface';
import { Getter, Action } from 'vuex-class';
import { tmdbImagePath } from '@/utilities/display-filter';

@Component({
    components: {},
    filters: {
        tmdbImagePath,
    },
})
export default class MovieDetailImageGrid extends Vue {
    @Prop() movieImages!: Interface.IMovieImage[];

    handleClick(img: Interface.IMovieImage) {
        this.$emit('handleClick', img);
    }
}
</script>
