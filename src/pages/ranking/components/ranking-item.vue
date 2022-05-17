<template>
  <view class="c-ranking-item">
    <view class="c-ranking-item_left">
      <img
        class="c-ranking-item_medal-icon"
        v-if="index <= 2"
        :src="medalIcon"
      />
      <span class="c-ranking-item_rank" v-else>{{ index }}</span>

      <img class="c-ranking-item_user-avatar" :src="avatar || defaultAvatar" />

      <span class="c-ranking-item_user-name">{{ username }}</span>
    </view>

    <view class="c-ranking-item_right">
      <span>积分:</span>
      <img
        class="c-ranking-item_star-icon"
        src="@/static/image/ranking/star.svg"
      />
      <span>{{ score }}</span>
    </view>
  </view>
</template>

<script>
import avatarIcon from "@/static/image/user/avatar.svg";
import goldMedalIcon from "@/static/image/ranking/gold-medal.svg";
import bronzeMedalIcon from "@/static/image/ranking/bronze-medal.svg";
import silverMedalIcon from "@/static/image/ranking/silver-medal.svg";

export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
    avatar: {
      type: String,
      default: avatarIcon,
    },
    username: {
      type: String,
      required: true,
    },
    score: {
      type: [Number, String],
      default: 0,
    },
  },
  computed: {
    medalIcon() {
      const strategy = {
        0: goldMedalIcon,
        1: silverMedalIcon,
        2: bronzeMedalIcon,
      };

      return strategy[this.index];
    },
  },
  data() {
    return {
      defaultAvatar: avatarIcon,
    };
  },
};
</script>

<style lang="scss" scoped>
.c-ranking-item {
  display: flex;
  height: 152rpx;
  border-bottom: 1rpx solid #e5e5e5;
  justify-content: space-between;
  font-size: 28rpx;

  &_left , &_right {
      display: flex;
      align-items: center;
  }

  &_right {
      width: 200rpx;
  }

  &_medal-icon {
    width: 80rpx;
    height: 80rpx;
    margin-right: 30rpx;
  }

  &_rank {
    width: 80rpx;
    line-height: 80rpx;
    text-align: center;
    font-size: 30rpx;
    color: #3699fa;
    margin-right: 30rpx;
  }

  &_user-avatar {
    border-radius: 50%;
    width: 86rpx;
    height: 86rpx;
    margin-right: 20rpx;
  }

  &_user-name {
    font-size: 30rpx;
  }

  &_star-icon {
      width: 30rpx;
      height: 30rpx;
      margin: 0 12rpx;
    }

}
</style>