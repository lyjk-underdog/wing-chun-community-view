<template>
    <view class="c-full-read-badge-btn">
        <UniBadge :text="unreadNum" type="error" absolute="rightTop">
          <view class="c-full-read-badge-btn_body">一键已读</view>
        </UniBadge>
    </view>
</template>

<script>
import Vue from 'vue';
import UniBadge from "@dcloudio/uni-ui/lib/uni-badge/uni-badge.vue";

export default Vue.extend({
    components:{
        UniBadge
    },
    props:{
        unreadNum:[String,Number]
    }
})
</script>

<style lang="scss" scoped>
@import './style/full-read-badge-btn.scss';
</style>
