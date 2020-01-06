<template>
    <div>123</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MovieCard extends Vue {
    @Prop() private msg!: string;
}
</script>
