<template>
    <div id="app" class="antialiased text-gray-600">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class App extends Vue {}
</script>
<style>
html,
body,
#app {
    @apply bg-gray-200;
    width: 100%;
    height: 100%;
}

[v-cloak] {
    display: none !important;
}
</style>
