<template>
    <div class="flex items-center justify-between section-title">
        <span class="text-gray-700">{{ title }}</span>
        <a
            v-if="isShowBtn"
            @click="handleClick"
            class="text-indigo-500 hover:text-indigo-600 cursor-pointer transition-color"
            >{{ btnName }}</a
        >
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator';
import * as Interface from '@/models/interface/interface';
import { Getter, Action } from 'vuex-class';

@Component({
    components: {},
})
export default class Home extends Vue {
    @Prop({ default: '' }) title!: string;
    @Prop({ default: '' }) btnName!: string;
    @Prop({ default: false }) isShowBtn!: boolean;

    handleClick() {
        this.$emit('handleClick');
    }
}
</script>
