<template>
    <div class="h-full overflow-y-scroll scrolling-touch">
        <div class="relative mt-16 pb-20 max-w-6xl mx-auto">
            <div class="relative px-4 z-30 bg-gray-200 max-w-3xl mx-auto">
                <SectionTitle :title="'Popular Movies'" :isShowBtn="false" />
                <MovieCardSimpleList :movies="popularMovies" />
            </div>
            <div class="relative px-4 z-30 bg-gray-200 max-w-3xl mx-auto">
                <SectionTitle :title="'Top Rated Movies'" :isShowBtn="false" />
                <MovieCardSimpleList :movies="topRatedMovies" />
            </div>
            <div class="relative px-4 z-30 bg-gray-200 max-w-3xl mx-auto">
                <SectionTitle
                    :title="`Popular Movies In ${currentYear}`"
                    :isShowBtn="false"
                />
                <MovieCardSimpleList :movies="popularMoviesInThisYear" />
            </div>
            <div class="relative px-4 z-30 bg-gray-200 max-w-3xl mx-auto">
                <SectionTitle
                    :title="`Popular Action Movies`"
                    :isShowBtn="false"
                />
                <MovieCardSimpleList :movies="popularActionMovie" />
            </div>
            <div class="relative px-4 z-30 bg-gray-200 max-w-3xl mx-auto">
                <SectionTitle
                    :title="`Popular Animation Movies`"
                    :isShowBtn="false"
                />
                <MovieCardSimpleList :movies="popularAnimationMovie" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import * as Interface from '@/models/interface/interface';
import { Getter, Action } from 'vuex-class';
import MovieCardSimpleList from '@/components/MovieCard/MovieCardSimpleList.vue';
import SectionTitle from '@/components/SectionTitle/SectionTitle.vue';
import tmdbApi from '@/models/api/movies';
import { QueryKey } from '@/models/enum/enum';

@Component({
    components: {
        MovieCardSimpleList,
        SectionTitle,
    },
})
export default class Home extends Vue {
    popularMovies: Interface.IMovieSimilar[] = [];
    topRatedMovies: Interface.IMovieSimilar[] = [];
    popularMoviesInThisYear: Interface.IMovieSimilar[] = [];
    popularActionMovie: Interface.IMovieSimilar[] = [];
    popularAnimationMovie: Interface.IMovieSimilar[] = [];
    currentYear: any = new Date().getFullYear();
    @Getter('movieQuery/getQuery') private getQuery!: Interface.IMovieQeury;

    async created() {
        const query: any = {};
        const [
            popularMovies,
            topRatedMovies,
            popularMoviesInThisYear,
            popularActionMovie,
            popularAnimationMovie,
        ] = await Promise.all([
            tmdbApi.getMovies(this.queryOfPopularMovie),
            tmdbApi.getMovies(this.queryOfTopRatedMovie),
            tmdbApi.getMovies(this.queryOfPopularMovieInThisYear),
            tmdbApi.getMovies(this.queryOfPopularActionMovie),
            tmdbApi.getMovies(this.queryOfPopularAnimationMovie),
        ]);
        // const data: Interface.IMoviesResponse = await tmdbApi.getMovies(query);

        this.popularMovies = popularMovies.results.filter(
            movie => movie.poster_path
        );
        this.topRatedMovies = topRatedMovies.results.filter(
            movie => movie.poster_path
        );
        this.popularMoviesInThisYear = popularMoviesInThisYear.results.filter(
            movie => movie.poster_path
        );
        this.popularActionMovie = popularActionMovie.results.filter(
            movie => movie.poster_path
        );
        this.popularAnimationMovie = popularAnimationMovie.results.filter(
            movie => movie.poster_path
        );
    }

    // get currentYear() {
    //     // const currentYear = new Date.now().getFullYear();
    // }

    get queryOfTopRatedMovie() {
        const query: any = {};

        query[QueryKey.WITH_ORIDINAL_LANGUAGE] = '';
        query[QueryKey.SORT_BY] = 'vote_average.desc';
        query[QueryKey.PRIMARY_RELEASE_YEAR] = '';
        query[QueryKey.WITH_GENRES] = '';
        query[QueryKey.PAGE] = 1;
        query[QueryKey.INCLUDE_VIDOE] = true;

        return query;
    }

    get queryOfPopularMovie() {
        const query: any = {};

        query[QueryKey.WITH_ORIDINAL_LANGUAGE] = '';
        query[QueryKey.SORT_BY] = 'popularity.desc';
        query[QueryKey.PRIMARY_RELEASE_YEAR] = '';
        query[QueryKey.WITH_GENRES] = '';
        query[QueryKey.PAGE] = 1;
        query[QueryKey.INCLUDE_VIDOE] = true;

        return query;
    }

    get queryOfPopularActionMovie() {
        const query: any = {};

        query[QueryKey.WITH_ORIDINAL_LANGUAGE] = '';
        query[QueryKey.SORT_BY] = 'popularity.desc';
        query[QueryKey.PRIMARY_RELEASE_YEAR] = '';
        query[QueryKey.WITH_GENRES] = '28';
        query[QueryKey.PAGE] = 1;
        query[QueryKey.INCLUDE_VIDOE] = true;

        return query;
    }

    get queryOfPopularAnimationMovie() {
        const query: any = {};

        query[QueryKey.WITH_ORIDINAL_LANGUAGE] = '';
        query[QueryKey.SORT_BY] = 'popularity.desc';
        query[QueryKey.PRIMARY_RELEASE_YEAR] = '';
        query[QueryKey.WITH_GENRES] = '16';
        query[QueryKey.PAGE] = 1;
        query[QueryKey.INCLUDE_VIDOE] = true;

        return query;
    }

    get queryOfPopularMovieInThisYear() {
        const query: any = {};

        query[QueryKey.WITH_ORIDINAL_LANGUAGE] = '';
        query[QueryKey.SORT_BY] = 'popularity.desc';
        query[QueryKey.PRIMARY_RELEASE_YEAR] = `${this.currentYear}`;
        query[QueryKey.WITH_GENRES] = '';
        query[QueryKey.PAGE] = 1;
        query[QueryKey.INCLUDE_VIDOE] = true;

        return query;
    }

    get queryOfBestMovieInThisYear() {
        const query: any = {};

        query[QueryKey.WITH_ORIDINAL_LANGUAGE] = '';
        query[QueryKey.SORT_BY] = 'vote_average.desc';
        query[QueryKey.PRIMARY_RELEASE_YEAR] = new Date().getFullYear();
        query[QueryKey.WITH_GENRES] = '';
        query[QueryKey.PAGE] = 1;
        query[QueryKey.INCLUDE_VIDOE] = true;

        return query;
    }
}
</script>
