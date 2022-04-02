<template>
  <view class="c-img-file-picker">
    <ImgPreview
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
</template>

<script>
import Vue from "vue";
import ImgPreview from "@/ui/img-preview/img-preview.vue";
import dynamicApi from "./api/index.js";

export default Vue.extend({
  components: {
    ImgPreview,
  },
  data() {
    return {
      imgPaths: [], //[xxx.png]
    };
  },
  methods: {
    addImg() {
      uni.chooseImage({
        count: 5,
        sizeType: "compressed",
        success: async ({ tempFiles }) => {
          //利用tempFiles发送网络请求，返回得到图片地址数组['http://xxxx/static/img/xxx.png']

          await this.fetchImgPaths(tempFiles);
          this.emitImgPathsChange();
        },
      });
    },
    async fetchImgPaths(files) {
      try {
        for (let file of files) {
          this.imgPaths.push(await dynamicApi.uploadImg(file.path));
        }
      } catch (e) {
        throw e;
      }
    },
    removeImg(targetPath) {
      //要先发起请求，成功删除服务器上的图片后再同步数据
      //....
      //这里假设已经成功删除服务器上的图片
      this.imgPaths = this.imgPaths.filter((path) => path !== targetPath);
      this.emitImgPathsChange();
    },
    emitImgPathsChange() {
      this.$emit("imgPathsChange", this.imgPaths);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./style/img-file-picker";
</style>

