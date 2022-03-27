<template>
  <view class="c-message-unread-list">
    <MessageList :list="list" />

    <section class="l-full-read-badge-btn">
      <FullReadBadgeBtn :unreadNum="list.length" @allRead="list = []" />
    </section>
  </view>
</template>

<script>
import Vue from "vue";
import MessageList from './message-list.vue';
import FullReadBadgeBtn from "./full-read-badge-btn.vue";
import avatarIcon from "@/static/img/avatar.svg";
import messageApi from "@/api/message/index.js";

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
          releaseTime: "1648199959",
        },
        {
          id: "1",
          dynamicId: "0",
          user: {
            avatar: avatarIcon,
            name: "笑嘻嘻",
          },
          content: "新年快乐！",
          releaseTime: "1648199959",
        },
        {
          id: "2",
          dynamicId: "0",
          user: {
            avatar: avatarIcon,
            name: "浅夏",
          },
          content: "同乐同乐~",
          releaseTime: "1648199959",
        },
        {
          id: "3",
          dynamicId: "0",
          user: {
            avatar: avatarIcon,
            name: "叙利亚帅哥",
          },
          content: "祝你梦想成真！",
          releaseTime: "1648199959",
        },
      ],
    };
  },
  methods:{
    async fetchListState(){
      try{
        this.list = await messageApi.getlist('unread');
      }catch(e){}
    },
  },
  async created(){
    // await this.fetchListState();
  }
});
</script>

<style lang="scss" scoped>
@import "./style/message-unread-list.scss";
</style>

