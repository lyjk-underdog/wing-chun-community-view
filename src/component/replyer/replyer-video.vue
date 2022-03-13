<template>
  <TextVoiceSubmit @submit="repaly" />
</template>

<script>
import Vue from "vue";
import TextVoiceSubmit from "./text-voice-submit.vue";

export default Vue.extend({
  components: {
    TextVoiceSubmit,
  },
  methods: {
    repaly(msg) {
      console.log(msg);
    },
  },
});
</script>
