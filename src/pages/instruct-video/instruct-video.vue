<template>
  <view class="p-instruct-video">
    <SegmentedcControl :panesVal="panesVal">
      <template v-for="(category , index) in categoryList" :slot="index">
        <VideoList :key="index" type="combat" :categoryId="category.id" />
      </template>
    </SegmentedcControl>
  </view>
</template>

<script>
import Vue from "vue";
import SegmentedcControl from "@/ui/segmented-control/segmented-control.vue";
import VideoList from "@/features/video/video-list.vue";

import videoApi from "@/features/video/api/index.js";

export default Vue.extend({
  components: {
    SegmentedcControl,
    VideoList,
  },
  data() {
    return {
      categoryList: [],
    };
  },
  computed:{
    panesVal(){
      return this.categoryList.map(category => category.name);
    }
  },
  methods: {
    async getCategory() {
      try {
        this.categoryList = await videoApi.getCategory();
      } catch (e) {
        console.error(e);
      }
    },
  },
  created() {
    this.getCategory();
  },
});
</script>

<style lang="scss" scoped>
@import "./instruct-video.scss";
</style>
