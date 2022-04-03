<template>
  <view class="c-comment-list">
    <LongList
      :totalPage="totalPage"
      :curPage="curPage"
      :scrollTop.sync="scrollTop"
      @turnPages="updateLongListOnTurnPages"
      @refresherrefresh="updateLongListOnInit"
    >
      <section
        class="l-comment-item"
        v-for="comment in list"
        :key="comment.commentID"
      >
        <CommentItem
          :comment="comment"
          @liked="
            (targetCommentID) =>
              updateTargetLikeInfoOnlike(targetCommentID, 'commentID')
          "
        />
      </section>
    </LongList>
  </view>
</template>

<script>
import Vue from "vue";
import CommentItem from "./comment-item.vue";
import LongList from "@/ui/long-list/long-list.vue";
import {
  useUpdateLongList,
  useListenToUpdate,
} from "@/hooks/long-list/index.js";
import { useLike } from "@/hooks/like.js";
import dynamicApi from "./api/index.js";
import { getCurrentPage } from "@/utils/index.js";

export default Vue.extend({
  mixins: [useUpdateLongList, useListenToUpdate, useLike],
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
        latest: "onDynamicReply",
        hot: null,
      };

      return Strategy[this.type];
    },
  },
  methods: {
    async getLongListInOnePage(page) {
      let route = getCurrentPage();
      return await dynamicApi.getCommentList(
        route.query.dynamicID,
        this.type,
        page
      );
    },
    like: dynamicApi.likeComment,
  },
});
</script>

<style lang="scss" scoped>
@import "./style/comment-list.scss";
</style>
