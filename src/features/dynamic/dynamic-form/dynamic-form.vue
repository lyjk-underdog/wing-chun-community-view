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
    <view class="c-img-file-picker">
      <ImgPreviewList
        :imgPaths="imgPaths"
        :hasClose="true"
        @removed="($event) => removeImg($event)"
      />
      <view class="c-img-file-picker_picker-btn" @click="addImg">
        <slot name="picker">
          <img
            class="c-img-file-picker_picker-icon"
            src="@/static/img/img-picker.svg"
          />
        </slot>
      </view>
    </view>
    <!-- 发布按钮 -->
    <view class="c-dynamic-form_release-btn" @click="publish">发布</view>
  </view>
</template>

<script>
import Vue from "vue";
import ImgPreviewList from "@/ui/img-preview/img-preview.vue";
import usePublish from './hooks/publish.js';
import useImgPick from './hooks/img-pick.js';

export default Vue.extend({
  components: {
    ImgPreviewList,
  },
  mixins: [usePublish , useImgPick],
});
</script>

<style lang="scss" scoped>
@import "./style/dynamic-form.scss";
</style>


