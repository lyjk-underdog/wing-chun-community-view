<template>
  <view class="c-link-view" @click="linkToTargetPage">
    <slot></slot>
  </view>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    url: String,
  },
  methods: {
    linkToTargetPage() {
      uni.navigateTo({
        url:'/pages/' + this.url,
      });
    },
  },
});
</script>