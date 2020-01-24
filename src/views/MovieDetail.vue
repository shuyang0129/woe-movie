<template>
    <div>
        <h4>{{ movieDetail.title }}</h4>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import * as Interface from '@/models/interface/interface';
import { Getter, Action } from 'vuex-class';
import tmdbApi from '@/models/api/movies';

@Component({
    components: {},
})
export default class MovieDetail extends Vue {
    movieDetail: any = {};

    async created() {
        this.movieDetail = await tmdbApi.getMovieDetail(290859);
    }
}
</script>
