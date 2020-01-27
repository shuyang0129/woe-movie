<template>
    <div class="flex flex-wrap -mx-1">
        <img
            class="object-cover rounded-sm h-24 sm:h-32 w-2/3 p-1"
            src="https://image.tmdb.org/t/p/w1280/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg"
        />
        <img
            class="object-cover rounded-sm h-24 sm:h-32 w-1/3 p-1"
            src="https://image.tmdb.org/t/p/w1280/pLO4qJdQxhAMPaFJu7q8bgme6R3.jpg"
        />
        <img
            class="object-cover rounded-sm h-24 sm:h-32 w-1/3 p-1"
            src="https://image.tmdb.org/t/p/w1280/qR1yyZe3X14opqBmeHRLXmfVcot.jpg"
        />
        <img
            class="object-cover rounded-sm h-24 sm:h-32 w-1/3 p-1"
            src="https://image.tmdb.org/t/p/w1280/hd8H2TvqtAbqYnBUbf5AdXZf87s.jpg"
        />
        <img
            class="object-cover rounded-sm h-48 sm:h-64 w-1/3 p-1"
            src="https://image.tmdb.org/t/p/w1280/1JlbnzFqp0KQBquCvSmoeWMe274.jpg"
        />
        <img
            class="object-cover rounded-sm h-24 sm:h-32 w-2/3 p-1 -mt-24 sm:-mt-32"
            src="https://image.tmdb.org/t/p/w1280/vu5Mv3CXlz5np1breEsKSUA2YX1.jpg"
        />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import * as Interface from '@/models/interface/interface';
import { Getter, Action } from 'vuex-class';

@Component({
    components: {},
})
export default class MovieDetailImageGrid extends Vue {}
</script>
