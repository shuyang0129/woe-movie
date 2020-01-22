<template>
    <div class="h-full overflow-y-scroll scrolling-touch" ref="movie-list">
        <Header />
        <div class="relative mt-16 pb-20 max-w-6xl mx-auto">
            <div class="w-full lg:flex lg:items-start pt-6">
                <div class="w-full h-full lg:w-4/6 md:px-12 lg:px-6">
                    <div
                        class="flex items-baseline justify-between px-6 lg:px-0"
                    >
                        <p class="text-sm text-gray-600 py-2">
                            Total Results: {{ isLoading ? '' : totalResults }}
                        </p>
                        <SidebarButton />
                    </div>
                    <p
                        v-if="totalResults === 0 && !isLoading"
                        class="text-base p-6 italic"
                    >
                        No results
                    </p>
                    <div v-else>
                        <MovieCard
                            v-for="movie in movies"
                            :key="movie.id"
                            :movie="movie"
                            :genres="genres"
                        />
                    </div>
                </div>
                <div class="lg:block lg:w-2/6 lg:px-6">
                    <keep-alive>
                        <Sidebar
                            :isSidebarOpen="isSidebarOpen"
                            :genres="genres"
                            @updateMovie="getAndUpdateMovies"
                        />
                    </keep-alive>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import * as Interface from '@/models/interface/interface';
import { QueryKey } from '@/models/enum/enum';
import { Getter, Action } from 'vuex-class';
import tmdbApi from '@/models/api/movies';
import MovieCard from '@/components/MovieCard.vue';
import Header from '@/components/Header/Header.vue';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import SidebarButton from '@/components/SidebarButton/SidebarButton.vue';

@Component({
    components: {
        MovieCard,
        Header,
        Sidebar,
        SidebarButton,
    },
})
export default class Home extends Vue {
    isSidebarOpen: boolean = false; // open status of sidebar
    movies: Interface.IMovies[] = []; // movie list from TMDB API
    totalResults: number = 0; // total numbers of movie list
    totalPages: number = 0; // total pages of movie list
    currentPage: number = 1; // current page of AIP response
    genres: Interface.IGenre[] = []; // genres list of movies
    isLoading: boolean = false;

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
        this.totalResults = data.total_results;
        this.totalPages = data.total_pages;
        this.currentPage = data.page;
        this.movies =
            query.page > 1 && query.page > this.currentPage
                ? this.movies.concat(data.results)
                : data.results;

        this.isLoading = false;

        // If screen size less than 1024 and sidebar is open, close sidebar
        if (window.innerWidth < 1024 && this.isSidebarOpen) {
            this.closeSidebar();
        }
        // Scroll to top
        window.scrollTo({ top: 0 });
    }

    // Show sidebar in large screen
    onResize() {
        window.innerWidth >= 1024 ? this.openSidebar() : this.closeSidebar();
    }

    scrollLoad(scrollElement: HTMLElement): void {
        if (scrollElement) {
            scrollElement.addEventListener('scroll', () => {
                const bottomOfWindow =
                    scrollElement.scrollTop + scrollElement.clientHeight >=
                    scrollElement.scrollHeight;
                if (bottomOfWindow) {
                    const query = this.getQuery;
                    // Skip if that is all the request result
                    if (query.page >= this.totalPages) return;
                    // If not, request more data
                    query.page++;
                    this.setQuery(query);
                    this.getAndUpdateMovies();
                }
            });
        }
    }

    async created() {
        this.onResize(); // Check when reloading the page
        window.addEventListener('resize', this.onResize); // Check when resizing the page

        // GET and UPDATE movies
        this.getAndUpdateMovies();

        // GET genres list of movies
        const genres = await tmdbApi.getGenres();
        this.genres = genres;

        // Scroll loading movies
        const movieContainer = this.$refs['movie-list'] as HTMLElement;
        this.scrollLoad(movieContainer);
    }

    beforeDestroy() {
        window.removeEventListener('resize', this.onResize);
    }
}
</script>
