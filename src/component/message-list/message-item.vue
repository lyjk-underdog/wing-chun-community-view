<template>
  <view class="c-message-item" @click="linkToCommentPage">
    <img class="c-message-item_avatar" :src="message.user.avatar" />
    <view class="c-message-item_body">
      <view class="c-message-item_username">{{ message.user.name }}</view>
      <view class="c-message-item_content">{{ message.content }}</view>
      <view class="c-message-item_release-time"
        >在{{ message.releaseTime }}评论了你</view
      >
    </view>
  </view>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: ["message"],
  methods: {
    linkToCommentPage() {
      uni.navigateTo({
        url: `comment?id=${this.message.dynamicId}`,
      });
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./style/message-item.scss";
</style>
