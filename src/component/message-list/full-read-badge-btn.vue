<template>
    <view class="c-full-read-badge-btn">
        <UniBadge :text="unreadNum" type="error" absolute="rightTop">
          <view class="c-full-read-badge-btn_body" @click="emitAllRead">一键已读</view>
        </UniBadge>
    </view>
</template>

<script>
import Vue from 'vue';
import UniBadge from "@dcloudio/uni-ui/lib/uni-badge/uni-badge.vue";
import messageApi from "@/api/message/index.js";

export default Vue.extend({
    components:{
        UniBadge
    },
    props:{
        unreadNum:[String,Number]
    },
    methods:{
        async emitAllRead(){
            try{
                await messageApi.readall();
                this.$emit('allRead');
            }catch(e){}
        }
    }
})
</script>

<style lang="scss" scoped>
@import './style/full-read-badge-btn.scss';
</style>
