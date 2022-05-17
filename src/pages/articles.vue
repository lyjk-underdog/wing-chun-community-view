<template>
  <view class="p-articles">
    <SegmentedControl :panesVal="panesVal">
      <template v-slot:0>
        <view class="p-articles_body">
          <section
            class="l-article-card"
            v-for="article in articleList"
            :key="article.id"
          >
            <LinkView :url="`article-detail?articleId=${article.id}`">
              <view class="c-article-card">
                <view class="c-article-card_title">{{ article.title }}</view>
                <view class="c-article-card_publish-time">{{
                  article.publishTime
                }}</view>
                <view class="c-article-card_content">
                  <image
                    v-if="!!article.firstPic"
                    class="c-article-card_pic"
                    mode="aspectFill"
                    :src="article.firstPic"
                  />
                  {{ article.content }}
                </view>

                <view class="c-article-card_readNums"
                  >已浏览{{ article.readNums }}次</view
                >
              </view>
            </LinkView>
          </section>
        </view>
      </template>
    </SegmentedControl>
  </view>
</template>

<script>
import SegmentedControl from "@/ui/segmented-control/segmented-control.vue";
import LinkView from "@/ui/link-view.vue";
import articleApi from "@/api/article";

export default {
  components: {
    SegmentedControl,
    LinkView,
  },
  data() {
    return {
      panesVal: ["全部"],
      articleList: []
    };
  },
  methods:{
      updateArticleList(){
          this.articleList = articleApi.getList();
      }
  },
  created(){
      this.updateArticleList();
  }
};
</script>

<style lang="scss" scoped>
.p-articles {
  height: 100vh;

  .l-article-card {
    border-bottom: 20rpx solid #f6f6f8;
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