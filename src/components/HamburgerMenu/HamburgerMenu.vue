<template>
    <div
        class="nav-drawer"
        @click.stop="toggleMenu"
        :class="{ 'is-open': isMenuOpen }"
    >
        <span class="nav-drawer__hamburger-line"></span>
        <span class="nav-drawer__hamburger-line"></span>
        <span class="nav-drawer__hamburger-line"></span>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class HamburgerMenu extends Vue {
    @Prop() isMenuOpen!: boolean;
    @Inject() toggleMenu!: void;
}
</script>
<style lang="scss" scoped>
/*****************************************
* Navigation Drawer Style
* - default style
* - hover style (shine)
* - actived style
*****************************************/

/*----- Default button style -----*/
.nav-drawer {
    position: relative;
    width: 39px;
    height: 36px;
    cursor: pointer;
}

.nav-drawer__hamburger-line {
    overflow: hidden;
    position: absolute;
    width: 19px;
    height: 2px;
    left: 10px;
    background: #4a5568;
    transition: transform 0.3s ease-in-out;

    &:nth-child(1) {
        top: 10px;
        transform-origin: right center;
    }

    &:nth-child(2) {
        top: 17px;
        transform-origin: left center;
    }

    &:nth-child(3) {
        top: 24px;
        transform-origin: right center;
    }
}

/*----- Actived button style -----*/

.nav-drawer.is-open .nav-drawer__hamburger-line {
    &:nth-child(1) {
        transform: translateY(0.58px) translateX(-2.78px) rotate(-45deg);
    }

    &:nth-child(2) {
        transform: scaleX(0);
    }

    &:nth-child(3) {
        transform: translateY(-0.58px) translateX(-2.78px) rotate(45deg);
    }
}
</style>
