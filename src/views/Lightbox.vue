<template>
    <transition name="fadeIn">
        <div
            v-if="isLightboxOpen"
            @click.self="closeLightbox"
            class="fixed inset-0 z-40 overflow-hidden flex flex-col justify-center"
            style="background-color:rgba(0, 0, 0, 0.85)"
        >
            <div class="w-full max-w-6xl mx-auto p-4 sm:p-16">
                <!-- Close -->
                <div class="flex justify-end py-8">
                    <CloseButton @handleClick="closeLightbox" />
                </div>
                <img
                    class="w-full object-contain mx-auto rounded-sm shadow-2xl"
                    :src="selectedImage.file_path | tmdbImagePath('w1280')"
                />
                <div
                    class=" h-20 sm:h-32 flex items-center overflow-x-scroll overflow-y-auto py-4 px-1 sm:mt-16 sm:pb-8 customize-scroll_dark"
                >
                    <img
                        v-for="movieImage in movieImages"
                        :key="movieImage.file_path"
                        @click="reloadImage(movieImage)"
                        class="h-full object-cover rounded-sm mr-4 cursor-pointer shadow hover:shadow-outline"
                        :class="{
                            'shadow-outline':
                                movieImage.file_path ===
                                selectedImage.file_path,
                        }"
                        :src="movieImage.file_path | tmdbImagePath('w300')"
                    />
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator';
import * as Interface from '@/models/interface/interface';
import { Getter, Action } from 'vuex-class';
import { tmdbImagePath } from '@/utilities/display-filter';
import CloseButton from '@/components/CloseButton/CloseButton.vue';

@Component({
    components: {
        CloseButton,
    },
    filters: {
        tmdbImagePath,
    },
})
export default class Lightbox extends Vue {
    @Prop() movieImages!: Interface.IMovieImage[];
    @Prop() selectedImage!: Interface.IMovieImage;
    @Prop({ default: false }) isLightboxOpen!: boolean;
    isLoading: boolean = false;

    reloadImage(img: Interface.IMovieImage) {
        this.isLoading = true;
        this.selectedImage = img;
    }

    closeLightbox(): void {
        this.$emit('closeLightbox');
    }
}
</script>
