<template>
  <view class="c-link-strip-list">
    <Card>
      <view class="c-link-strip-list_body">
        <section class="l-link-strip" v-for="(item , index) in list" :key="index">
          <view class="c-link-strip" @click="() => linkToTargetPage(item.url)">
            <img class="c-link-strip_icon" :src="item.iconSrc" />
            <span class="c-link-strip_title">{{ item.title }}</span>
          </view>
        </section>
      </view>
    </Card>
  </view>
</template>

<script>
import Vue from "vue";
import Card from "@/component/common/card/card.vue";
import useLink from "@/mixin/use-link.js";

export default Vue.extend({
  mixins: [useLink],
  components: {
    Card,
  },
  props: {
    //[{iconSrc:String,url:String,title:String}]
    list: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./style/link-strip-list.scss";
</style>
