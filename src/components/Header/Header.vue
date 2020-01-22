<template>
    <header class="fixed w-full h-18 top-0 bg-gray-100 shadow-lg z-40">
        <div
            class="mx-auto max-w-6xl sm:flex sm:items-center sm:justify-between"
        >
            <div class="h-16 pr-2 pl-6 flex items-center justify-between">
                <img class="h-4" src="./img/logo.png" alt="logo" />
                <HamburgerMenu class="sm:hidden" :isMenuOpen="isMenuOpen" />
            </div>
            <nav
                class="px-4 py-4 sm:flex sm:items-center sm:justify-end sm:max-h-full sm:py-4 overflow-hidden transition-all"
                :class="isMenuOpen ? 'block' : 'hidden'"
            >
                <a
                    href="#"
                    class="block text-sm text-gray-600 hover:bg-indigo-100 rounded p-2 sm:inline-block md:ml-8 transition-all"
                    >Home</a
                >
                <a
                    href="#"
                    class="block text-sm text-gray-600 hover:bg-indigo-100 rounded p-2 sm:inline-block md:ml-8 transition-all"
                    >Movie</a
                >
                <a
                    href="#"
                    class="block text-sm text-gray-600 hover:bg-indigo-100 rounded p-2 sm:inline-block md:ml-8 transition-all"
                    >About</a
                >
            </nav>
        </div>
    </header>
</template>

<script lang="ts">
import { Component, Vue, Watch, Provide } from 'vue-property-decorator';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu.vue';

@Component({
    components: {
        HamburgerMenu,
    },
})
export default class Header extends Vue {
    isMenuOpen: boolean = false;
    @Provide() toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
    }
}
</script>
<style scoped>
@keyframes slideInDown {
    from {
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
        visibility: visible;
    }

    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
}

.slideInDown-enter-active {
    -webkit-animation-name: slideInDown;
    animation-name: slideInDown;
    animation-duration: 0.5s;
}

.slideInDown-leave-active {
    -webkit-animation-name: slideInDown;
    animation-name: slideInDown;
    animation-duration: 0.5s;
    animation-direction: reverse;
}
</style>
