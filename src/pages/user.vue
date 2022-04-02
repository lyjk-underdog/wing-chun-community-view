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
import rankingIcon from "@/static/img/ranking.svg";

export default Vue.extend({
  components: {
    UserInfo,
    LinkView,
    List,
    ListItem,
    List,
    LogOut
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
