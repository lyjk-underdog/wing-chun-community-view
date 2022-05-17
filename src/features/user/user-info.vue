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
          <view class="c-user-info-item_header">{{ info.title }}</view>
          <view class="c-user-info-item_footer">{{ info.num }}</view>
        </view>
      </section>
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import userApi from "./api/index.js";

export default Vue.extend({
  data() {
    return {
      user: {},
    };
  },
  computed: {
    infoList() {
      let { dynamicNum, likeNum } = this.user;
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
          title: "学习时长(时)",
          num: 65,
        },
      ];
    },
  },
  methods: {
    async updateUserInfoOnInit() {
      try {
        this.user = await userApi.getInfo();
      } catch (e) {
        throw e;
      }
    },
  },
  created() {
    this.updateUserInfoOnInit();
  },
});
</script>

<style lang="scss" scoped>
@import "./style/user-info.scss";
</style>
