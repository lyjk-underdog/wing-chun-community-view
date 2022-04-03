<template>
  <view class="c-dynamic-list">
    <LongList
      :totalPage="totalPage"
      :curPage="curPage"
      :scrollTop.sync="scrollTop"
      @turnPages="updateLongListOnTurnPages"
      @refresherrefresh="updateLongListOnInit"
    >
      <section
        class="l-dynamic-item"
        v-for="dynamic in list"
        :key="dynamic.dynamicID"
      >
        <DynamicItem
          :dynamic="dynamic"
          @liked="
            (targetDynamicID) =>
              updateTargetLikeInfoOnlike(targetDynamicID, 'dynamicID')
          "
        />
      </section>
    </LongList>
  </view>
</template>

<script>
import Vue from "vue";
import DynamicItem from "./dynamic-item.vue";
import LongList from "@/ui/long-list/long-list.vue";
import dynamicApi from "./api/index.js";
import {
  useUpdateLongList,
  useListenToUpdate,
} from "@/hooks/long-list/index.js";
import { useLike } from "@/hooks/like.js";

export default Vue.extend({
  mixins: [useUpdateLongList, useListenToUpdate, useLike],
  components: {
    DynamicItem,
    LongList,
  },
  data() {
    return {
      listener: "onDynamicPublish",
    };
  },
  methods: {
    getLongListInOnePage: dynamicApi.getList,
    like: dynamicApi.like,
  },
});
</script>

<style lang="scss" scoped>
@import "./style/dynamic-list.scss";
</style>

