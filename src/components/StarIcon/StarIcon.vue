<template>
    <div class="inline-block flex items-center">
        <template class="inline-block" v-for="i in 5">
            <!-- Star Icon Fill -->
            <svg
                v-if="i <= scoreOfStars"
                :key="i"
                viewBox="0 0 24 24"
                class="fill-current"
                :class="size + ' ' + color"
            >
                <g fill="none">
                    <path d="M0 0h24v24H0V0z" />
                    <path d="M0 0h24v24H0V0z" />
                </g>
                <path
                    d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                />
            </svg>
            <!-- Star Icon Half -->
            <svg
                v-if="scoreOfStars % 1 !== 0 && i === Math.ceil(scoreOfStars)"
                :key="i"
                viewBox="0 0 24 24"
                class="fill-current"
                :class="size + ' ' + color"
            >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                    d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                />
            </svg>
            <!-- Star Icon Outlined -->
            <svg
                v-if="i > Math.ceil(scoreOfStars)"
                :key="i"
                viewBox="0 0 24 24"
                class="fill-current"
                :class="size + ' ' + color"
            >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path
                    d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                />
            </svg>
        </template>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class StarIcon extends Vue {
    @Prop({ default: 0 }) readonly scoreOfStars!: number;
    @Prop({ default: `w-3 h-3` }) readonly size!: string;
    @Prop({ default: 'text-yellow-300' }) readonly color!: string;
}
</script>
