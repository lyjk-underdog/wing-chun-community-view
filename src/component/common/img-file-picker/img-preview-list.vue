<template>
  <view class="c-img-preview-list">
    <section class="l-img-preview-item" v-for="img in list" :key="img.id">
      <view class="c-img-preview-item">
        <img
          class="c-img-preview-item_target-img"
          :src="img.path"
          @click="() => preview(img.path)"
        />
        <img
          class="c-img-preview-item_close-icon"
          src="@/static/img/close.svg"
          @click="$emit('removed', img)"
        />
      </view>
    </section>
  </view>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    list: {
      type: Array, //[{id:String,path:String}]
      default: () => [],
    },
  },
  computed: {
    imgPaths() {
      return this.list.map((img) => img.path);
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
@import "./style/img-preview-list.scss";
</style>
