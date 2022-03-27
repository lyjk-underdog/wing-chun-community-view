<template>
  <view class="p-user">
    <view class="p-user_header">
      <UserInfo />
    </view>
    <view class="p-user_body">
      <section class="l-list">
        <LinkList :list="linkList" type="strip" />
      </section>
      <section class="l-list">
        <List type="strip">
          <LogOut />
        </List>
      </section>
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import UserInfo from "@/component/user-info/user-info.vue";
import LinkList from "@/component/common/link-list/link-list.vue";
import LogOut from "@/component/logout/logout.vue";
import List from "@/component/common/link-list/list.vue";
import rankingIcon from "@/static/img/ranking.svg";

export default Vue.extend({
  components: {
    UserInfo,
    LinkList,
    LogOut,
    List,
  },
  //page中的data都是关于这个页面的配置，最好不要涉及后端请求的数据
  data() {
    return {
      linkList: [
        {
          iconSrc: rankingIcon,
          title: "排行榜",
          url: "ranking",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style/user.scss";
</style>
