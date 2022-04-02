<template>
  <view class="c-comment-item">
    <view class="c-comment-item_header">
      <view class="c-comment-item_user">
        <img :src="comment.user.avatar" />
        <span>{{ comment.user.name }}</span>
      </view>
      <view class="c-comment-item_like" @click="emitOnLiked">
        <span>{{ comment.likeNum }}</span>
        <img :src="comment.likeType === 1 ? likeIconActive : likeIcon " />
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
import likeIcon from './image/like.svg';
import likeIconActive from './image/like--active.svg';

export default Vue.extend({
  props:{
    comment:{
      type:Object,
      required:true
    }
  },
  data() {
    return {
      likeIcon,
      likeIconActive
    };
  },
  methods:{
    emitOnLiked(){
      this.comment.likeType === 0 && this.$emit('liked' , this.comment.commentID);
    }
  }
});
</script>

<style lang="scss" scoped>
@import "./style/comment-item.scss";
</style>