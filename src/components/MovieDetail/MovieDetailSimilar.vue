<template>
    <div class>
        <img
            class="w-full object-cover mx-1 rounded-sm shadow"
            src="https://image.tmdb.org/t/p/w300/ktPbjD6nYg5NxmeTt72Iqaw5GD0.jpg"
            alt
        />
        <div class="flex flex-col items-center my-2">
            <h4 class="text-gray-900 font-semibold text-xs sm:text-sm break-all">Joker</h4>
            <div class="flex items-center hidden sm:block">
                <StarIcon :scoreOfStars="scoreOfStars" :color="'text-yellow-600'" />
                <span class="text-xs font-semibold ml-2">5(288)</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import * as Interface from '@/models/interface/interface';
import { Getter, Action } from 'vuex-class';
import StarIcon from '@/components/StarIcon/StarIcon.vue';

@Component({
    components: {
        StarIcon,
    },
})
export default class MovieDetailSimilar extends Vue {
    scoreOfStars: number = 10;
}
</script>
