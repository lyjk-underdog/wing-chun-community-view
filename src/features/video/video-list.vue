<template>
  <view class="c-video-list">
    <section class="l-video-item" v-for="(item, index) in list" :key="index">
      <VideoItem :video="item" />
    </section>
  </view>
</template>

<script>
import Vue from "vue";
import VideoItem from './video-item.vue';
import videoApi from "./api/index.js";

export default Vue.extend({
  components: {
    VideoItem,
  },
  props: {
    type: String,
    required: true,
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    async updateVideoListOnInit() {
      try {
        this.list = await videoApi.getList(this.type);
      } catch (e) {
        throw e;
      }
    },
  },
  async created() {
    await this.updateVideoListOnInit();
  },
});
</script>

<style lang="scss" scoped>
@import './style/video-list.scss';
</style>
