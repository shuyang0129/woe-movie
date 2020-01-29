<template>
    <button @click="handleClick" class=" focus:outline-none">
        <svg
            class="fill-current text-gray-100 hover:text-gray-200 w-5 h-5"
            viewBox="0 0 20 20"
        >
            <path
                d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
            />
        </svg>
    </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CloseButton extends Vue {
    handleClick(): void {
        this.$emit('handleClick');
    }
}
</script>
