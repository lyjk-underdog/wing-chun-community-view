<template>
  <view class="c-video-list">
    <section class="l-video-item" v-for="(item, index) in list" :key="index">
      <VideoItem :video="item" />
    </section>
  </view>
</template>

<script>
import Vue from "vue";
import VideoItem from "./video-item.vue";

export default Vue.extend({
  components: {
    VideoItem,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./style/video-list.scss";
</style>
