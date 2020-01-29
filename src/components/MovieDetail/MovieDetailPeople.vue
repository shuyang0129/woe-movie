<template>
    <div
        class="flex items-center py-2 sm:p-2 rounded-sm sm:bg-gray-100 sm:shadow"
    >
        <div class="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
            <img
                v-if="movieCast.profile_path !== null"
                class="w-full h-full object-cover"
                :src="movieCast.profile_path | tmdbImagePath('w300')"
                alt
            />
            <img :src="movieCast.name | avatarWithInitials" alt="Cast Avatar" />
        </div>
        <div class="px-4">
            <h4 class="text-sm font-semibold text-gray-700">
                {{ movieCast.character }}
            </h4>
            <p class="text-xs text-gray-600">{{ movieCast.name }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Inject, Prop } from 'vue-property-decorator';
import * as Interface from '@/models/interface/interface';
import { Getter, Action } from 'vuex-class';
import tmdbApi from '@/models/api/movies';
import { avatarWithInitials, tmdbImagePath } from '@/utilities/display-filter';

@Component({
    components: {},
    filters: {
        avatarWithInitials,
        tmdbImagePath,
    },
})
export default class MovieDetailPeople extends Vue {
    @Prop() movieCast!: Interface.IMovieCast;
}
</script>
