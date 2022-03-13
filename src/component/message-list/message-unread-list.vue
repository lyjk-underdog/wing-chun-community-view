<template>
  <view class="c-message-unread-list">
    <MessageList :list="list" />

    <section class="l-full-read-badge-btn">
      <FullReadBadgeBtn :unreadNum="list.length" />
    </section>
  </view>
</template>

<script>
import Vue from "vue";
import MessageList from './message-list.vue';
import FullReadBadgeBtn from "./full-read-badge-btn.vue";
import avatarIcon from "@/static/img/avatar.svg";

export default Vue.extend({
  components: {
    MessageList,
    FullReadBadgeBtn,
  },
  data() {
    return {
      list: [
        {
          id: "0",
          dynamicId: "0",
          user: {
            avatar: avatarIcon,
            name: "老八",
          },
          content:
            "新年快乐！新年快乐！新年快乐！新年快乐！新年快乐！新年快乐！新年快乐！新年快乐！新年快乐！新年快乐！",
          releaseTime: "2021-11-01",
        },
        {
          id: "1",
          dynamicId: "0",
          user: {
            avatar: avatarIcon,
            name: "笑嘻嘻",
          },
          content: "新年快乐！",
          releaseTime: "2021-11-01",
        },
        {
          id: "2",
          dynamicId: "0",
          user: {
            avatar: avatarIcon,
            name: "浅夏",
          },
          content: "同乐同乐~",
          releaseTime: "2021-11-01",
        },
        {
          id: "3",
          dynamicId: "0",
          user: {
            avatar: avatarIcon,
            name: "叙利亚帅哥",
          },
          content: "祝你梦想成真！",
          releaseTime: "2021-11-01",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style/message-unread-list.scss";
</style>

