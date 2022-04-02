<template>
  <view class="c-comment-item">
    <view class="c-comment-item_header">
      <view class="c-comment-item_user">
        <img :src="comment.user.avatar" />
        <span>{{ comment.user.name }}</span>
      </view>
      <view class="c-comment-item_like" @click="like">
        <span>{{ comment.likeNum }}</span>
        <img :src="comment.likeType === 1 ? likeIconActive : likeIcon" />
      </view>
    </view>
    <view class="c-comment-item_body">
      <view class="c-comment-item_content">{{ comment.content }}</view>
    </view>
    <view class="c-comment-item_footer">
      <span class="c-comment-item_release-time">{{ comment.releaseTime }}</span>
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import likeIcon from "./image/like.svg";
import likeIconActive from "./image/like--active.svg";
import dynamicApi from "./api/index.js";

export default Vue.extend({
  props: ["comment"],
  data() {
    return {
      likeIcon,
      likeIconActive,
    };
  },
  methods: {
    async like() {
      try {
        this.comment.likeType === 0 &&
          (await dynamicApi.likeComment(this.comment.commentID));
        this.comment.likeType = 1;
      } catch (e) {
        throw e;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./style/comment-item.scss";
</style>