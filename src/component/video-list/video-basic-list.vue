<template>
  <VideoList :list="list" />
</template>

<script>
import Vue from "vue";
import VideoList from "./video-list.vue";
import videoApi from "@/api/video/index.js";

export default Vue.extend({
  components: {
    VideoList,
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    async fetchListState() {
      try {
        this.list = await videoApi.getlist("basic");
      } catch (e) {}
    },
  },
  async created() {
      await this.fetchListState();
  },
});
</script>
