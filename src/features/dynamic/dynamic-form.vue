<template>
  <view class="c-dynamic-form">
    <!-- textarea -->
    <textarea
      class="c-dynamic-form_textarea"
      auto-focus
      :maxlength="-1"
      placeholder="请输入正文"
      v-model="content"
    />
    <!-- 图片选择与上传 -->
    <ImgFilePicker @imgPathsChange="($event) => (imgPaths = $event)" />
    <!-- 发布按钮 -->
    <view class="c-dynamic-form_release-btn" @click="publish">发布</view>
  </view>
</template>

<script>
import Vue from "vue";
import ImgFilePicker from "./img-file-picker.vue";
import dynamicApi from "./api/index.js";
import PubSub from "pubsub-js";

export default Vue.extend({
  components: {
    ImgFilePicker,
  },
  data() {
    return {
      content: "",
      imgPaths: [],
    };
  },
  methods: {
    async publish() {
      try {
        await dynamicApi.publish(this.content, this.imgPaths);
        PubSub.publish("onDynamicPublish");
        uni.navigateBack();
      } catch (e) {}
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./style/dynamic-form.scss";
</style>


