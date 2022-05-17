<template>
  <view class="c-study-time">
    <view class="l-study-time_header">
      <span class="c-study-time_title">学习时长</span>
      <span class="c-study-time_study-time">{{ totalTime }}小时</span>
    </view>
    <canvas canvas-id="column" id="column" class="charts" @touchend="tap" />
  </view>
</template>

<script>
import uCharts from "@qiun/ucharts/u-charts";

var uChartsInstance = {};
export default {
  props: {
    type: {
      //week , month
      type: String,
      required: true,
    },
  },
  data() {
    return {
      cWidth: 750,
      cHeight: 500,
      totalTime: 0,
    };
  },
  created() {
    //这里的 750 对应 css .charts 的 width
    this.cWidth = uni.upx2px(750);
    //这里的 500 对应 css .charts 的 height
    this.cHeight = uni.upx2px(500);
    this.getServerData();
  },
  methods: {
    getServerData() {
      const strategy = {
        week: {
          totalTime: 65.5,
          chartData: {
            categories: [
              "周一",
              "周二",
              "周三",
              "周四",
              "周五",
              "周六",
              "周天",
            ],
            series: [
              {
                name: "目标值",
                data: [2, 2, 2, 2, 2, 4, 4],
              },
              {
                name: "完成量",
                data: [2, 2, 2, 1.5, 1, 2, 5],
              },
            ],
          },
        },
        month: {
          totalTime: 165,
          chartData: {
            categories: [
              "一",
              "二",
              "三",
              "四",
              "五",
              "六",
              "七",
              "八",
              "九",
              "十",
              "十一",
              "十二",
            ],
            series: [
              {
                name: "目标值",
                data: [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
              },
              {
                name: "完成量",
                data: [12, 14, 15, 9, 12, 11, 11, 10, 5, 20, 22, 20],
              },
            ],
          },
        },
      };

      this.totalTime = strategy[this.type].totalTime;
      this.drawCharts("column", strategy[this.type].chartData);
    },
    drawCharts(id, data) {
      const ctx = uni.createCanvasContext(id, this);
      uChartsInstance[id] = new uCharts({
        type: "column",
        context: ctx,
        width: this.cWidth,
        height: this.cHeight,
        categories: data.categories,
        series: data.series,
        animation: true,
        background: "#FFFFFF",
        padding: [15, 15, 0, 5],
        xAxis: {
          disableGrid: true,
        },
        yAxis: {
          gridType: "dash",

          data: [{ min: 0 }],
        },
        extra: {
          column: {
            type: "group",
            width: 10,
          },
        },
      });
    },
    tap(e) {
      uChartsInstance[e.target.id].touchLegend(e);
      uChartsInstance[e.target.id].showToolTip(e);
    },
  },
  watch:{
      type(){
          this.getServerData();
      }
  }
};
</script>

<style lang="scss" scoped>
.l-study-time {
  &_header {
    padding: 0 30rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 130rpx;
  }
}

.c-study-time {
  &_title {
    font-size: 24rpx;
    color: #999999;
  }

  &_study-time {
    font-size: 40rpx;
  }
}
.charts {
  width: 750rpx;
  height: 500rpx;
}
</style>