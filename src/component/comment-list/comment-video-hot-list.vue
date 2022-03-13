<template>
  <CommentList :list="list" />
</template>

<script>
import Vue from "vue";
import CommentList from "./comment-list.vue";
import avatarIcon from "@/static/img/avatar-man.svg";

export default Vue.extend({
  components: {
    CommentList,
  },
  data() {
    return {
      list: [
        {
          id: "0",
          user: {
            avatar: avatarIcon,
            name: "老八",
          },
          likeNum: "100",
          content: "教学的很详细，老师很细心~",
          releaseTime: "1个小时前",
        },
        {
          id: "1",
          user: {
            avatar: avatarIcon,
            name: "哈撒给",
          },
          likeNum: "23",
          content: "一定要打好基础",
          releaseTime: "1个小时前",
        },
      ],
    };
  },
});
</script>
