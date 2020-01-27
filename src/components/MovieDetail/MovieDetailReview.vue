<template>
    <div class="bg-gray-100 p-4 shadow rounded-sm mb-4">
        <div class="flex items-center mb-2">
            <img class="w-8 h-8" src="https://ui-avatars.com/api/?rounded=true&name=ikomrad" alt />
            <div class="ml-2">
                <h4 class="text-sm font-semibold text-gray-700 -mb-2">ikomrad</h4>
                <span class="inline-block text-xs text-gray-500 italic">October 4, 2019</span>
            </div>
        </div>
        <p
            class="text-sm text-gray-600"
        >The Joker is similar to the DC Joker character but is not a criminal genius. The movie was a great depiction of how a person who has been...</p>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import * as Interface from '@/models/interface/interface';
import { Getter, Action } from 'vuex-class';

@Component({
    components: {},
})
export default class MovieDetailReview extends Vue {}
</script>
