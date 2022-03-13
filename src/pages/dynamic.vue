<template>
  <view class="p-dynamic">
    <view class="p-dynamic_body">
      <SegmentedcControl :panesVal="panesVal">
        <template v-slot:0>
          <DynamicAllList />
        </template>
        <template v-slot:1>
          <DynamicAttentionList />
        </template>
      </SegmentedcControl>
    </view>

    <img
      class="p-dynamic_link-icon"
      src="@/static/img/add.svg"
      @click="() => linkToTargetPage('release-dynamic')"
    />
  </view>
</template>

<script>
import Vue from "vue";
import useLink from "@/mixin/use-link.js";
import SegmentedcControl from "@/component/common/segmented-control/segmented-control.vue";
import DynamicAllList from "@/component/dynamic-list/dynamic-all-list.vue";
import DynamicAttentionList from "@/component/dynamic-list/dynamic-attention-list.vue";

export default Vue.extend({
  mixins: [useLink],
  components: {
    SegmentedcControl,
    DynamicAllList,
    DynamicAttentionList,
  },
  data() {
    return {
      panesVal: ["全部", "关注"],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style/dynamic.scss";
</style>

