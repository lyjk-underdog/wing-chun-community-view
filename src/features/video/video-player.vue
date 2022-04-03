<template>
  <view class="c-video-player">
    <video class="c-video-player_video" :src="video.videoSrc"></video>
    <view class="c-video-player_footer">
      <view class="c-video-player_title">{{ video.videoTitle }}</view>
      <UniCollapse>
        <UniCollapseItem :border="false" title-border="none">
          <template v-slot:title>
            <span class="c-video-player_describe-title">内容描述:</span>
          </template>
          <span class="c-video-player_describe">{{ video.videoDescribe }}</span>
        </UniCollapseItem>
      </UniCollapse>
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import UniCollapse from "@dcloudio/uni-ui/lib/uni-collapse/uni-collapse.vue";
import UniCollapseItem from "@dcloudio/uni-ui/lib/uni-collapse-item/uni-collapse-item.vue";
import { getCurrentPage } from "@/utils";
import videoApi from "./api/index.js";

export default Vue.extend({
  components: {
    UniCollapse,
    UniCollapseItem,
  },
  data() {
    return {
      video: {},
    };
  },
  methods: {
    async updateVideoOnInit() {
      try {
        let route = getCurrentPage();
        this.video = await videoApi.getDetail(route.query.videoID);
      } catch (e) {}
    },
  },
  async mounted() {
    await this.updateVideoOnInit();
  },
});
</script>

<style lang="scss" scoped>
@import "./style/video-player.scss";
</style>
