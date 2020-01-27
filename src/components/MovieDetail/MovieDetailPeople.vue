<template>
    <div class="flex items-center py-2 sm:p-2 rounded-sm sm:bg-gray-100 sm:shadow">
        <div class="h-12 w-12 rounded-full overflow-hidden">
            <img
                class="w-full h-full object-cover"
                src="https://image.tmdb.org/t/p/w300/8Bgdfv1oN9Mw0YuMHP6fw8KzDkc.jpg"
                alt
            />
        </div>
        <div class="px-4">
            <h4 class="text-sm font-semibold text-gray-700">Arthur Fleck / Joker</h4>
            <p class="text-xs text-gray-600">Joaquin Phoenix</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import * as Interface from '@/models/interface/interface';
import { Getter, Action } from 'vuex-class';

@Component({
    components: {},
})
export default class MovieDetailPeople extends Vue {}
</script>
