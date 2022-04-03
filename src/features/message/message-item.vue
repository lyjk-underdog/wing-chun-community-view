<template>
  <LinkView :url="`dynamic-comment/dynamic-comment?dynamicID=${message.dynamicID}`">
    <view class="c-message-item" @click="emitOnRead">
      <UniBadge
        type="error"
        :is-dot="true"
        :text="message.msgType === 1 ? 0 : 1"
        absolute="leftTop"
      >
        <img class="c-message-item_avatar" :src="message.user.avatar" />
      </UniBadge>
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
import UniBadge from "@dcloudio/uni-ui/lib/uni-badge/uni-badge.vue";

export default Vue.extend({
  components: {
    LinkView,
    UniBadge,
  },
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
  methods: {
    emitOnRead() {
      this.message.msgType === 0 && this.$emit("read", this.message.commentID);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./style/message-item.scss";
</style>
