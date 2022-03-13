<template>
    <view class="c-card">
        <view v-if="title" class="c-card_title">{{title}}</view>
        <view class="c-card_body">
            <slot></slot>
        </view>
    </view>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    props:{
        title:String
    }
})
</script>

<style lang="scss" scoped>
@import './style/card.scss';
</style>
