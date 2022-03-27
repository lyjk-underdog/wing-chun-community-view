<template>
  <TextVoiceSubmit @submit="$event => repaly($event)" />
</template>

<script>
import Vue from "vue";
import TextVoiceSubmit from "./text-voice-submit.vue";
import dynamicApi from "@/api/dynamic/index.js";
import { getCurrentPage } from "@/utils/index.js";
import PubSub from "pubsub-js";

export default Vue.extend({
  components: {
    TextVoiceSubmit,
  },
  methods: {
    async repaly(msg) {
      try{
        // let route = getCurrentPage();
        // await dynamicApi.publishcomment(route.query.dynamicID , msg);
        console.log(msg);
        PubSub.publish("onDynamicReply");
      }catch(e){}
    },
  },
});
</script>