<template>
  <DynamicList :list="[dynamic]" />
</template>

<script>
import Vue from "vue";
import DynamicList from './dynamic-list.vue';
import avatarIcon from "@/static/img/avatar.svg";

export default Vue.extend({
  components: {
    DynamicList,
  },
  data() {
    return {
      dynamic: {
        id: "0",
        user: {
          avatar: avatarIcon,
          name: "李步东老师",
        },
        releaseTime: "2020 06-07 15:34",
        content: "祝大家新年快乐，在牛年里顺顺利利，事业有成飞腾直上！！",
        commentsNum: "100",
        likeNum: "100",
      },
    };
  },
});
</script>