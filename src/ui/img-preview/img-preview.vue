<template>
  <view class="c-img-preview-list">
    <section class="l-img-preview-item" v-for="path in imgPaths" :key="path">
      <view class="c-img-preview-item">
        <img
          class="c-img-preview-item_target-img"
          :src="path"
          @click="() => preview(path)"
        />
        <img
          v-if="hasClose"
          class="c-img-preview-item_close-icon"
          src="@/static/img/close.svg"
          @click="$emit('removed', path)"
        />
      </view>
    </section>
  </view>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    imgPaths: {
      type: Array, //[xxxx.png , xxx.png]
      default: () => [],
    },
    hasClose: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    preview(path) {
      uni.previewImage({
        current: path,
        urls: this.imgPaths,
      });
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./img-preview.scss";
</style>
