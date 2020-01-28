<template>
    <div class="overflow-x-hidden w-full mt-16 pb-6">
        <div class="fixed w-full h-56 z-20 sm:hidden">
            <div class="bg-gray-900 opacity-25 absolute inset-0"></div>
            <img
                class="object-cover h-full w-full"
                :src="
                    `https://image.tmdb.org/t/p/w1280${movieDetail.backdrop_path}`
                "
            />
        </div>
        <!-- Banner -->
        <div class="relative px-4 sm:px-0 mt-48 sm:mt-0 z-30 bg-gray-300">
            <MovieDetailBanner :movieDetail="movieDetail" />
        </div>
        <div class="relative px-4 z-30 bg-gray-200 max-w-3xl mx-auto">
            <!-- People -->
            <SectionTitle
                :title="'Actors/Actress'"
                :isShowBtn="displayMovieCasts.length < movieCasts.length"
                :btnName="'Show All'"
                @handleClick="expandCast"
            />
            <!-- <div class="flex items-center justify-between section-title">
                <span class="text-gray-700">Actors/Actress</span>
                <a
                    class="text-indigo-500 hover:text-indigo-600 cursor-pointer transition-color"
                >Show All</a>
            </div>-->
            <div class="flex flex-wrap sm:-m-2">
                <div
                    v-for="(movieCast, i) in displayMovieCasts"
                    :key="i"
                    class="w-full sm:w-1/2 py-2 sm:p-2"
                >
                    <MovieDetailPeople :movieCast="movieCast" />
                </div>
            </div>
            <!-- Images -->
            <div class="flex items-center justify-between section-title">
                <span class="text-gray-700">Images</span>
                <a
                    class="text-indigo-500 hover:text-indigo-600 cursor-pointer transition-color"
                    >Show All</a
                >
            </div>
            <MovieDetailImageGrid :movieImages="movieImages" />
            <!-- Similar Movies -->
            <div class="flex items-center justify-between section-title">
                <span class="text-gray-700">Similar Movies</span>
            </div>
            <div
                class="flex items-start overflow-x-scroll customize-scroll py-2"
            >
                <div
                    v-for="similarMovie in similarMovies"
                    :key="similarMovie.id"
                >
                    <div class="w-24 sm:w-32 mr-2 sm:mr-4">
                        <MovieDetailSimilar :similarMovie="similarMovie" />
                    </div>
                </div>
            </div>
            <!-- Reviews -->
            <div class="section-title">
                <span class="text-gray-700">Reviews</span>
            </div>
            <div class="py-2">
                <MovieDetailReview
                    v-for="movieReview in movieReviews"
                    :movieReview="movieReview"
                    :key="movieReview.id"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import * as Interface from '@/models/interface/interface';
import { Getter, Action } from 'vuex-class';
import tmdbApi from '@/models/api/movies';
import MovieDetailBanner from '@/components/MovieDetail/MovieDetailBanner.vue';
import MovieDetailImageGrid from '@/components/MovieDetail/MovieDetailImageGrid.vue';
import MovieDetailPeople from '@/components/MovieDetail/MovieDetailPeople.vue';
import MovieDetailReview from '@/components/MovieDetail/MovieDetailReview.vue';
import MovieDetailSimilar from '@/components/MovieDetail/MovieDetailSimilar.vue';
import SectionTitle from '@/components/SectionTitle/SectionTitle.vue';

@Component({
    components: {
        MovieDetailBanner,
        MovieDetailImageGrid,
        MovieDetailPeople,
        MovieDetailReview,
        MovieDetailSimilar,
        SectionTitle,
    },
})
export default class MovieDetail extends Vue {
    movieId: string = '';
    movieDetail: Interface.IMovieDetail = <Interface.IMovieDetail>{};
    movieCasts: Interface.IMovieCast[] = [];
    displayMovieCasts: Interface.IMovieCast[] = [];
    movieImages: Interface.IMovieImage[] = [];
    similarMovies: Interface.IMovieSimilar[] = [];
    movieReviews: Interface.IMovieReview[] = [];
    currentReviewPage: number = 0;

    expandCast() {
        this.displayMovieCasts = this.movieCasts;
    }

    async created() {
        // Get movie id from route
        this.movieId = this.$route.params.movieId;
        // If movie is invalid

        // GET movie detail
        const getMovieDetail = tmdbApi.getMovieDetail(this.movieId);
        const getMovieImages = tmdbApi.getMovieImages(this.movieId);
        const getMovieReviews = tmdbApi.getMovieReviews(this.movieId);
        const getSimilarMovies = tmdbApi.getSimilarMovies(this.movieId);
        const getMoviePeople = tmdbApi.getMoviePeople(this.movieId);

        await Promise.all([
            getMovieDetail,
            getMovieImages,
            getMovieReviews,
            getSimilarMovies,
            getMoviePeople,
        ]);

        this.movieDetail = await getMovieDetail;
        this.movieImages = (await getMovieImages).backdrops;
        this.movieReviews = (await getMovieReviews).results;
        this.similarMovies = (await getSimilarMovies).results;
        this.movieCasts = (await getMoviePeople).cast;
        this.displayMovieCasts = this.movieCasts.slice(0, 6);
    }
}
</script>
<style scoped>
.customize-scroll::-webkit-scrollbar {
    @apply h-1 bg-gray-300;
}
.customize-scroll::-webkit-scrollbar-track {
    /* background: #f1f1f1; */
    @apply bg-gray-300;
}

.customize-scroll::-webkit-scrollbar-thumb {
    @apply bg-gray-500 rounded-full transition-bg;
}

.customize-scroll::-webkit-scrollbar-thumb:hover {
    @apply bg-gray-500;
}
</style>
