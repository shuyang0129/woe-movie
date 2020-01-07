<template>
    <div class="h-full">
        <MovieCard />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MovieCard from '@/components/MovieCard.vue';

@Component({
    components: {
        MovieCard,
    },
})
export default class Home extends Vue {}
</script>
