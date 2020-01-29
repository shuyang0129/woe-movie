<template>
    <transition name="fadeIn">
        <div
            v-if="isSidebarOpen"
            class="fixed inset-0 z-50 bg-gray-800 p-6 pb-8 overflow-y-scroll scrolling-touch lg:relative lg:rounded-sm lg:shadow-md lg:z-30"
        >
            <div class="mx-auto max-w-lg flex flex-col">
                <!-- Close -->
                <div class="ml-auto lg:hidden">
                    <CloseButton @handleClick="closeSidebar" />
                </div>
                <!-- Keyword -->
                <label class="block">
                    <span class="form-label">Filter with Keyword</span>
                    <input
                        v-model="keywords"
                        type="text"
                        class="form-input w-full"
                        placeholder="Comma seperated keyword"
                    />
                </label>
                <!-- Original Language -->
                <span class="form-label">Original Language</span>
                <select v-model="originalLanguage" class="form-select w-full">
                    <option value="" selected>None</option>
                    <option
                        v-for="langName in langNames"
                        :key="langName"
                        :value="getLangCode(langName)"
                    >
                        {{ langName }} ({{
                            getLangCode(langName).toUpperCase()
                        }})
                    </option>
                </select>
                <!-- Sort By -->
                <span class="form-label">Sort By</span>
                <div>
                    <label
                        v-for="sortOpt in sortOpts"
                        :key="sortOpt.name"
                        class="flex items-center"
                    >
                        <input
                            type="radio"
                            class="form-radio"
                            v-model="sortBy"
                            :value="sortOpt.value"
                            :checked="sortOpt.value === sortBy"
                        />
                        <span class="ml-2">{{ sortOpt.name }}</span>
                    </label>
                </div>
                <!-- Release Year -->
                <span class="form-label">Release Year</span>
                <label class="block">
                    <select
                        v-model="releaseYear"
                        class="form-select block w-full"
                    >
                        <option value="" selected>None</option>
                        <option v-for="i in 101" :key="i">{{
                            currentYear - i + 1
                        }}</option>
                    </select>
                </label>
                <!-- Genre -->
                <span class="form-label">Genre</span>
                <label
                    v-for="genre in genres"
                    :key="genre.id"
                    class="inline-flex items-center mt-2"
                >
                    <input
                        v-model="selectedGenreIds"
                        type="checkbox"
                        class="form-checkbox text-gray-600"
                        :value="genre.id"
                    />
                    <span class="ml-2">{{ genre.name }}</span>
                </label>
                <!-- Inlclude Video -->
                <span class="form-label">Inlclude Video</span>
                <div class="block">
                    <label class="inline-flex items-center">
                        <input
                            v-model="isInludeVideo"
                            type="checkbox"
                            class="form-checkbox text-gray-600"
                        />
                        <span class="ml-2">Include Video</span>
                    </label>
                </div>
                <!-- Submit & Reset -->
                <button
                    @click="getFilteredMovies"
                    class="w-full btn btn-indigo-3d mt-6 rounded"
                >
                    Filter
                </button>
                <button
                    @click="resetMovies"
                    class="w-full btn btn-gray-3d mt-4 rounded"
                >
                    Reset Filter
                </button>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from 'vue-property-decorator';
import { Action, Mutation, Getter } from 'vuex-class';
import tmdbApi from '@/models/api/movies';
import { QueryKey } from '@/models/enum/enum';
import * as Interface from '@/models/interface/interface';
import CloseButton from '@/components/CloseButton/CloseButton.vue';
import ISO6391 from 'iso-639-1';

@Component({
    components: {
        CloseButton,
    },
})
export default class SideBar extends Vue {
    @Inject() closeSidebar!: void;
    @Prop() readonly genres!: Interface.IGenre[];
    @Prop() readonly isSidebarOpen!: boolean;
    @Getter('movieQuery/getQuery') getQuery!: Interface.IMovieQeury;
    @Mutation('movieQuery/resetQuery') resetQuery!: any;
    @Action('movieQuery/setQuery') setQuery!: any;

    readonly sortOpts: Interface.IMovieSortBy[] = [
        {
            name: 'Popularity (Overall)',
            value: 'popularity.desc',
        },
        {
            name: 'Rating',
            value: 'vote_average.desc',
        },
        {
            name: 'Release Date',
            value: 'primary_release_date.desc',
        },
    ];

    keywords: string = '';
    selectedGenreIds: string[] = []; // IDs of selected genres
    originalLanguage: string = ''; // Orginal language of movie
    sortBy: string = this.sortOpts[0].value;
    releaseYear: string = ''; // Release year of movie
    isInludeVideo: boolean = false; // Does include videos about movies

    get currentYear(): string {
        return new Date().getFullYear().toString();
    }

    get langNames() {
        return ISO6391.getAllNames().sort(); // [English, Japanese, ...]
    }

    getLangCode(langName: string): string {
        return ISO6391.getCode(langName); // Englishg -> en
    }

    async getKeywordIds(keywordValue: string) {
        // Convert keyword input into array
        const keywordToArr: string[] = keywordValue.split(',');

        // Loop each keyword to get keyword ids
        const getIds = keywordToArr.map(async keyword => {
            const result = await tmdbApi.getKeywordId(keyword.trim());
            return result.join('|'); // Seperate by pipe character, means OR
        });

        const keywordIds = await Promise.all(getIds);

        // Return a string join by pipeline
        return keywordIds.join('|');
    }

    async getFilteredMovies() {
        // Convert filter options to query params
        const query: any = {};

        query[QueryKey.WITH_ORIDINAL_LANGUAGE] = this.originalLanguage;
        query[QueryKey.SORT_BY] = this.sortBy;
        query[QueryKey.PRIMARY_RELEASE_YEAR] = this.releaseYear;
        query[QueryKey.WITH_GENRES] = this.selectedGenreIds.join(',');
        query[QueryKey.PAGE] = 1;
        query[QueryKey.INCLUDE_VIDOE] = this.isInludeVideo;

        // If keyword input is not empty but with no valid ids return, show no results
        const keywordIds = await this.getKeywordIds(this.keywords);
        query[QueryKey.WITH_KEYWORDS] =
            !keywordIds && this.keywords ? -1 : keywordIds;

        // Update query options to vuex
        this.setQuery(query);
        // Emit update movie event with query strings
        this.$emit('updateMovie', query);
        this.$emit('scrollTop');
    }

    resetMovies() {
        // Reset filter option to default
        this.keywords = '';
        this.selectedGenreIds = [];
        this.originalLanguage = '';
        this.sortBy = this.sortOpts[0].value;
        this.releaseYear = '';
        this.isInludeVideo = false;

        // Update query options to vuex
        this.resetQuery();
        // Emit update movie event
        this.$emit('updateMovie');
        this.$emit('scrollTop');
    }
}
</script>
<style lang="scss" scoped>
.fadeIn-enter-active {
    animation: 0.3s fadeIn ease-in-out;
}
.fadeIn-leave-active {
    animation: 0.3s fadeIn ease-in-out reverse;
}
</style>
