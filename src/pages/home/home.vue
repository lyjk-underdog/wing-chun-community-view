<template>
  <view class="p-home">
    <view class="p-home_header">
      <Carousel :imgList="carousel.imgList" :played="carousel.played" />
    </view>
    <view class="p-home_body">
      <List>
        <LinkView
          v-for="(item, index) in linkList"
          :key="index"
          :url="item.url"
        >
          <ListItem :item="item" />
        </LinkView>
      </List>
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import Carousel from "@/ui/carousel/carousel.vue";
import LinkView from "@/ui/link-view.vue";
import List from "@/ui/list/list.vue";
import ListItem from "@/ui/list/list-item.vue";

import videoLinkIcon from "./image/video-link.svg";
import carouselB1Icon from "./image/carousel-b1.svg";
import carouselB2Icon from "./image/carousel-b2.svg";
import carouselB3Icon from "./image/carousel-b3.svg";
import carouselB4Icon from "./image/carousel-b4.svg";

export default Vue.extend({
  components: {
    Carousel,
    LinkView,
    List,
    ListItem,
  },
  //home页面的配置信息
  data() {
    return {
      carousel: {
        played: true,
        imgList: [
          {
            src: carouselB1Icon,
            backgroundColor: "#7F75EF",
          },
          {
            src: carouselB2Icon,
            backgroundColor: "#F4AB18",
          },
          {
            src: carouselB3Icon,
            backgroundColor: "#FF5569",
          },
          {
            src: carouselB4Icon,
            backgroundColor: "#95D356",
          },
        ],
      },
      linkList: [
        {
          title: "教学视频",
          iconSrc: videoLinkIcon,
          url: "instruct-video/instruct-video",
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
@import "./home.scss";
</style>

