<template>
  <LongList
    :totalPage="totalPage"
    :curPage="curPage"
    :scrollTop.sync="scrollTop"
    @turnPages="fetchListTurnPages"
    @refresherrefresh="fetchListInit"
  >
    <DynamicListPresent :list="list" />
  </LongList>
</template>

<script>
import Vue from "vue";
import DynamicListPresent from "./present/dynamic-list.vue";
import LongList from "@/component/common/long-list/long-list.vue";
import dynamicApi from "@/api/dynamic/index.js";
import { useFetchItems , useListenPublish } from "@/component/common/long-list/hooks/index.js";

export default Vue.extend({
  mixins: [useFetchItems , useListenPublish],
  components: {
    DynamicListPresent,
    LongList,
  },
  data() {
    return {
      listener: "onDynamicPublish",
    };
  },
  methods: {
    metaFetch: dynamicApi.getlist,
  },
});
</script>

