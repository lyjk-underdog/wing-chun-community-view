<template>
  <view class="p-ranking">
    <img class="p-ranking_header" src="@/static/image/ranking/header.svg" />
    <view class="p-ranking_body">
      <SegmentedControl :panesVal="panesVal">
        <template v-slot:0>
          <RankingList type="week" />
        </template>
        <template v-slot:1>
          <RankingList type="month" />
        </template>
      </SegmentedControl>
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import SegmentedControl from "@/ui/segmented-control/segmented-control.vue";
import RankingList from "./components/ranking-list.vue";

export default Vue.extend({
  components: {
    SegmentedControl,
    RankingList,
  },
  data() {
    return {
      panesVal: ["周排行", "月排行"],
    };
  },
});
</script>

<style lang="scss" scoped>
.p-ranking {
  display: flex;
  flex-direction: column;
  height: 100vh;

  &_header {
    width: 100%;
    height: 342rpx;
  }

  &_body {
      flex: 1 1 auto;
  }
}
</style>


