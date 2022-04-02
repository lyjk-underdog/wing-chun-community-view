<template>
  <LinkView :url="`comment?dynamicID=${message.dynamicID}`">
    <view class="c-message-item" @click="read">
      <img class="c-message-item_avatar" :src="message.user.avatar" />
      <view class="c-message-item_body">
        <view class="c-message-item_username">{{ message.user.name }}</view>
        <view class="c-message-item_content">{{ message.content }}</view>
        <view class="c-message-item_release-time"
          >在{{ message.releaseTime }}评论了你</view
        >
      </view>
    </view>
  </LinkView>
</template>

<script>
import Vue from "vue";
import LinkView from "@/ui/link-view.vue";
import messageApi from "./api/index.js";
import PubSub from "pubsub-js";

export default Vue.extend({
  components: {
    LinkView,
  },
  props: ["message", "type"],
  methods: {
    async read() {
      if (this.type === "unread") {
        messageApi.readMsg("one", this.message.commentID);
        PubSub.publish("onUnreadMsgReaded");
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./style/message-item.scss";
</style>
