<template>
  <view class="p-dynamic">
    <view class="p-dynamic_body">
      <SegmentedcControl :panesVal="panesVal">
        <template v-slot:0>
          <DynamicAllList />
        </template>
      </SegmentedcControl>
    </view>

    <LinkView url="release-dynamic">
      <img class="p-dynamic_link-icon" src="@/static/img/add.svg" />
    </LinkView>
  </view>
</template>

<script>
import Vue from "vue";
import SegmentedcControl from "@/component/common/segmented-control/segmented-control.vue";
import DynamicAllList from "@/component/dynamic-list/dynamic-list.vue";
import LinkView from "@/component/common/link-list/link-view.vue";

export default Vue.extend({
  components: {
    SegmentedcControl,
    DynamicAllList,
    LinkView
  },
  data() {
    return {
      panesVal: ["全部"],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style/dynamic.scss";
</style>

