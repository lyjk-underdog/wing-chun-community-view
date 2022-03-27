<template>
  <ListItem @click.native="logout" :item="{ iconSrc, title }" type="strip" />
</template>

<script>
import Vue from "vue";
import ListItem from "@/component/common/link-list/list-item.vue";
import logoutIcon from "@/static/img/logout.svg";

export default Vue.extend({
  components: {
    ListItem,
  },
  data() {
    return {
      iconSrc: logoutIcon,
      title: "退出登录",
    };
  },
  methods: {
    logout() {
      uni.setStorageSync("token", "");
      uni.redirectTo({ url: "login" });
    },
  },
});
</script>
