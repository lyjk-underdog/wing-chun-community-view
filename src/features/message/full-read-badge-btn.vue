<template>
  <view class="c-full-read-badge-btn">
    <UniBadge :text="unreadNum" type="error" absolute="rightTop">
      <view class="c-full-read-badge-btn_body" @click="readAll"
        >一键已读</view
      >
    </UniBadge>
  </view>
</template>

<script>
import Vue from "vue";
import UniBadge from "@dcloudio/uni-ui/lib/uni-badge/uni-badge.vue";
import messageApi from "./api/index.js";
import PubSub from 'pubsub-js';

export default Vue.extend({
  components: {
    UniBadge,
  },
  props: {
    unreadNum: [String, Number],
  },
  methods: {
    async readAll() {
      try {
        this.unreadNum && await messageApi.readMsg('all');
        PubSub.publish('onUnreadMsgReaded');
      } catch (e) {
        throw e;
      }
    },
  }
});
</script>

<style lang="scss" scoped>
@import "./style/full-read-badge-btn.scss";
</style>
