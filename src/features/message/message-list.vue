<template>
  <view class="c-message-list">
    <LongList
      :totalPage="totalPage"
      :curPage="curPage"
      :scrollTop.sync="scrollTop"
      @turnPages="fetchListTurnPages"
      @refresherrefresh="fetchListInit"
    >
      <section class="l-message-item" v-for="message in list" :key="message.id">
        <MessageItem :message="message" :type="type" />
      </section>
    </LongList>

    <!-- 一键已读按钮 -->
    <section class="l-full-read-badge-btn" v-if="type === 'unread'">
      <FullReadBadgeBtn :unreadNum="listLength" />
    </section>
  </view>
</template>

<script>
import Vue from "vue";
import MessageItem from "./message-item.vue";
import messageApi from "./api/index.js";
import FullReadBadgeBtn from "./full-read-badge-btn.vue";
import LongList from "@/ui/long-list/long-list.vue";
import { useFetchItems , useListenPublish } from '@/hooks/long-list/index.js';

export default Vue.extend({
  mixins:[useFetchItems , useListenPublish],
  components: {
    MessageItem,
    FullReadBadgeBtn,
    LongList,
  },
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  data(){
    return {
      listener:'onUnreadMsgReaded'
    }
  },
  computed:{
    listLength(){
      return this.list.length;
    }
  },
  methods: {
    async metaFetch(page){
      return await messageApi.getList(this.type , page);
    }
  },
});
</script>

<style lang="scss" scoped>
@import "./style/message-list.scss";
</style>
