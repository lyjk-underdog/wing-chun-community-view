<template>
  <view class="c-text-voice-submit">
    <img class="c-text-voice-submit_voice-icon" src="@/static/img/voice.svg" />
    <input class="c-text-voice-submit_input" type="text" v-model="text" />
    <view class="c-text-voice-submit_send-btn" @click="emitSubmitWithText"
      >发送</view
    >
  </view>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      text: "",
    };
  },
  methods: {
    emitSubmitWithText() {
      this.$emit("submit", this.text);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./style/text-voice-submit.scss";
</style>