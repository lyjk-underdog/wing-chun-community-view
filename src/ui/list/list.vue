<template>
  <view :class="['s-list--' + type]">
    <view v-if="title" class="c-list_title">{{ title }}</view>
    <view class="c-list">
      <view class="c-list_body">
        <slot></slot>
      </view>
    </view>
  </view>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    title: String,
    type: {
      type: String,
      default: "block",
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./style/list.scss";
</style>
