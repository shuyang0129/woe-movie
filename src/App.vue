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
<style></style>
