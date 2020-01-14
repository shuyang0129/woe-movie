<template>
    <button
        @click="openSidebar"
        class="p-3 bg-gray-300 hover:bg-gray-400 rounded-full lg:hidden transition-bg focus:outline-none focus:shadow-outline"
    >
        <svg class="fill-current text-gray-600 w-4 h-4" viewBox="0 0 20 20">
            <path
                d="M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 000 12z"
            />
        </svg>
    </button>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from 'vue-property-decorator';

@Component
export default class Sideabr extends Vue {
    @Inject() private openSidebar!: void;
}
</script>
