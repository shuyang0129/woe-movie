<template>
    <div id="app">
        <div
            class="bg-gray-200 min-h-screen p-8 flex items-center justify-center"
        >
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MovieCard from './components/MovieCard.vue';

@Component({
    components: {
        MovieCard,
    },
})
export default class App extends Vue {}
</script>
