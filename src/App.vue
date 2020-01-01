<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" class="mx-auto" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
        <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
            Button
        </button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
    components: {
        HelloWorld,
    },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
