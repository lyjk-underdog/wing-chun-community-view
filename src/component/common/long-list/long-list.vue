<template>
  <view class="c-long-list">
    <scroll-view
      class="c-long-list_scroll-view"
      :scroll-y="true"
      :refresher-enabled="true"
      :scroll-top="scrollTop"
      :refresher-triggered="refreshStatus"
      @scroll="scroll"
      @scrolltolower="emitStrategy['turnPages']"
      @refresherrefresh="emitStrategy['refresherrefresh']"
    >
      <slot></slot>
      <view class="c-prompt-box">
        <span class="c-prompt-box_title" v-if="curPage < totalPage"
          >加载中...</span
        >
        <span class="c-prompt-box_title" v-if="curPage >= totalPage"
          >没有更多信息</span
        >
      </view>
    </scroll-view>
  </view>
</template>

<script>
import Vue from "vue";
import { debounce } from "@/utils";

export default Vue.extend({
  props: {
    totalPage: {
      type: Number,
      required: true,
    },
    curPage: {
      type: Number,
      required: true,
    },
    scrollTop: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      refreshStatus: false,
    };
  },
  computed: {
    emitStrategy() {
      return {
        turnPages: () => {
          if (this.curPage < this.totalPage) this.$emit("turnPages");
        },
        refresherrefresh: () => {
          let _refreshAnimate = (time) => {
            this.refreshStatus = true;
            setTimeout(() => (this.refreshStatus = false), time);
          };

          _refreshAnimate(1000);
          this.$emit("refresherrefresh");
        },
        //实现scrollTop的双向绑定
        "update:scrollTop": (curScrollTop) => {
          this.$emit("update:scrollTop", curScrollTop);
        },
      };
    },
  },
  methods: {
    scroll: debounce(function (e) {
      this.emitStrategy["update:scrollTop"](e.detail.scrollTop);
    }, 500),
  },
});
</script>

<style lang="scss" scoped>
@import "./style/long-list.scss";
</style>