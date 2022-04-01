import dynamicFormApi from "../api/index.js";
import PubSub from "pubsub-js";

export default {
  data() {
    return {
      content: "",
    };
  },
  methods: {
    async publish() {
      try {
        await dynamicFormApi.publish(this.content, this.imgPaths);
        PubSub.publish("onDynamicPublish");
        uni.navigateBack();
      } catch (e) {}
    },
  },
}




