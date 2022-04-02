<template>
  <view class="c-tabs">
    <section
      class="l-tabs-pane"
      v-for="(pane, index) in panes"
      :key="index"
      @click="() => emitCurPaneIndexChange(pane)"
    >
      <slot :value="pane.value" :actived="pane.actived"></slot>
    </section>
  </view>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  //小程序不支持自定义v-model
  // model: {
  //   prop: "curPaneIndex",
  //   event: "curPaneIndexChange",
  // },
  props: {
    values: {
      type: Array,
      default: () => [],
    },
    //curPaneIndex
    value: {
      type: Number,
      required: true,
    },
  },
  computed: {
    panes() {
      return this.values.map((value,index) => ({
        index,
        value,
        actived: index === this.value, //this.curPaneIndex
      }));
    },
  },
  methods: {
    emitCurPaneIndexChange(curPane) {
      // this.$emit("curPaneIndexChange", curPane.index);
      this.$emit("input", curPane.index);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./style/tabs.scss";
</style>
