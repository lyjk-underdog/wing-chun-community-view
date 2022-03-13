<template>
  <view class="c-user-info">
    <view class="c-user-info_header">
      <img class="c-user-info_avatar" :src="user.avatar" />
      <span class="c-user-info_name">{{ user.name }}</span>
    </view>
    <view class="c-user-info_footer">
      <section
        class="l-user-info-item"
        v-for="(info, index) in infoList"
        :key="index"
      >
        <view class="c-user-info-item">
          <view class="c-user-info-item_header">{{info.title}}</view>
          <view class="c-user-info-item_footer">{{info.num}}</view>
        </view>
      </section>
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import avatarIcon from "@/static/img/avatar-man.svg";

export default Vue.extend({
  data() {
    return {
      user: {
        avatar: avatarIcon,
        name: "我爱旺仔",
        dynamicNum: 37,
        likeNum: 244,
        fanNum: 12,
        attentionNum: 167,
      },
    };
  },
  computed: {
    infoList() {
      let { dynamicNum, likeNum, fanNum, attentionNum } = this.user;
      return [
        {
          title: "动态",
          num: dynamicNum,
        },
        {
          title: "获赞",
          num: likeNum,
        },
        {
          title: "粉丝",
          num: fanNum,
        },
        {
          title: "关注",
          num: attentionNum,
        },
      ];
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./style/user-info.scss";
</style>
