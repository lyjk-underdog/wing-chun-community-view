<template>
  <LongList
    :totalPage="totalPage"
    :curPage="curPage"
    :scrollTop.sync="scrollTop"
    @turnPages="fetchListStateStrategy['turnPages']"
    @refresherrefresh="fetchListStateStrategy['init']"
  >
    <DynamicListPresent :list="list" />
  </LongList>
</template>

<script>
import Vue from "vue";
import DynamicListPresent from "./present/dynamic-list.vue";
import LongList from "@/component/common/long-list/long-list.vue";
import dynamicApi from "@/api/dynamic/index.js";
import useLongListFetch from "@/mixin/long-list-fetch.js";

export default Vue.extend({
  mixins: [useLongListFetch],
  components: {
    DynamicListPresent,
    LongList,
  },
  data() {
    return {
      subscribeName: "onDynamicPublish",
    };
  },
  methods: {
    metaFetch: dynamicApi.getlist,
  },
});
</script>

