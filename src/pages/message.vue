<template>
  <view class="p-message">
    <view class="p-message_body">
      <SegmentedcControl :panesVal="panesVal">
        <template v-slot:0>
          <MessageList type="unread" />
        </template>
        <template v-slot:1>
          <MessageList type="read" />
        </template>
      </SegmentedcControl>
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import SegmentedcControl from "@/ui/segmented-control/segmented-control.vue";
import MessageList from '@/features/message/message-list.vue';

export default Vue.extend({
  components: {
    SegmentedcControl,
    MessageList
  },
  data() {
    return {
      panesVal: ["未读消息", "已读消息"],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style/message.scss";
</style>

