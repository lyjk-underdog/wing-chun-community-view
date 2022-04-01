<template>
  <VideoList :list="list" />
</template>

<script>
import Vue from "vue";
import VideoList from "./present/video-list.vue";
import videoApi from "@/api/video/index.js";

export default Vue.extend({
  components: {
    VideoList,
  },
  props: {
    type: String,
    required: true,
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    async fetchList() {
      try {
        this.list = await videoApi.getlist(this.type);
      } catch (e) {
        throw e;
      }
    },
  },
  async created() {
    await this.fetchList();
  },
});
</script>
