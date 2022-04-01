<template>
  <view class="c-dynamic-list">
    <LongList
      :totalPage="totalPage"
      :curPage="curPage"
      :scrollTop.sync="scrollTop"
      @turnPages="fetchListTurnPages"
      @refresherrefresh="fetchListInit"
    >
      <section
        class="l-dynamic-item"
        v-for="(item, index) in list"
        :key="index"
      >
        <DynamicItem :item="item" />
      </section>
    </LongList>
  </view>
</template>

<script>
import Vue from "vue";
import DynamicItem from "./dynamic-item.vue";
import LongList from "@/ui/long-list/long-list.vue";
import useFetchAllList from "./hooks/fetch-all-list.js";

export default Vue.extend({
  components: {
    DynamicItem,
    LongList
  },
  mixins:[useFetchAllList]
});
</script>

<style lang="scss" scoped>
@import "./style/dynamic-list.scss";
</style>

