<template>
    <div class="bg-gray-100 p-4 shadow rounded-sm mb-4 break-all">
        <div class="flex items-center mb-2">
            <img
                class="w-8 h-8"
                :src="movieReview.author | avatarWithInitials"
                alt
            />
            <div class="ml-2">
                <h4 class="text-sm font-semibold text-gray-700">
                    {{ movieReview.author }}
                </h4>
                <!-- <span class="inline-block text-xs text-gray-500 italic -mt-2"
                    >October 4, 2019</span
                > -->
            </div>
        </div>
        <p class="text-sm text-gray-600 whitespace-pre-wrap" :ref="refName">
            {{ movieReview.content }}
        </p>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator';
import * as Interface from '@/models/interface/interface';
import { Getter, Action } from 'vuex-class';
import { avatarWithInitials } from '@/utilities/display-filter';
import Clamp from 'clamp-js';

@Component({
    components: {},
    filters: {
        avatarWithInitials,
    },
})
export default class MovieDetailReview extends Vue {
    @Prop() movieReview!: Interface.IMovieReview;
    @Prop() refName!: string;

    truncate(el: HTMLElement) {
        return Clamp(el, {
            clamp: '6',
            useNativeClamp: false,
            truncationChar: ' ',
            truncationHTML:
                '<button class="text-indigo-600 hover:text-indigo-400 transition-all">... read more</button>',
        });
    }

    mounted() {
        const domElement = this.$refs[this.refName] as HTMLElement;
        if (domElement) {
            this.truncate(domElement);

            window.addEventListener('resize', async () => {
                domElement.innerText = this.movieReview.content;
                this.truncate(domElement);
            });

            domElement.addEventListener('click', () => {
                domElement.innerText = this.movieReview.content;
            });
        }
    }
}
</script>
