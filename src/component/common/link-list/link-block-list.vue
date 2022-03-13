<template>
  <view class="c-link-block-list">
    <Card :title="title">
      <view class="c-link-block-list_body">
        <section
          class="l-link-block"
          v-for="(item, index) in list"
          :key="index"
        >
          <view class="c-link-block" @click="() => linkToTargetPage(item.url)">
            <img class="c-link-block_icon" :src="item.iconSrc" />
            <view class="c-link-block_title">{{ item.title }}</view>
          </view>
        </section>
      </view>
    </Card>
  </view>
</template>

<script>
import Vue from "vue";
import useLink from "@/mixin/use-link.js";
import Card from "@/component/common/card/card.vue";

export default Vue.extend({
  mixins: [useLink],
  components: {
    Card,
  },
  props: {
    //[{iconSrc:String,title:String,url:String}]
    list: {
      type: Array,
      default: () => [],
    },
    title:String
  },
});
</script>

<style lang="scss" scoped>
@import "./style/link-block-list.scss";
</style>
