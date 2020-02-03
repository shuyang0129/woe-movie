<template>
    <transition name="slideInRight" v-if="isScrollTopShow">
        <button
            @click="scrollTop"
            class="fixed right-0 bottom-0 rounded-full bg-indigo-600 hover:bg-indigo-700 p-3 shadow-lg mr-3 mb-3 z-40 transition-bg focus:outline-none focus:shadow-outline"
        >
            <svg class="fill-current text-gray-100" width="24" height="24">
                <path
                    d="M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 101.41-1.41L12.7 8.71a.996.996 0 00-1.41 0L6.7 13.3a.996.996 0 000 1.41c.39.38 1.03.39 1.42 0z"
                />
            </svg>
        </button>
    </transition>
</template>

<script lang="ts">
import { TweenMax, Power3 } from 'gsap';
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class ScrollTopButton extends Vue {
    isScrollTopShow: boolean = false;

    scrollTop() {
        TweenMax.to(document.documentElement, 0.5, {
            scrollTop: 0,
            ease: Power3.easeInOut,
        });
    }

    showScrollTop() {
        this.isScrollTopShow =
            document.documentElement.scrollTop > 90 ? true : false;
    }

    created() {
        window.addEventListener('scroll', this.showScrollTop);
    }

    beforeDestroy() {
        window.removeEventListener('scroll', this.showScrollTop);
    }
}
</script>
<style scoped>
@keyframes fadeInRight {
    from {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
    }

    to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
}

.slideInRight-enter-active {
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight;
    animation-duration: 0.5s;
}

.slideInRight-leave-active {
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight;
    animation-duration: 0.5s;
    animation-direction: reverse;
}
</style>
