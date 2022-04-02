<template>
  <view class="c-segmented-control">
    <view class="c-segmented-control_header">
      <Tabs :values="panesVal" v-model="curPaneIndex">
        <template v-slot:default="{ value, actived }">
          <slot name="tab-pane" :value="value" :actived="actived">
            <TabsPane :value="value" :actived="actived" />
          </slot>
        </template>
      </Tabs>
    </view>
    <view class="c-segmented-control_body">
      <swiper class="swiper" :current="curPaneIndex" @change="changePaneIndex">
        <!-- 因为小程序不支持动态插槽命名，所以我只能用多少写多少，不能使用v-for -->
        <swiper-item class="swiper-item" v-if="0 <= panesVal.length - 1">
          <slot name="0"></slot>
        </swiper-item>
        <swiper-item class="swiper-item" v-if="1 <= panesVal.length - 1">
          <slot name="1"></slot>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import Tabs from "./tabs.vue";
import TabsPane from "./tab-pane.vue";

export default Vue.extend({
  props: {
    //[String]
    panesVal: {
      type: Array,
      required: true,
      validator: function (values) {
        return values.length;
      },
    },
  },
  components: {
    Tabs,
    TabsPane,
  },
  data() {
    return {
      curPaneIndex: 0,
    };
  },
  methods: {
    changePaneIndex(e) {
      let newIndex = e.detail.current;
      this.curPaneIndex = newIndex;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./style/segmented-control.scss";
</style>
