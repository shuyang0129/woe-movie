<template>
    <div>
        <!-- Screen Size | Default -->
        <div class="sm:hidden py-4">
            <div class="border-b border-gray-300">
                <div class="flex items-center">
                    <h4 class="text-gray-900 font-medium text-xl">Joker</h4>
                    <span
                        class="ml-2 text-xs font-semibold text-gray-500 uppercase tracking-wide"
                    >EN</span>
                </div>
                <div class="flex items-center">
                    <StarIcon :scoreOfStars="scoreOfStars" :color="'text-yellow-600'" />
                    <span class="text-xs font-semibold ml-2">5(288)</span>
                </div>
                <div class="flex items-center">
                    <span class="text-xs font-semibold">2019-10-02</span>
                    <span class="text-xs font-semibold ml-2">2hr 2min</span>
                </div>
            </div>
            <div class="flex items-center -mx-2 py-4">
                <div class="w-1/3 p-2">
                    <img
                        class="shadow rounded-sm"
                        src="https://image.tmdb.org/t/p/w300/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
                    />
                </div>
                <div class="w-2/3 p-2">
                    <p
                        class="text-xs mb-2"
                    >During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.</p>
                    <span
                        v-for="i in 3"
                        :key="i"
                        class="inline-block rounded-full px-1 mr-1 mb-1 text-xs tracking-wide break-word border bg-gray-400 sm:px-2 sm:py-1 sm:mr-2 sm:mb-2"
                    >Crime</span>
                </div>
            </div>
            <div>
                <a
                    class="inline-block text-center w-full btn btn-indigo-3d rounded"
                    href="#"
                >OFFICIAL WEBSITE</a>
            </div>
        </div>
        <!-- Screen Size | Small -->
        <div
            class="hidden sm:block bg-gray-700 p-10 md:px-0 bg-fixed bg-cover"
            style="background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://image.tmdb.org/t/p/w1280/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg')"
        >
            <div class="w-full max-w-2xl mx-auto">
                <div class="flex items-center -mx-2 py-4">
                    <div class="w-1/3 p-2">
                        <img
                            class="shadow-xl rounded-sm"
                            src="https://image.tmdb.org/t/p/w300/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
                        />
                    </div>
                    <div class="w-2/3 p-8 md:p-16">
                        <div class="flex items-center">
                            <h4 class="text-gray-100 font-medium text-xl">Joker</h4>
                            <span
                                class="ml-2 text-xs font-semibold text-gray-500 uppercase tracking-wide"
                            >EN</span>
                        </div>
                        <div class="flex items-center">
                            <StarIcon :scoreOfStars="scoreOfStars" :color="'text-yellow-600'" />
                            <span class="text-xs font-semibold ml-2">5(288)</span>
                        </div>
                        <div class="flex items-center">
                            <span class="text-xs font-semibold">2019-10-02</span>
                            <span class="text-xs font-semibold ml-2">2hr 2min</span>
                        </div>
                        <p
                            class="text-xs mb-4 mt-4 text-gray-500"
                        >During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.</p>
                        <span
                            v-for="i in 3"
                            :key="i"
                            class="inline-block rounded-full px-1 mr-1 mb-1 text-xs tracking-wide break-word border border-gray-400 sm:px-2 sm:py-1 sm:mr-2 sm:mb-2 text-gray-400"
                        >Crime</span>
                        <a
                            class="inline-block text-center w-full btn btn-indigo-3d rounded mt-4"
                            href="#"
                        >OFFICIAL WEBSITE</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Inject, Prop } from 'vue-property-decorator';
import * as Interface from '@/models/interface/interface';
import * as Enum from '@/models/enum/enum';
import { Getter, Action } from 'vuex-class';
import tmdbApi from '@/models/api/movies';
import StarIcon from '@/components/StarIcon/StarIcon.vue';
import { scoreOfStars } from '@/utilities/display-filter';

@Component({
    components: {
        StarIcon,
    },
})
export default class MovieDetailBanner extends Vue {
    // @Prop() movieDetail!: Interface.IMovieDetail;
    // @Inject() movieDetail!: Interface.IMovieDetail;
    @Inject() movieId!: string;
    // movieDetail!: Interface.IMovieDetail;
    scoreOfStars: number = 0;

    async created() {
        // this.movieDetail = await tmdbApi.getMovieDetail(this.movieId);
        // this.scoreOfStars = scoreOfStars(this.movieDetail.vote_average);
    }
}
</script>
