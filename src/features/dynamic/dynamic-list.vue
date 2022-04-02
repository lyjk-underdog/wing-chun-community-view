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
import dynamicApi from './api/index.js';
import { useFetchItems , useListenPublish } from "@/hooks/long-list/index.js";

export default Vue.extend({
  mixins: [useFetchItems , useListenPublish],
  components: {
    DynamicItem,
    LongList,
  },
  data() {
    return {
      listener: "onDynamicPublish",
    };
  },
  methods: {
    metaFetch: dynamicApi.getList,
  },
});
</script>

<style lang="scss" scoped>
@import "./style/dynamic-list.scss";
</style>

