<template>
  <LinkView :url="`video-play?videoID=${video.videoID}`">
    <view class="c-video-item">
      <img
        class="c-video-item_bac-img"
        :src="video.videoCover || defaultVideoCoverIcon"
      />
      <view class="c-video-item_title">{{ video.videoTitle }}</view>
    </view>
  </LinkView>
</template>

<script>
import Vue from "vue";
import defaultVideoCoverIcon from "@/static/img/video-bac.svg";
import LinkView from "@/component/common/link-list/link-view.vue";

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
  data() {
    return {
      defaultVideoCoverIcon,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style/video-item.scss";
</style>
