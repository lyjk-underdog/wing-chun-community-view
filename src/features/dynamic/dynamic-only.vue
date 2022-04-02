<template>
    <DynamicItem :item="dynamic" />
</template>

<script>
import Vue from "vue";
import DynamicItem from './dynamic-item.vue';
import dynamicApi from "./api/index.js";
import { getCurrentPage } from "@/utils/index.js";

export default Vue.extend({
  components: {
    DynamicItem,
  },
  data() {
    return {
      dynamic: {},
    };
  },
  methods: {
    async fetchDynamicState() {
      try {
        let route = getCurrentPage();
        this.dynamic = await dynamicApi.getDetail(route.query.dynamicID);
      } catch (e) {
        throw e;
      }
    },
  },
  async mounted() {
    await this.fetchDynamicState();
  },
});
</script>