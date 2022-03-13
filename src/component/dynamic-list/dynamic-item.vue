<template>
  <view class="c-dynamic-item">
    <view class="c-dynamic-item_header">
      <img class="c-dynamic-item_avatar" :src="item.user.avatar" />
      <view>
        <view class="c-dynamic-item_user-name">{{ item.user.name }}</view>
        <view class="c-dynamic-item_release-time">{{ item.releaseTime }}</view>
      </view>
    </view>
    <view class="c-dynamic-item_body">
      <view class="c-dynamic-item_content">{{ item.content }}</view>
    </view>
    <view class="c-dynamic-item_footer">
      <view @click="navigateToCommentPage" class="c-dynamic-item_comment">
        <img
          class="c-dynamic-item_comment-icon"
          src="@/static/img/comment.svg"
        />
        <span class="c-dynamic-item_comments-num">{{ item.commentsNum }}</span>
      </view>
      <view class="c-dynamic-item_like">
        <img class="c-dynamic-item_like-icon" src="@/static/img/like.svg" />
        <span class="c-dynamic-item_like-num">{{ item.likeNum }}</span>
      </view>
    </view>
  </view>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: ["item"],
  methods: {
    navigateToCommentPage() {
      uni.navigateTo({
        url: `comment?id=${this.item.id}`,
      });
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./style/dynamic-item.scss";
</style>
