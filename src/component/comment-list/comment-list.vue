<template>
  <LongList
    :totalPage="totalPage"
    :curPage="curPage"
    :scrollTop.sync="scrollTop"
    @turnPages="fetchListStateStrategy['turnPages']"
    @refresherrefresh="fetchListStateStrategy['init']"
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
import useLongListFetch from "@/mixin/long-list-fetch.js";

let subscribeNameStrategy = {
  video: {
    new: "onVideoReply",
    hot: null,
  },
  dynamic: {
    new: "onDynamicReply",
    hot: null,
  },
};

let metaFetchStrategy = {
  video: async function (page) {
    let route = getCurrentPage();
    return await videoApi.getcommentlist(
      route.query.videoID,
      this.type,
      page
    );
  },
  dynamic: async function (page) {
    let route = getCurrentPage();
    return await dynamicApi.getcommentlist(
      route.query.videoID,
      this.type,
      page
    );
  },
};

export default Vue.extend({
  mixins: [useLongListFetch],
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
  data() {
    return {
      subscribeName: subscribeNameStrategy[this.target][this.type],
    };
  },
  methods: {
    async metaFetch(page) {
      return await metaFetchStrategy[this.target].call(this,page);
    },
  },
});
</script>
