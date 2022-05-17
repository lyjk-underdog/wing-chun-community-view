<template>
  <view class="p-user">
    <view class="p-user_header">
      <UserInfo />
    </view>
    <view class="p-user_body">
      <section class="l-list">
        <List type="strip">
          <LinkView v-for="(item , index) in linkList" :key="index" :url="item.url">
            <ListItem :item="item" type="strip" />
          </LinkView>
        </List>
      </section>
      <section class="l-list">
        <List type="strip">
          <PasswordModify />
          <LogOut />
        </List>
      </section>
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import UserInfo from "@/features/user/user-info.vue";
import LinkView from "@/ui/link-view.vue";
import List from "@/ui/list/list.vue";
import ListItem from "@/ui/list/list-item.vue";
import LogOut from "@/features/user/logout.vue";
import rankLinkIcon from "./rank-link.svg";
import learnIcon from '@/static/image/user/learn.svg';

import PasswordModify from './components/password-modify.vue';

export default Vue.extend({
  components: {
    UserInfo,
    LinkView,
    List,
    ListItem,
    List,
    LogOut,
    PasswordModify
  },
  //page中的data都是关于这个页面的配置，最好不要涉及后端请求的数据
  data() {
    return {
      linkList: [
        {
          iconSrc: rankLinkIcon,
          title: "排行榜",
          url: "ranking/index",
        },
        {
          iconSrc: learnIcon,
          title: "学习记录",
          url: "learn-record/index"
        }
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./user.scss";
</style>
