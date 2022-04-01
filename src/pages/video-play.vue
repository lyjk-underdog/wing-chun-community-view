<template>
  <view class="p-video-play">
    <view class="p-video-play_header">
      <VideoPlayer />
    </view>
    <view class="p-video-play_body">
      <SegmentedcControl :panesVal="panesVal">
        <template v-slot:0>
          <CommentList target="video" type="new" />
        </template>
        <template v-slot:1>
          <CommentList target="video" type="hot" />
        </template>
      </SegmentedcControl>
    </view>
    <view class="p-video-play_footer">
      <Replyer type="video" />
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import VideoPlayer from "@/component/video-player/video-player.vue";
import SegmentedcControl from "@/component/common/segmented-control/segmented-control.vue";
import CommentList from "@/component/comment-list/comment-list.vue";
import Replyer from "@/component/replyer/replyer.vue";

export default Vue.extend({
  components: {
    VideoPlayer,
    SegmentedcControl,
    CommentList,
    Replyer,
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
