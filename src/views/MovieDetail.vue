<template>
    <div class="overflow-x-hidden">
        <div class="fixed w-full h-48 z-20">
            <div class="bg-gray-900 opacity-25 absolute inset-0"></div>
            <img
                class="object-cover h-full w-full"
                src="https://image.tmdb.org/t/p/w1280/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg"
            />
        </div>
        <div class="relative px-4 mt-48 z-30 bg-gray-100">
            <div>
                <div class="py-4 border-b border-gray-300">
                    <div class="flex items-center">
                        <h4 class="text-gray-900 font-medium text-xl">Joker</h4>
                        <span
                            class="ml-2 text-xs font-semibold text-gray-500 uppercase tracking-wide"
                        >EN</span>
                    </div>
                    <div class="flex items-center">
                        <StarIcon :scoreOfStars="scoreOfStarts" :color="'text-yellow-600'" />
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
            <div class="flex items-center justify-between form-label">
                <span class="text-gray-700">Actors/Actress</span>
                <a
                    class="text-indigo-500 hover:text-indigo-600 cursor-pointer transition-color"
                >Show All</a>
            </div>
            <div>
                <div v-for="i in 3" :key="i" class="flex items-center py-2">
                    <div class="h-12 w-12 rounded-full shadow-lg overflow-hidden">
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
            </div>
            <div class="flex items-center justify-between form-label">
                <span class="text-gray-700">Images</span>
                <a
                    class="text-indigo-500 hover:text-indigo-600 cursor-pointer transition-color"
                >Show All</a>
            </div>
            <div class="flex flex-wrap -mx-1">
                <img
                    class="object-cover rounded-sm h-24 w-2/3 p-1"
                    src="https://image.tmdb.org/t/p/w1280/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg"
                />
                <img
                    class="object-cover rounded-sm h-24 w-1/3 p-1"
                    src="https://image.tmdb.org/t/p/w1280/pLO4qJdQxhAMPaFJu7q8bgme6R3.jpg"
                />
                <img
                    class="object-cover rounded-sm h-24 w-1/3 p-1"
                    src="https://image.tmdb.org/t/p/w1280/qR1yyZe3X14opqBmeHRLXmfVcot.jpg"
                />
                <img
                    class="object-cover rounded-sm h-24 w-1/3 p-1"
                    src="https://image.tmdb.org/t/p/w1280/hd8H2TvqtAbqYnBUbf5AdXZf87s.jpg"
                />
                <img
                    class="object-cover rounded-sm h-48 w-1/3 p-1"
                    src="https://image.tmdb.org/t/p/w1280/1JlbnzFqp0KQBquCvSmoeWMe274.jpg"
                />
                <img
                    class="object-cover rounded-sm h-24 w-2/3 p-1 -mt-24"
                    src="https://image.tmdb.org/t/p/w1280/vu5Mv3CXlz5np1breEsKSUA2YX1.jpg"
                />
            </div>
            <div class="flex items-center justify-between form-label">
                <span class="text-gray-700">Similar Movies</span>
            </div>
            <div class="h-40 flex items-center overflow-x-scroll customize-scroll py-2">
                <img
                    class="h-full object-cover px-1 rounded-sm"
                    src="https://image.tmdb.org/t/p/w300/ktPbjD6nYg5NxmeTt72Iqaw5GD0.jpg"
                    alt
                />
                <img
                    class="h-full object-cover px-1 rounded-sm"
                    src="https://image.tmdb.org/t/p/w300/nSbpuyd2UySuW7kaoXzYUfes1Bl.jpg"
                    alt
                />
                <img
                    class="h-full object-cover px-1 rounded-sm"
                    src="https://image.tmdb.org/t/p/w300/wWWjBJbORsB9xt17eXmYEYhinux.jpg"
                    alt
                />
                <img
                    class="h-full object-cover px-1 rounded-sm"
                    src="https://image.tmdb.org/t/p/w300/pT2cxw776c4DPiFZEy6DFREV7fs.jpg"
                    alt
                />
                <img
                    class="h-full object-cover px-1 rounded-sm"
                    src="https://image.tmdb.org/t/p/w300/iX77zMSqUv2Qt7ToEnN2mmEudEf.jpg"
                    alt
                />
                <img
                    class="h-full object-cover px-1 rounded-sm"
                    src="https://image.tmdb.org/t/p/w300/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
                    alt
                />
            </div>
            <div class="flex items-center justify-between form-label">
                <span class="text-gray-700">Reviews</span>
            </div>
            <div v-for="i in 5" :key="i" class="bg-gray-100 p-4 shadow rounded-sm mb-4">
                <div class="flex items-center mb-2">
                    <img
                        class="w-8 h-8"
                        src="https://ui-avatars.com/api/?rounded=true&name=ikomrad"
                        alt
                    />
                    <div class="ml-2">
                        <h4 class="text-sm font-semibold text-gray-700 -mb-2">ikomrad</h4>
                        <span class="inline-block text-xs text-gray-500 italic">October 4, 2019</span>
                    </div>
                </div>
                <p
                    class="text-sm text-gray-600"
                >The Joker is similar to the DC Joker character but is not a criminal genius. The movie was a great depiction of how a person who has been...</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import * as Interface from '@/models/interface/interface';
import { Getter, Action } from 'vuex-class';
import tmdbApi from '@/models/api/movies';
import StarIcon from '@/components/StarIcon/StarIcon.vue';

@Component({
    components: {
        StarIcon,
    },
})
export default class MovieDetail extends Vue {
    // movieDetail: any = {};
    scoreOfStarts: number = 8.3;

    async created() {
        // this.movieDetail = await tmdbApi.getMovieDetail(290859);
    }
}
</script>
<style scoped>
.customize-scroll::-webkit-scrollbar {
    @apply h-1 bg-gray-300;
}
.customize-scroll::-webkit-scrollbar-track {
    /* background: #f1f1f1; */
    @apply bg-gray-300;
}

.customize-scroll::-webkit-scrollbar-thumb {
    @apply bg-gray-400 rounded-full transition-bg;
}

.customize-scroll::-webkit-scrollbar-thumb:hover {
    @apply bg-gray-500;
}
</style>