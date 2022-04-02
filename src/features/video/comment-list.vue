<template>
  <view class="c-comment-list">
    <LongList
      :totalPage="totalPage"
      :curPage="curPage"
      :scrollTop.sync="scrollTop"
      @turnPages="fetchListTurnPages"
      @refresherrefresh="fetchListInit"
    >
      <section
        class="l-comment-item"
        v-for="comment in list"
        :key="comment.commentID"
      >
        <CommentItem
          :comment="comment"
          @liked="(targetCommentID) => likeCommentByPost(targetCommentID)"
        />
      </section>
    </LongList>
  </view>
</template>

<script>
import Vue from "vue";
import CommentItem from "./comment-item.vue";
import LongList from "@/ui/long-list/long-list.vue";
import { useFetchItems, useListenPublish } from "@/hooks/long-list/index.js";
import videoApi from "./api/index.js";
import { getCurrentPage } from "@/utils/index.js";

export default Vue.extend({
  mixins: [useFetchItems, useListenPublish],
  components: {
    CommentItem,
    LongList,
  },
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    listener() {
      let Strategy = {
        new: "onVideoReply",
        hot: null,
      };

      return Strategy[this.type];
    },
  },
  methods: {
    async metaFetch(page) {
      let route = getCurrentPage();
      return await videoApi.getCommentList(
        route.query.videoID,
        this.type,
        page
      );
    },
    async likeCommentByPost(targetCommentID) {
      try {
        await videoApi.likeComment(targetCommentID);
        this.list = this.list.map((comment) =>
          comment.commentID === targetCommentID
            ? { ...comment, likeNum: comment.likeNum + 1, likeType: 1 }
            : { ...comment }
        );
      } catch (e) {
        throw e;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./style/comment-list.scss";
</style>
