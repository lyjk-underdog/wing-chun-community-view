<template>
  <view class="p-learn-record">
    <view class="p-learn-record_header">
      <Tabs :values="panesVal" v-model="curPaneIndex">
        <template v-slot:default="{ value, actived }">
          <TabsPane :width="200" :value="value" :actived="actived" />
        </template>
      </Tabs>
    </view>
    <section class="l-study-time">
        <StudyTime :type="studyTimeType" />
    </section>
    <StudyInfo />
  </view>
</template>

<script>
import StudyTime from "./components/study-time.vue";
import Tabs from "@/ui/segmented-control/tabs.vue";
import TabsPane from "@/ui/segmented-control/tab-pane.vue";
import StudyInfo from './components/study-info.vue';

export default {
  components: {
    StudyTime,
    Tabs,
    TabsPane,
    StudyInfo
  },
  data() {
    return {
      panesVal: ["周", "月"],
      curPaneIndex: 0,
    };
  },
  computed: {
    studyTimeType() {
      const strategy = {
        周: "week",
        月: "month",
      };

      return strategy[this.panesVal[this.curPaneIndex]];
    },
  },
};
</script>

<style lang="scss" scoped>
.p-learn-record {

  &_header {
    padding: 30rpx;
  }

  .l-study-time {
      border-bottom: 20rpx solid #F6F6F8;
  }
}
</style>
