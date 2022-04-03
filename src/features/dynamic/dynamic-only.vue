<template>
  <DynamicItem
    :dynamic="dynamic"
    @liked="(targetCommentID) => updateLikeInfoOnlike(targetCommentID)"
  />
</template>

<script>
import Vue from "vue";
import DynamicItem from "./dynamic-item.vue";
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
    async updateDynamicOnInit() {
      try {
        let route = getCurrentPage();
        this.dynamic = await dynamicApi.getDetail(route.query.dynamicID);
      } catch (e) {
        throw e;
      }
    },
    async updateLikeInfoOnlike(targetCommentID) {
      try {
        await dynamicApi.like(targetCommentID);
        this.dynamic.likeNum += 1;
        this.dynamic.likeType = 1;
      } catch (e) {
        throw e;
      }
    },
  },
  async mounted() {
    await this.updateDynamicOnInit();
  },
});
</script>