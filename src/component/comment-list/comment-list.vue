<template>
  <LongList
    :totalPage="totalPage"
    :curPage="curPage"
    :scrollTop.sync="scrollTop"
    @turnPages="fetchListTurnPages"
    @refresherrefresh="fetchListInit"
  >
    <CommentListPresent :list="list" />
  </LongList>
</template>

<script>
import Vue from "vue";
import CommentListPresent from "./present/comment-list.vue";
import { getCurrentPage } from "@/utils/index.js";
import videoApi from "@/api/video/index.js";
import dynamicApi from "@/api/dynamic/index.js";
import LongList from "@/component/common/long-list/long-list.vue";
import {
  useFetchItems,
  useListenPublish,
} from "@/component/common/long-list/hooks/index.js";

export default Vue.extend({
  mixins: [useFetchItems, useListenPublish],
  components: {
    CommentListPresent,
    LongList,
  },
  props: {
    target: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    listener() {
      let listenerStrategy = {
        video: {
          new: "onVideoReply",
          hot: null,
        },
        dynamic: {
          new: "onDynamicReply",
          hot: null,
        },
      };
      return listenerStrategy[this.target][this.type];
    },
  },
  methods: {
    async metaFetch(page) {

      let metaFetchStrategy = {
        video: async (page) => {
          let route = getCurrentPage();
          return await videoApi.getcommentlist(route.query.videoID , this.type , page);
        },
        dynamic: async (page) => {
          let route = getCurrentPage();
          return await dynamicApi.getcommentlist(route.query.dynamicID , this.type , page);
        },
      };

      return await metaFetchStrategy[this.target](page);
    },
  },
});
</script>
