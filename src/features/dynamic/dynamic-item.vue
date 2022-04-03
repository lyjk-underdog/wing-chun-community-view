<template>
  <view class="c-dynamic-item">
    <view class="c-dynamic-item_header">
      <img class="c-dynamic-item_avatar" :src="dynamic.user.avatar" />
      <view>
        <view class="c-dynamic-item_user-name">{{ dynamic.user.name }}</view>
        <view class="c-dynamic-item_release-time">{{
          dynamic.releaseTime
        }}</view>
      </view>
    </view>
    <view class="c-dynamic-item_body">
      <view class="c-dynamic-item_content">{{ dynamic.content }}</view>
      <ImgPreview :imgPaths="dynamic.imagePath" />
    </view>
    <view class="c-dynamic-item_footer">
      <LinkView
        :url="
          $route.url !== 'pages/dynamic-comment/dynamic-comment'
            ? `dynamic-comment/dynamic-comment?dynamicID=${dynamic.dynamicID}`
            : ''
        "
      >
        <view class="c-dynamic-item_comment">
          <img class="c-dynamic-item_comment-icon" src="./image/comment.svg" />
          <span class="c-dynamic-item_comments-num">{{
            dynamic.commentsNum
          }}</span>
        </view>
      </LinkView>

      <view class="c-dynamic-item_like" @click="emitOnLiked">
        <img
          class="c-dynamic-item_like-icon"
          :src="dynamic.likeType === 1 ? likeIconActive : likeIcon"
        />
        <span class="c-dynamic-item_like-num">{{ dynamic.likeNum }}</span>
      </view>
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import LinkView from "@/ui/link-view.vue";
import ImgPreview from "@/ui/img-preview/img-preview.vue";
import likeIcon from "./image/like.svg";
import likeIconActive from "./image/like--active.svg";
import { getCurrentPage } from "@/utils/index.js";

export default Vue.extend({
  components: {
    LinkView,
    ImgPreview,
  },
  props: {
    dynamic: {
      type: Object,
      requied: true,
    },
  },
  data() {
    return {
      likeIcon,
      likeIconActive,
    };
  },
  computed:{
    $route(){
      return getCurrentPage();
    }
  },
  methods: {
    emitOnLiked() {
      this.dynamic.likeType === 0 &&
        this.$emit("liked", this.dynamic.dynamicID);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./style/dynamic-item.scss";
</style>
