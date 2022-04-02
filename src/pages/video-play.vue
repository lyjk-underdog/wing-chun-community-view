<template>
  <view class="p-video-play">
    <view class="p-video-play_header">
      <VideoPlayer />
    </view>
    <view class="p-video-play_body">
      <SegmentedcControl :panesVal="panesVal">
        <template v-slot:0>
          <VideoCommentList type="new" />
        </template>
        <template v-slot:1>
          <VideoCommentList type="hot" />
        </template>
      </SegmentedcControl>
    </view>
    <view class="p-video-play_footer">
      <VideoReplyer/>
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import VideoPlayer from "@/features/video/video-player.vue";
import SegmentedcControl from "@/ui/segmented-control/segmented-control.vue";
import VideoCommentList from "@/features/video/comment-list.vue";
import VideoReplyer from "@/features/video/video-replyer.vue";

export default Vue.extend({
  components: {
    VideoPlayer,
    SegmentedcControl,
    VideoCommentList,
    VideoReplyer,
  },
  data() {
    return {
      panesVal: ["最新评论", "热门评论"],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style/video-play.scss";
</style>
