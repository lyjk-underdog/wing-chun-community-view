<template>
  <TextVoiceSubmit @submit="($event) => repaly($event)" />
</template>

<script>
import Vue from "vue";
import TextVoiceSubmit from "./present/text-voice-submit.vue";
import videoApi from "@/api/video/index.js";
import dynamicApi from "@/api/dynamic/index.js";
import { getCurrentPage } from "@/utils/index.js";
import PubSub from "pubsub-js";

export default Vue.extend({
  components: {
    TextVoiceSubmit,
  },
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  methods: {
    async repaly(msg) {
      let repalyStrategy = {
        video: {
          metaFetch: async (msg) => {
            let rote = getCurrentPage();
            return await videoApi.publishcomment(rote.query.videoID, msg);
          },
          publisher: "onVideoReply",
        },
        dynamic: {
          metaFetch: async (msg) => {
            let route = getCurrentPage();
            await dynamicApi.publishcomment(route.query.dynamicID, msg);
          },
          publisher: "onDynamicReply",
        },
      };

      try {
        await repalyStrategy[this.type].metaFetch(msg);
        PubSub.publish(repalyStrategy[this.type].publisher);
      } catch (e) {
        throw e;
      }
    },
  },
});
</script>
