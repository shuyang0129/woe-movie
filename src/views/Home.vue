<template>
    <div class="h-full">
        <Header />
        <div class="mt-16">
            <MovieCard />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MovieCard from '@/components/MovieCard.vue';
import Header from '@/components/Header/Header.vue';

@Component({
    components: {
        MovieCard,
        Header,
    },
})
export default class Home extends Vue {}
</script>
