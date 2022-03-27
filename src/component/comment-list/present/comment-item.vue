<template>
  <view class="c-comment-item">
    <view class="c-comment-item_header">
      <view class="c-comment-item_user">
        <img :src="comment.user.avatar" />
        <span>{{ comment.user.name }}</span>
      </view>
      <view class="c-comment-item_like">
        <span>{{ comment.likeNum }}</span>
        <img src="@/static/img/like.svg" />
      </view>
    </view>
    <view class="c-comment-item_body">
        <view class="c-comment-item_content">{{comment.content}}</view>
    </view>
    <view class="c-comment-item_footer">
        <span class="c-comment-item_release-time">{{comment.releaseTime}}</span>
    </view>
  </view>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: ['comment']
});
</script>

<style lang="scss" scoped>
@import "./style/comment-item.scss";
</style>