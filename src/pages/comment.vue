<template>
  <view class="p-comment">
    <view class="p-comment_header">
      <DynamicOnly />
    </view>
    <view class="p-comment_body">
      <SegmentedcControl :panesVal="panesVal">
        <template v-slot:0>
          <DynamicCommentNewList />
        </template>
        <template v-slot:1>
          <DynamicCommentHotList />
        </template>
      </SegmentedcControl>
    </view>
    <view class="p-comment_footer">
      <Reply type="dynamic" />
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import DynamicOnly from "@/features/dynamic/dynamic-list/dynamic-only.vue";
import SegmentedcControl from "@/component/common/segmented-control/segmented-control.vue";
import DynamicCommentNewList from "@/features/dynamic/comment-list/comment-new-list.vue";
import DynamicCommentHotList from "@/features/dynamic/comment-list/comment-hot-list.vue";
import Reply from "@/component/replyer/replyer.vue";

export default Vue.extend({
  components: {
    DynamicOnly,
    SegmentedcControl,
    DynamicCommentNewList,
    DynamicCommentHotList,
    Reply,
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
