<template>
  <view class="p-article-detail">
    <view class="p-article-detail_header">
      <view class="p-article-detail_title">{{ article.title }}</view>
      
      <view class="p-article-detail_publish-time"
        >发布时间：{{ article.publishTime }}</view
      >
      <view class="p-article-detail_readNums"
        >已浏览{{ article.readNums }}次</view
      >
    </view>
    <view class="p-article-detail_content" v-html="article.content"></view>
  </view>
</template>

<script>
import articleApi from '@/api/article';
import { getCurrentPage } from '@/utils'

export default {
  data() {
    return {
      article: {},
    };
  },
  methods:{
    updateArticle(){
      const { articleId } = getCurrentPage().query;
      this.article = articleApi.getDetail(articleId);
    }
  },
  mounted(){
    this.updateArticle();
  }
};
</script>

<style lang="scss" scoped>
.p-article-detail {
  &_header {
    padding: 20rpx;
    border-bottom: 5rpx solid #f6f6f8;
  }

  &_content {
    padding: 20rpx;
    color: #333;
    font-size: 30rpx;
    line-height: 45rpx;
    white-space: pre-line;
  }

  &_title {
    font-size: 35rpx;
    font-weight: bold;
  }

  &_readNums {
    color: #666666;
    font-size: 28rpx;
  }

  &_publish-time {
    margin: 15rpx 0;
    color: #999999;
    font-size: 28rpx;
  }

}
</style>