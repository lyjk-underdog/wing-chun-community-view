<template>
  <view class="p-dynamic-comment">
    <view class="p-dynamic-comment_header">
      <DynamicOnly />
    </view>
    <view class="p-dynamic-comment_body">
      <SegmentedcControl :panesVal="panesVal">
        <template v-slot:0>
          <DynamicCommentList type="latest" />
        </template>
        <template v-slot:1>
          <DynamicCommentList type="hot" />
        </template>
      </SegmentedcControl>
    </view>
    <view class="p-dynamic-comment_footer">
      <DynamicReplyer />
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import DynamicOnly from "@/features/dynamic/dynamic-only.vue";
import SegmentedcControl from "@/ui/segmented-control/segmented-control.vue";
import DynamicCommentList from "@/features/dynamic/comment-list.vue";
import DynamicReplyer from "@/features/dynamic/dynamic-replyer.vue";

export default Vue.extend({
  components: {
    DynamicOnly,
    SegmentedcControl,
    DynamicCommentList,
    DynamicReplyer,
  },
  data() {
    return {
      panesVal: ["最新评论", "热门评论"],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./dynamic-comment.scss";
</style>
