<template>
  <MessageList :list="list" />
</template>

<script>
import Vue from "vue";
import MessageList from './message-list.vue';
import avatarIcon from "@/static/img/avatar.svg";

export default Vue.extend({
  components: {
    MessageList,
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
      ],
    };
  },
});
</script>
