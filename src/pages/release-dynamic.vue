<template>
  <view class="p-release-dynamic">
    <view class="p-release-dynamic_body">
      <DynamicForm />
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import DynamicForm from "@/component/dynamic-form/dynamic-form.vue";

export default Vue.extend({
  components: {
    DynamicForm,
  },
});
</script>

<style lang="scss" scoped>
@import "./style/release-dynamic.scss";
</style>


