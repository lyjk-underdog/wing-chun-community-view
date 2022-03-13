<template>
  <view class="p-video-play">
    <view class="p-video-play_header">
      <VideoPlayer />
    </view>
    <view class="p-video-play_body">
      <SegmentedcControl :panesVal="panesVal">
        <template v-slot:0>
          <CommentVideoNewList />
        </template>
        <template v-slot:1>
          <CommentVideoHotList />
        </template>
      </SegmentedcControl>
    </view>
    <view class="p-video-play_footer">
      <ReplyerVideo />
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import VideoPlayer from "@/component/video-player/video-player.vue";
import SegmentedcControl from "@/component/common/segmented-control/segmented-control.vue";
import CommentVideoNewList from "@/component/comment-list/comment-video-new-list.vue";
import CommentVideoHotList from "@/component/comment-list/comment-video-hot-list.vue";
import ReplyerVideo from "@/component/replyer/replyer-video.vue";

export default Vue.extend({
  components: {
    VideoPlayer,
    SegmentedcControl,
    CommentVideoNewList,
    CommentVideoHotList,
    ReplyerVideo,
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
