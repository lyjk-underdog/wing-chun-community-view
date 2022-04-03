<template>
  <view class="p-dynamic">
    <view class="p-dynamic_body">
      <SegmentedcControl :panesVal="panesVal">
        <template v-slot:0>
          <DynamicAllList />
        </template>
      </SegmentedcControl>
    </view>

    <section class="l-dynamic-add-btn">
      <DynamicAddBtn />
    </section>
  </view>
</template>

<script>
import Vue from "vue";
import SegmentedcControl from "@/ui/segmented-control/segmented-control.vue";
import DynamicAllList from "@/features/dynamic/dynamic-list.vue";
import DynamicAddBtn from "@/features/dynamic/dynamic-add-btn.vue";

export default Vue.extend({
  components: {
    SegmentedcControl,
    DynamicAllList,
    DynamicAddBtn
  },
  data() {
    return {
      panesVal: ["全部"],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./dynamic.scss";
</style>

