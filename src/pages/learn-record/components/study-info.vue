<template>
  <view class="c-study-info">
    <view class="l-study-info_body">
      <view class="c-study-info_title">当前学习记录</view>
      <view class="c-record-list">
        <view class="c-record-item">
          <view class="c-record-item_title"><i style=" background: green;"></i>文章</view>
          <view class="c-record-item_content">{{ articleNums }}篇</view>
        </view>
        <view class="c-record-item">
          <view class="c-record-item_title"><i style=" background: purple;"></i>关卡</view>
          <view class="c-record-item_content">{{ levelNums }}关</view>
        </view>
        <view class="c-record-item">
          <view class="c-record-item_title"><i style=" background: red;"></i>视频</view>
          <view class="c-record-item_content">{{ videoNums }}个</view>
        </view>
      </view>
    </view>
    <view class="l-study-info_footer">
      <view class="l-study-info_footer-item">
        <span>累计时长</span>
        <span>{{ totalTime }}小时</span>
      </view>
      <view class="l-study-info_footer-item">
        <span>已连续学习</span>
        <span>{{ continuousDays }}天</span>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      levelNums: 2,
      videoNums: 10,
      articleNums: 20,
      totalTime: 55,
      continuousDays: 3,
    };
  },
};
</script>

<style lang='scss' scoped>
.l-study-info {
  &_body {
    padding: 0 50rpx 50rpx;
    border-bottom: 20rpx solid #f6f6f8;
  }

  &_footer {
    border-bottom: 20rpx solid #f6f6f8;
  }

  &_footer-item {
    display: flex;
    justify-content: space-between;
    margin: 0 40rpx;
    padding: 30rpx 0;
    border-bottom: 2px solid #f6f6f8;

    &:last-child {
      border-bottom: none;
    }
  }
}

.c-study-info {
  &_title {
    line-height: 130rpx;
  }

  .c-record-list {
    display: flex;
    justify-content: space-around;

    i {
      display: inline-block;
      width: 15rpx;
      height: 15rpx;
      border-radius: 50%;
      vertical-align: middle;
      margin-right: 10rpx;

    }
  }

  .c-record-item {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &_title {
      color: #999;
      margin-bottom: 50rpx;
    }

    &_content {
      font-size: 40rpx;
    }
  }
}
</style>