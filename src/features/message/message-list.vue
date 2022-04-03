<template>
  <view class="c-message-list">
    <LongList
      :totalPage="totalPage"
      :curPage="curPage"
      @turnPages="updateLongListOnTurnPages"
      @refresherrefresh="updateLongListOnInit"
    >
      <section
        class="l-message-item"
        v-for="message in list"
        :key="message.commentID"
      >
        <MessageItem
          :message="message"
          @read="(commentID) => updateMsgTypeOnRead(commentID)"
        />
      </section>
    </LongList>

    <!-- 一键已读按钮 -->
    <section class="l-full-read-badge-btn">
      <FullReadBadgeBtn
        :unreadNum="unreadLength"
        @readAll="updateAllMsgTypeOnReadAll"
      />
    </section>
  </view>
</template>

<script>
import Vue from "vue";
import MessageItem from "./message-item.vue";
import messageApi from "./api/index.js";
import FullReadBadgeBtn from "./full-read-badge-btn.vue";
import LongList from "@/ui/long-list/long-list.vue";
import { useUpdateLongList } from "@/hooks/long-list/index.js";

export default Vue.extend({
  mixins: [useUpdateLongList],
  components: {
    MessageItem,
    FullReadBadgeBtn,
    LongList,
  },
  computed: {
    unreadLength() {
      let unreadList = this.list.filter((msg) => msg.msgType === 0);
      return unreadList.length;
    },
  },
  methods: {
    getLongListInOnePage: messageApi.getList,
    async updateMsgTypeOnRead(targetCommentID) {
      try {
        await messageApi.readMsg("one", targetCommentID);
        let targetMsg = this.list.find(
          (msg) => msg.commentID === targetCommentID
        );
        targetMsg.msgType = 1;
      } catch (e) {
        throw e;
      }
    },
    async updateAllMsgTypeOnReadAll() {
      try {
        if (this.unreadLength !== 0) {
          await messageApi.readMsg("all");
          this.list.forEach((msg) => (msg.msgType = 1));
        }
      } catch (e) {
        throw e;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./style/message-list.scss";
</style>
