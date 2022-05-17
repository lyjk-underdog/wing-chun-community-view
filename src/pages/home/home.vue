<template>
  <view class="p-home">
    <view class="p-home_header">
      <Carousel :imgList="carousel.imgList" :played="carousel.played" />
    </view>
    <view class="p-home_body">
      <section class="l-link-list">
        <List>
          <LinkView
            v-for="(item, index) in linkList"
            :key="index"
            :url="item.url"
          >
            <ListItem :item="item" />
          </LinkView>
        </List>
      </section>
      <uni-notice-bar
        scrollable
        single
        :text="'通知：  ' + notice"
      ></uni-notice-bar>
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import Carousel from "@/ui/carousel/carousel.vue";
import LinkView from "@/ui/link-view.vue";
import List from "@/ui/list/list.vue";
import ListItem from "@/ui/list/list-item.vue";
import UniNoticeBar from "@dcloudio/uni-ui/lib/uni-notice-bar/uni-notice-bar.vue";

import articleLinkIcon from "./image/article-link.svg";
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
    UniNoticeBar,
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
        {
          title: "教学文章",
          iconSrc: articleLinkIcon,
          url: "articles",
        },
      ],
      notice:'这个周末要补课！！大家不要忘记了，记得来上课！！'
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
.p-home {
  min-height: 100vh;
  background: #f6f6f8;
  flex-direction: column;

  &_body {
    padding: 30rpx 30rpx 0;
    flex: 0 0 auto;
    margin-bottom: 20rpx;

    .l-link-list {
      margin-bottom: 30rpx;
    }
  }
}
</style>

