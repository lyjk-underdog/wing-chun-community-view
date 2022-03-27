<template>
  <view class="c-link-list">
    <List :type="type" :title="title">
      <LinkView v-for="(item, index) in list" :key="index" :url="item.url">
        <ListItem :type="type" :item="item" />
      </LinkView>
    </List>
  </view>
</template>

<script>
import Vue from "vue";
import List from "./list.vue";
import ListItem from "./list-item.vue";
import LinkView from "./link-view.vue";

export default Vue.extend({
  components: {
    List,
    ListItem,
    LinkView,
  },
  props: {
    //[{iconSrc:String , title:String , url:String}]
    list: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: "block",
    },
    title: String,
  },
  methods: {
    linkToTargetPage(url) {
      uni.navigateTo({ url });
    },
  },
});
</script>
