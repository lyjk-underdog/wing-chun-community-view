<template>
  <TextVoiceSubmit @submit="$event => repaly($event)" />
</template>

<script>
import Vue from "vue";
import TextVoiceSubmit from "@/ui/text-voice-submit/text-voice-submit.vue";
import videoApi from "./api/index.js";
import { getCurrentPage } from "@/utils/index.js";
import PubSub from "pubsub-js";

export default Vue.extend({
  components: {
    TextVoiceSubmit,
  },
  methods: {
    async repaly(msg) {
      try{
        let route = getCurrentPage();
        await videoApi.publishComment(route.query.videoID , msg);
        PubSub.publish("onVideoReply");
      }catch(e){}
    },
  },
});
</script>