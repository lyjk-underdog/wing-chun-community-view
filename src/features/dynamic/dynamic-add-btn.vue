<template>
  <LinkView url="dynamic-publish/dynamic-publish">
    <img class="c-dynamic-add-btn" src="./image/add-btn.svg" />
  </LinkView>
</template>

<script>
import Vue from "vue";
import LinkView from "@/ui/link-view.vue";

export default Vue.extend({
  components: {
    LinkView,
  },
});
</script>

<style lang="scss" scoped>
.c-dynamic-add-btn {
  width: 106rpx;
  height: 106rpx;
}
</style>