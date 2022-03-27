<template>
  <view :class="['s-list-item--' + type]">
    <section class="l-list-item">
      <view class="c-list-item">
        <img class="c-list-item_icon" :src="item.iconSrc" />
        <view class="c-list-item_title">{{ item.title }}</view>
      </view>
    </section>
  </view>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    //{iconSrc:String , title:String}
    item: {
      type: Object,
      default: () => {},
    },
    type: {
      type: String,
      default: "block",
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./style/list-item.scss";
</style>