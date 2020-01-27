<template>
    <div id="app" class="antialiased text-gray-600">
        <Header />
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header/Header.vue';

@Component({
    components: { Header },
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
