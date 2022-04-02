<template>
  <LinkView :url="`video-play?videoID=${video.videoID}`">
    <view class="c-video-item">
      <img
        class="c-video-item_bac-img"
        :src="video.videoCover"
      />
      <view class="c-video-item_title">{{ video.videoTitle }}</view>
    </view>
  </LinkView>
</template>

<script>
import Vue from "vue";
import LinkView from "@/ui/link-view.vue";

export default Vue.extend({
  components: {
    LinkView,
  },
  props: {
    //{videoID:Numbser/String , videoTitle:String , videoCover:String}
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
