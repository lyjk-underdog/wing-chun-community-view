<template>
  <view class="p-comment">
    <view class="p-comment_header">
      <DynamicOnly />
    </view>
    <view class="p-comment_body">
      <SegmentedcControl :panesVal="panesVal">
        <template v-slot:0>
          <CommentDynamicNewList />
        </template>
        <template v-slot:1>
          <CommentDynamicHotList />
        </template>
      </SegmentedcControl>
    </view>
    <view class="p-comment_footer">
      <ReplyDynamic />
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import DynamicOnly from "@/component/dynamic-list/dynamic-only.vue";
import SegmentedcControl from "@/component/common/segmented-control/segmented-control.vue";
import CommentDynamicNewList from "@/component/comment-list/comment-dynamic-new-list.vue";
import CommentDynamicHotList from "@/component/comment-list/comment-dynamic-hot-list.vue";
import ReplyDynamic from "@/component/replyer/replyer-dynamic.vue";

export default Vue.extend({
  components: {
    DynamicOnly,
    SegmentedcControl,
    CommentDynamicNewList,
    CommentDynamicHotList,
    ReplyDynamic,
  },
  data() {
    return {
      panesVal: ["最新评论", "热门评论"],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style/comment.scss";
</style>
