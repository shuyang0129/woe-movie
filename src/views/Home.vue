<template>
    <div class="h-full">
        <Header />
        <div class="relative mt-20 lg:flex lg:items-start">
            <MovieCard />
            <Sidebar />
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
