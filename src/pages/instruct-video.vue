<template>
  <view class="p-instruct-video">
    <SegmentedcControl :panesVal="panesVal">
      <template v-slot:0>
        <VideoBasicList />
      </template>
      <template v-slot:1>
        <VideoCombatList />
      </template>
    </SegmentedcControl>
  </view>
</template>

<script>
import Vue from "vue";
import SegmentedcControl from "@/component/common/segmented-control/segmented-control.vue";
import VideoBasicList from "@/component/video-list/video-basic-list.vue";
import VideoCombatList from "@/component/video-list/video-combat-list.vue";

export default Vue.extend({
  components: {
    SegmentedcControl,
    VideoBasicList,
    VideoCombatList,
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
