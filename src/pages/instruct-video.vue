<template>
  <view class="p-instruct-video">
    <SegmentedcControl :panesVal="panesVal">
      <template v-slot:0>
        <VideoList type="basic" />
      </template>
      <template v-slot:1>
        <VideoList type="combat" />
      </template>
    </SegmentedcControl>
  </view>
</template>

<script>
import Vue from "vue";
import SegmentedcControl from "@/component/common/segmented-control/segmented-control.vue";
import VideoList from "@/component/video-list/video-list.vue";

export default Vue.extend({
  components: {
    SegmentedcControl,
    VideoList
  },
  data() {
    return {
      panesVal: ["基础", "实战"],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style/instruct-video.scss";
</style>
