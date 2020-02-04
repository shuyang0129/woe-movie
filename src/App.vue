<template>
    <div id="app" class="antialiased text-gray-600">
        <div class="overflow-x-hidden">
            <Header />
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header/Header.vue';
import { Action } from 'vuex-class';
import * as Interface from '@/models/interface/interface';
import tmdbApi from '@/models/api/movies';

@Component({
    components: { Header },
})
export default class App extends Vue {
    @Action('movieGenres/initGenres') private initGenres!: any;

    async created() {
        this.initGenres();
        localStorage.removeItem('movieFilter');
    }
}
</script>
<style></style>
