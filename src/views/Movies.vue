<template>
    <keep-alive>
        <div class="h-full overflow-y-scroll scrolling-touch" ref="movie-list">
            <!-- <Header /> -->
            <div class="relative mt-16 pb-20 max-w-6xl mx-auto">
                <div class="w-full lg:flex lg:items-start pt-6">
                    <div class="w-full h-full lg:w-4/6 md:px-12 lg:px-6">
                        <ScrollTopButton
                            :isScrollTopShow="isScrollTopShow"
                            @scrollTop="scrollTop"
                        />
                        <div
                            class="flex items-baseline justify-between px-6 lg:px-0"
                        >
                            <p class="text-sm text-gray-600 py-2">
                                Total Results:
                                {{ isLoading ? '' : totalResults }}
                            </p>
                            <SidebarButton />
                        </div>
                        <p
                            v-if="totalResults === 0 && !isLoading"
                            class="text-base p-6 italic"
                        >
                            No results
                        </p>
                        <div v-else class="relative">
                            <MovieCard
                                v-for="movie in movies"
                                :key="movie.id"
                                :movie="movie"
                            />
                        </div>
                        <p
                            v-if="currentPage === totalPages"
                            class="text-xs italic text-gray-500 text-center my-4"
                        >
                            The End Of The Results
                        </p>
                    </div>
                    <div class="lg:block lg:w-2/6 lg:px-6">
                        <Sidebar
                            :isSidebarOpen="isSidebarOpen"
                            :genres="genres"
                            @updateMovie="getAndUpdateMovies"
                            @scrollTop="scrollTop"
                        />
                    </div>
                </div>
            </div>
        </div>
    </keep-alive>
</template>

<script lang="ts">
import { TweenMax, Power3 } from 'gsap';
import { Component, Vue, Provide } from 'vue-property-decorator';
import * as Interface from '@/models/interface/interface';
import { QueryKey } from '@/models/enum/enum';
import { Getter, Action } from 'vuex-class';
import tmdbApi from '@/models/api/movies';
import MovieCard from '@/components/MovieCard/MovieCard.vue';
import Header from '@/components/Header/Header.vue';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import SidebarButton from '@/components/SidebarButton/SidebarButton.vue';
import ScrollTopButton from '@/components/ScrollTopButton/ScrollTopButton.vue';

@Component({
    components: {
        MovieCard,
        Header,
        Sidebar,
        SidebarButton,
        ScrollTopButton,
    },
})
export default class Movies extends Vue {
    isSidebarOpen: boolean = false; // open status of sidebar
    movies: Interface.IMovies[] = []; // movie list from TMDB API
    totalResults: number = 0; // total numbers of movie list
    totalPages: number = 0; // total pages of movie list
    currentPage: number = 1; // current page of AIP response
    genres: Interface.IGenre[] = []; // genres list of movies
    isLoading: boolean = false;
    isScrollTopShow: boolean = false;

    @Getter('movieQuery/getQuery') private getQuery!: Interface.IMovieQeury;
    @Action('movieQuery/setQuery') private setQuery!: any;

    @Provide() openSidebar() {
        this.isSidebarOpen = true;
    }

    @Provide() closeSidebar() {
        this.isSidebarOpen = false;
    }

    async getAndUpdateMovies() {
        this.isLoading = true;
        // Get movieQuery from Vuex
        const query = this.getQuery;
        // GET request for TMDB movies
        const data: Interface.IMoviesResponse = await tmdbApi.getMovies(query);
        // UPDATE data
        this.movies =
            query.page > 1 && query.page > this.currentPage
                ? this.movies.concat(data.results)
                : data.results;
        this.totalResults = data.total_results;
        this.totalPages = data.total_pages;
        this.currentPage = data.page;

        this.isLoading = false;

        // If screen size less than 1024 and sidebar is open, close sidebar
        if (window.innerWidth < 1024 && this.isSidebarOpen) {
            this.closeSidebar();
        }
    }

    // Show sidebar in large screen
    onResize() {
        window.innerWidth >= 1024 ? this.openSidebar() : this.closeSidebar();
    }

    scrollLoad(): void {
        const movieContainer = this.$refs['movie-list'] as HTMLElement;
        if (!movieContainer) return;

        movieContainer.addEventListener('scroll', () => {
            const query = this.getQuery;
            // REACH BOTTOM: scrollTop + clientHeight = scrollHeight
            const bottomOfWindow =
                movieContainer.scrollTop + movieContainer.clientHeight >=
                movieContainer.scrollHeight;

            if (bottomOfWindow && query.page < this.totalPages) {
                // Scroll loading
                query.page++;
                this.setQuery(query);
                this.getAndUpdateMovies();
            }
        });
    }

    showScrollTopButton(): void {
        const movieContainer = this.$refs['movie-list'] as HTMLElement;
        if (!movieContainer) return;

        movieContainer.addEventListener('scroll', () => {
            this.isScrollTopShow =
                movieContainer.scrollTop > 900 ? true : false;
        });
    }

    scrollTop() {
        const movieContainer = this.$refs['movie-list'] as HTMLElement;
        if (!movieContainer) return;

        TweenMax.to(movieContainer, 0.5, {
            scrollTop: 0,
            ease: Power3.easeInOut,
        });
    }

    async created() {
        this.onResize(); // Check when reloading the page
        window.addEventListener('resize', this.onResize); // Check when resizing the page

        // If on window top, load first page with query options
        if (window.scrollY === 0) {
            const query = this.getQuery;
            query.page = 1;
            this.setQuery(query);
        }

        // GET and UPDATE movies
        this.getAndUpdateMovies();

        // GET genres list of movies
        const genres = await tmdbApi.getGenres();
        this.genres = genres;

        // Scroll loading movies
        this.scrollLoad();

        // Show scroll top button
        this.showScrollTopButton();
    }

    beforeDestroy() {
        const movieContainer = this.$refs['movie-list'] as HTMLElement;

        window.removeEventListener('resize', this.onResize);
        movieContainer.removeEventListener('scroll', this.scrollLoad);
        movieContainer.removeEventListener('scroll', this.showScrollTopButton);
    }
}
</script>
