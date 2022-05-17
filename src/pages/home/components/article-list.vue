<template>
  <view class="c-article-list">
    <SegmentedControl :panesVal="panesVal">
      <template v-slot:0>
        <view class="c-article-list_body">
          <section
            class="l-article-card"
            v-for="article in articleList"
            :key="article.id"
          >
            <view class="c-article-card">
              <view class="c-article-card_title">{{ article.title }}</view>
              <view class="c-article-card_publish-time">{{
                article.publishTime
              }}</view>
              <view class="c-article-card_content">
                <image
                  class="c-article-card_pic"
                  mode="aspectFill"
                  src="https://s3.bmp.ovh/imgs/2022/04/23/b642cda00597ccb2.jpg"
                />
                {{ article.content }}
              </view>

              <view class="c-article-card_readNums"
                >已浏览{{ article.readNums }}次</view
              >
            </view>
          </section>
        </view>
      </template>
    </SegmentedControl>
  </view>
</template>

<script>
import SegmentedControl from "@/ui/segmented-control/segmented-control.vue";

export default {
  components: {
    SegmentedControl,
  },
  data() {
    return {
      panesVal: ["咏春资讯"],
      articleList: [
        {
          id: "0",
          title: "咏春该怎么学习？",
          content:
            "文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容",
          publishTime: "2021-04-23 21:23:20",
          readNums: "100",
        },
        {
          id: "1",
          title: "咏春该怎么学习？",
          content:
            "文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容",
          publishTime: "2021-04-23 21:23:20",
          readNums: "20",
        },
        {
          id: "2",
          title: "咏春该怎么学习？",
          content:
            "文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容",
          publishTime: "2021-04-23 21:23:20",
          readNums: "14",
        },
        {
          id: "3",
          title: "咏春该怎么学习？",
          content:
            "文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容",
          publishTime: "2021-04-23 21:23:20",
          readNums: "14",
        },
        {
          id: "4",
          title: "咏春该怎么学习？",
          content:
            "文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容",
          publishTime: "2021-04-23 21:23:20",
          readNums: "14",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.c-article-list {
  height: 100%;

  .l-article-card {
    border-bottom: 20rpx solid #f6f6f8;

    &:last-child {
      border-bottom: none;
    }
  }

  .c-article-card {
    background: #fff;
    padding: 20rpx;

    &_title {
      font-size: 30rpx;
      font-weight: bold;
    }

    &_publish-time {
      color: #999999;
      font-size: 28rpx;
      margin: 20rpx 0;
    }

    &_readNums {
      color: #666666;
      font-size: 28rpx;
    }

    &_content {
      color: #666666;
      font-size: 28rpx;
      overflow: hidden;
      /*将对象作为弹性伸缩盒子模型显示*/
      display: -webkit-box;
      /*设置子元素排列方式*/
      -webkit-box-orient: vertical;
      /*设置显示的行数，多出的部分会显示为...*/
      -webkit-line-clamp: 3;
      margin-bottom: 20rpx;
    }

    &_pic {
      margin-left: 20rpx;
      width: 200rpx;
      height: 100rpx;
      float: right;
    }
  }
}
</style>