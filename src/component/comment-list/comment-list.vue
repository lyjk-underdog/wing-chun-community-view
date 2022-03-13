<template>
  <view class="c-comment-list">
    <section class="l-comment-item" v-for="comment in list" :key="comment.id">
      <CommentItem :comment="comment" />
    </section>
  </view>
</template>

<script>
import Vue from "vue";
import CommentItem from "./comment-item.vue";

export default Vue.extend({
  components: {
    CommentItem,
  },
  props:{
      list:{
          type:Array,
          default:() => []
      }
  },
});
</script>

<style lang="scss" scoped>
@import "./style/comment-list.scss";
</style>
