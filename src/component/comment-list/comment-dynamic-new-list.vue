<template>
  <CommentList :list="list" />
</template>

<script>
import Vue from "vue";
import CommentList from './comment-list.vue';
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
          content: "新年快乐！！！！",
          releaseTime: "1个小时前",
        },
        {
          id: "1",
          user: {
            avatar: avatarIcon,
            name: "哈撒给",
          },
          likeNum: "23",
          content: "新的一年,梦想成真！",
          releaseTime: "1个小时前",
        },
        {
          id: "2",
          user: {
            avatar: avatarIcon,
            name: "梦回2018",
          },
          likeNum: "24",
          content: "加油加油加油~",
          releaseTime: "2个小时前",
        },
      ],
    };
  },
});
</script>
