<template>
  <view :class="['s-list--' + type]">
    <view class="c-list">
      <Card :title="title">
        <view class="c-list_body">
          <slot></slot>
        </view>
      </Card>
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import Card from "@/component/common/card/card.vue";

export default Vue.extend({
  components: {
    Card,
  },
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
