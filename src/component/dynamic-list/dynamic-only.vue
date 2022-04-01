<template>
  <DynamicListPresent :list="[dynamic]" />
</template>

<script>
import Vue from "vue";
import DynamicListPresent from "./present/dynamic-list.vue";
import avatarIcon from "@/static/img/avatar.svg";
import dynamicApi from "@/api/dynamic/index.js";
import { getCurrentPage } from "@/utils/index.js";

export default Vue.extend({
  components: {
    DynamicListPresent,
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
        this.dynamic = await dynamicApi.getdetail(route.query.dynamicID);
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