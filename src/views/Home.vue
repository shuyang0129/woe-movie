<template>
    <div class="h-full">
        <Header />
        <div class="relative mt-20 max-w-6xl mx-auto">
            <div class="w-full lg:flex lg:items-start pt-6">
                <div class="w-full lg:w-4/6 md:px-12 lg:px-6">
                    <div class="flex items-baseline justify-between px-6 lg:px-0">
                        <p class="text-sm text-gray-600 py-2">Total Results: 262</p>
                        <button class="p-3 bg-gray-300 rounded-full lg:hidden">
                            <svg class="fill-current text-gray-600 w-4 h-4" viewBox="0 0 20 20">
                                <path
                                    d="M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 000 12z"
                                />
                            </svg>
                        </button>
                    </div>
                    <MovieCard />
                </div>
                <div class="hidden lg:block lg:w-2/6 lg:px-6">
                    <Sidebar />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MovieCard from '@/components/MovieCard.vue';
import Header from '@/components/Header/Header.vue';
import Sidebar from '@/components/Sidebar/Sidebar.vue';

@Component({
    components: {
        MovieCard,
        Header,
        Sidebar,
    },
})
export default class Home extends Vue {}
</script>
