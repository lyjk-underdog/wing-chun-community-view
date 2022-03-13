<template>
  <view class="c-video-item" @click="() => linkToTargetPage(`video-play?vid=${video.vid}`)">
    <img class="c-video-item_bac-img" src="@/static/img/video-bac.svg" />
    <view class="c-video-item_title">{{video.title}}</view>
  </view>
</template>

<script>
import Vue from "vue";
import useLink from '@/mixin/use-link.js';

export default Vue.extend({
  mixins:[useLink],
  props: {
    //{vid:Numbser/String , title:String}
    video: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./style/video-item.scss";
</style>
