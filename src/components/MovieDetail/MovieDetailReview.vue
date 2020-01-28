<template>
    <div class="bg-gray-100 p-4 shadow rounded-sm mb-4">
        <div class="flex items-center mb-2">
            <img
                class="w-8 h-8"
                :src="movieReview.author | avatarWithInitials"
                alt
            />
            <div class="ml-2">
                <h4 class="text-sm font-semibold text-gray-700 -mb-2">
                    {{ movieReview.author }}
                </h4>
                <span class="inline-block text-xs text-gray-500 italic"
                    >October 4, 2019</span
                >
            </div>
        </div>
        <p class="text-sm text-gray-600 whitespace-pre-wrap">
            {{ movieReview.content }}
        </p>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator';
import * as Interface from '@/models/interface/interface';
import { Getter, Action } from 'vuex-class';
import { avatarWithInitials } from '@/utilities/display-filter';

@Component({
    components: {},
    filters: {
        avatarWithInitials,
    },
})
export default class MovieDetailReview extends Vue {
    @Prop() movieReview!: Interface.IMovieReview;
}
</script>
