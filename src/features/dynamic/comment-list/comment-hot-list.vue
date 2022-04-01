<template>
  <view class="c-comment-list">
    <LongList
      :totalPage="totalPage"
      :curPage="curPage"
      :scrollTop.sync="scrollTop"
      @turnPages="fetchListTurnPages"
      @refresherrefresh="fetchListInit"
    >
      <section class="l-comment-item" v-for="comment in list" :key="comment.id">
        <CommentItem :comment="comment" />
      </section>
    </LongList>
  </view>
</template>

<script>
import Vue from "vue";
import CommentItem from "./comment-item.vue";
import LongList from "@/ui/long-list/long-list.vue";
import useFetchHotList from './hooks/fetch-hot-list.js';

export default Vue.extend({
  components: {
    CommentItem,
    LongList,
  },
  mixins:[useFetchHotList]
});
</script>

<style lang="scss" scoped>
@import "./style/comment-list.scss";
</style>
