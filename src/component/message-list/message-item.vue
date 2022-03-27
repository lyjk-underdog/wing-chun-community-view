<template>
  <LinkView :url="`comment?dynamicID=${this.message.dynamicID}`">
    <view class="c-message-item">
      <img class="c-message-item_avatar" :src="message.user.avatar" />
      <view class="c-message-item_body">
        <view class="c-message-item_username">{{ message.user.name }}</view>
        <view class="c-message-item_content">{{ message.content }}</view>
        <view class="c-message-item_release-time"
          >在{{ releaseTime }}评论了你</view
        >
      </view>
    </view>
  </LinkView>
</template>

<script>
import Vue from "vue";
import { formatDate } from "@/utils/index.js";
import LinkView from "@/component/common/link-list/link-view.vue";

export default Vue.extend({
  components: {
    LinkView,
  },
  props: ["message"],
  computed: {
    releaseTime() {
      return formatDate(Number.parseInt(this.message.releaseTime));
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./style/message-item.scss";
</style>
