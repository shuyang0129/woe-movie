<template>
    <div class="relative h-3/4 my-16 flex items-center justify-center">
        <div class="text-center">
            <h4 class="font-bold text-gray-400 text-xxl">404</h4>
            <p class="font-semibold text-sm text-gray-600">
                Page Not Found, back to
                <router-link
                    class="text-indigo-400 hover:text-indigo-500 transition-color"
                    to="/"
                >Movie Page</router-link>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class Home extends Vue {}
</script>
