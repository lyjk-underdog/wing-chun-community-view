<template>
  <view class="p-dynamic-publish">
    <view class="p-dynamic-publish_body">
      <DynamicForm />
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import DynamicForm from "@/features/dynamic/dynamic-form.vue";

export default Vue.extend({
  components: {
    DynamicForm,
  },
});
</script>

<style lang="scss" scoped>
@import "./dynamic-publish.scss";
</style>


