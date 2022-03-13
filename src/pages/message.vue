<template>
  <view class="p-message">
    <view class="p-message_body">
      <SegmentedcControl :panesVal="panesVal">
        <template v-slot:0>
          <MessageUnreadList />
        </template>
        <template v-slot:1>
          <MessageReadList />
        </template>
      </SegmentedcControl>
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import SegmentedcControl from "@/component/common/segmented-control/segmented-control.vue";
import MessageUnreadList from "@/component/message-list/message-unread-list.vue";
import MessageReadList from "@/component/message-list/message-read-list.vue";

export default Vue.extend({
  components: {
    SegmentedcControl,
    MessageUnreadList,
    MessageReadList,
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

