<template>
  <view class="c-message-list">
    <section class="l-message-item" v-for="message in list" :key="message.id">
      <MessageItem :message="message" />
    </section>
  </view>
</template>

<script>
import Vue from "vue";
import MessageItem from "./message-item.vue";

export default Vue.extend({
  components: {
    MessageItem,
  },
  props:{
      list:{
          type:Array,
          default:() => []
      }
  },
});
</script>
