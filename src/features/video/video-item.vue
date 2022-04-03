<template>
  <LinkView :url="`video-play/video-play?videoID=${video.videoID}`">
    <view class="c-video-item">
      <img
        class="c-video-item_bac-img"
        :src="video.videoCover || defaultVideoCover"
      />
      <view class="c-video-item_title">{{ video.videoTitle }}</view>
    </view>
  </LinkView>
</template>

<script>
import Vue from "vue";
import LinkView from "@/ui/link-view.vue";
import defaultVideoCover from "./image/video-cover.svg";

export default Vue.extend({
  components: {
    LinkView,
  },
  props: {
    video: {
      type: Object,
      required: true,
    },
  },
  data(){
    return {
      defaultVideoCover
    }
  }
});
</script>

<style lang="scss" scoped>
@import "./style/video-item.scss";
</style>
