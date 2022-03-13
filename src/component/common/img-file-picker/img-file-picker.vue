<template>
  <view class="c-img-file-picker">
    <ImgPreviewList :list="list" @removed="($event) => removeImg($event)" />
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
import ImgPreviewList from "./img-preview-list.vue";

let uid = 0;

export default Vue.extend({
  components: {
    ImgPreviewList,
  },
  data() {
    return {
      list: [], //[{id:Srring,path:String}]
    };
  },
  methods: {
    addImg() {
      uni.chooseImage({
        count: 5,
        sizeType: "compressed",
        success: ({ tempFilePaths, tempFiles }) => {
          //利用tempFiles发送网络请求，返回得到图片地址数组['http://xxxx/static/img/xxx.png']
          //.....
          //这里假设tempFilePaths是返回的图片地址数据
          tempFilePaths.forEach((imgPath) => {
            this.list.push({
              id: uid++,
              path: imgPath,
            });
          });
          this.emitImgPathsChange();
        },
      });
    },
    removeImg(target) {
      //要先发起请求，成功删除服务器上的图片后再同步数据
      //....
      //这里假设已经成功删除服务器上的图片
      this.list = this.list.filter((img) => img.id !== target.id);
      this.emitImgPathsChange();
    },
    emitImgPathsChange() {
      this.$emit(
        "imgPathsChange",
        this.list.map((img) => img.path)
      );
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./style/img-file-picker";
</style>

