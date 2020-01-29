<template>
    <div v-if="!isLoading" class="overflow-x-hidden w-full mt-16 pb-6">
        <!-- Lightbox -->
        <Lightbox
            :isLightboxOpen="isLightboxOpen"
            :movieImages="movieImages"
            :selectedImage="selectedImage"
            @closeLightbox="closeLightbox"
        />
        <div class="fixed w-full h-56 z-20 sm:hidden">
            <div class="bg-gray-900 opacity-25 absolute inset-0"></div>
            <img
                v-if="movieDetail.backdrop_path"
                class="object-cover h-full w-full"
                :src="movieDetail.backdrop_path | tmdbImagePath('w1280')"
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
                    @click="openLightbox()"
                    class="text-indigo-500 hover:text-indigo-600 cursor-pointer transition-color"
                    >Show All</a
                >
            </div>
            <MovieDetailImageGrid
                :movieImages="movieImages"
                @handleClick="openLightbox"
            />
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
            <p class="text-xs italic text-gray-500 text-center">
                The End Of The Page
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Watch } from 'vue-property-decorator';
import * as Interface from '@/models/interface/interface';
import { Getter, Action } from 'vuex-class';
import tmdbApi from '@/models/api/movies';
import MovieDetailBanner from '@/components/MovieDetail/MovieDetailBanner.vue';
import MovieDetailImageGrid from '@/components/MovieDetail/MovieDetailImageGrid.vue';
import MovieDetailPeople from '@/components/MovieDetail/MovieDetailPeople.vue';
import MovieDetailReview from '@/components/MovieDetail/MovieDetailReview.vue';
import MovieDetailSimilar from '@/components/MovieDetail/MovieDetailSimilar.vue';
import SectionTitle from '@/components/SectionTitle/SectionTitle.vue';
import Lightbox from '@/views/Lightbox.vue';
import { tmdbImagePath } from '@/utilities/display-filter';

@Component({
    components: {
        MovieDetailBanner,
        MovieDetailImageGrid,
        MovieDetailPeople,
        MovieDetailReview,
        MovieDetailSimilar,
        SectionTitle,
        Lightbox,
    },
    filters: {
        tmdbImagePath,
    },
})
export default class MovieDetail extends Vue {
    movieId: string = '';

    movieDetail = {} as Interface.IMovieDetail;
    movieCasts: Interface.IMovieCast[] = [];
    displayMovieCasts: Interface.IMovieCast[] = []; // Restrict the number of cast display on screen
    movieImages: Interface.IMovieImage[] = [];
    similarMovies: Interface.IMovieSimilar[] = [];
    movieReviews: Interface.IMovieReview[] = [];

    currentReviewPage: number = 0;
    isLoading: boolean = true;
    isLightboxOpen: boolean = false;
    selectedImage = {} as Interface.IMovieImage;

    expandCast() {
        this.displayMovieCasts = this.movieCasts;
    }

    @Watch('$route', { immediate: false, deep: true })
    reloadPage() {
        location.reload();
        window.scrollTo(0, 0);
    }

    openLightbox(img?: Interface.IMovieImage) {
        this.selectedImage = img ? img : this.movieImages[0];
        this.isLightboxOpen = true;
    }

    closeLightbox() {
        this.isLightboxOpen = false;
    }

    async created() {
        // Get movie id from route
        this.movieId = this.$route.params.movieId;
        // If movie is invalid

        // GET movie data
        this.isLoading = true;

        const [
            getMovieDetail, // 1) Movie detail
            getMovieImages, // 2) Movie image
            getMovieReviews, // 3) Movie review
            getSimilarMovies, // 4) Similar movie
            getMoviePeople, // 5) Movie people
        ] = await Promise.all([
            tmdbApi.getMovieDetail(this.movieId), // 1)
            tmdbApi.getMovieImages(this.movieId), // 2)
            tmdbApi.getMovieReviews(this.movieId), // 3)
            tmdbApi.getSimilarMovies(this.movieId), // 4)
            tmdbApi.getMoviePeople(this.movieId), // 5)
        ]);

        this.movieDetail = getMovieDetail;
        this.movieImages = getMovieImages.backdrops;
        this.selectedImage = this.movieImages[0];
        this.movieReviews = getMovieReviews.results;
        this.similarMovies = getSimilarMovies.results;
        this.movieCasts = getMoviePeople.cast;
        this.displayMovieCasts = this.movieCasts.slice(0, 6);

        this.isLoading = false;
    }
}
</script>
