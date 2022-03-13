<template>
  <view class="p-user">
    <view class="p-user_header">
      <UserInfo />
    </view>
    <view class="p-user_body">
      <section class="l-link-strip-list">
        <LinkStripList :list="linkList1" />
      </section>
      <section class="l-link-strip-list">
        <LinkStripList :list="linkList2" />
      </section>
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import UserInfo from "@/component/user-info/user-info.vue";
import LinkStripList from "@/component/common/link-list/link-strip-list.vue";

import rankingIcon from "@/static/img/ranking.svg";
import logoutIcon from "@/static/img/logout.svg";

export default Vue.extend({
  components: {
    UserInfo,
    LinkStripList,
  },
  //page中的data都是关于这个页面的配置，最好不要涉及后端请求的数据
  data() {
    return {
      linkList1: [
        {
          iconSrc: rankingIcon,
          title: "排行榜",
          url: "ranking",
        },
      ],
      linkList2: [
        {
          iconSrc: logoutIcon,
          title: "退出登录",
          url: "",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style/user.scss";
</style>
