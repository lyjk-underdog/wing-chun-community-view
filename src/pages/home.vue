<template>
  <view class="p-home">
    <view class="p-home_header">
      <Carousel :imgList="carousel.imgList" :played="carousel.played" />
    </view>
    <view class="p-home_body">
      <LinkBlockList title="小工具" :list="linkList" />
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import Carousel from "@/component/common/carousel/carousel.vue";
import LinkBlockList from "@/component/common/link-list/link-block-list.vue";

import videoIcon from "@/static/img/video.svg";
import b1Icon from "@/static/img/carousel/b1.svg";
import b2Icon from "@/static/img/carousel/b2.svg";
import b3Icon from "@/static/img/carousel/b3.svg";
import b4Icon from "@/static/img/carousel/b4.svg";

export default Vue.extend({
  components: {
    Carousel,
    LinkBlockList,
  },
  //home页面的配置信息
  data() {
    return {
      carousel: {
        played: true,
        imgList: [
          {
            src: b1Icon,
            backgroundColor: "#7F75EF",
          },
          {
            src: b2Icon,
            backgroundColor: "#F4AB18",
          },
          {
            src: b3Icon,
            backgroundColor: "#FF5569",
          },
          {
            src: b4Icon,
            backgroundColor: "#95D356",
          },
        ],
      },
      linkList: [
        {
          title: "教学视频",
          iconSrc: videoIcon,
          url: "instruct-video",
        },
      ],
    };
  },
  onHide() {
    this.carousel.played = false;
  },
  onShow() {
    this.carousel.played = true;
  },
});
</script>

<style lang="scss" scoped>
@import "./style/home.scss";
</style>

