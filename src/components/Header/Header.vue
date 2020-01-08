<template>
    <header class="fixed w-full top-0 bg-gray-100 shadow-md">
        <div
            class="mx-auto max-w-6xl sm:flex sm:items-center sm:justify-between"
        >
            <div class="h-16 pr-2 pl-6 flex items-center justify-between">
                <img class="h-4 " src="./img/logo.png" alt="logo" />
                <HamburgerMenu
                    :isMenuOpen="isMenuOpen"
                    @toggleMenu="toggleMenu"
                    class="sm:hidden"
                />
            </div>
            <nav
                class="py-4 px-4 sm:flex sm:items-center sm:justify-end"
                :class="isMenuOpen ? 'block' : 'hidden'"
            >
                <a
                    href="#"
                    class="block text-sm text-gray-600 hover:bg-indigo-100 rounded p-2 sm:inline-block md:ml-8"
                    >Home</a
                >
                <a
                    href="#"
                    class="block text-sm text-gray-600 hover:bg-indigo-100 rounded p-2 sm:inline-block md:ml-8"
                    >Movie</a
                >
                <a
                    href="#"
                    class="block text-sm text-gray-600 hover:bg-indigo-100 rounded p-2 sm:inline-block md:ml-8"
                    >About</a
                >
            </nav>
        </div>
    </header>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu.vue';

@Component({
    components: {
        HamburgerMenu,
    },
})
export default class Header extends Vue {
    isMenuOpen: boolean = false;

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
}
</script>
