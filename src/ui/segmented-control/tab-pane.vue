<template>
  <view class="c-tab-pane" :style="{width:width + 'rpx'}">
    <view
      class="c-tab-pane_value"
      :class="{ 'c-tab-pane_value--active': actived }"
      >{{ value }}</view
    >
    <view class="c-tab-pane_footer" v-show="actived"></view>
  </view>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    value: {
      type: String,
      required: true,
    },
    actived: {
      type: Boolean,
      required: true,
    },
    width: {
      type:[Number , String]
    }
  },
});
</script>

<style lang="scss" scoped>
@import "./style/tab-pane.scss";
</style>