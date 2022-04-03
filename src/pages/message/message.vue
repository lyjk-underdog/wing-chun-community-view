<template>
  <view class="p-message">
    <view class="p-message_body">
      <SegmentedcControl :panesVal="panesVal">
        <template v-slot:0>
          <MessageList />
        </template>
      </SegmentedcControl>
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import SegmentedcControl from "@/ui/segmented-control/segmented-control.vue";
import MessageList from "@/features/message/message-list.vue";

export default Vue.extend({
  components: {
    SegmentedcControl,
    MessageList,
  },
  data() {
    return {
      panesVal: ["评论消息"],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./message.scss";
</style>

