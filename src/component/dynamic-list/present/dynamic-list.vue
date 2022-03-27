<template>
  <view class="c-dynamic-list">
    <section class="l-dynamic-item" v-for="(item, index) in list" :key="index">
      <DynamicItem :item="item" />
    </section>
  </view>
</template>

<script>
import Vue from "vue";
import DynamicItem from "./dynamic-item.vue";

export default Vue.extend({
  components: {
    DynamicItem,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./style/dynamic-list.scss";
</style>

