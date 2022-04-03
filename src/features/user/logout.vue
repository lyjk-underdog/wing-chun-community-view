<template>
  <ListItem @click.native="logout" :item="{ iconSrc, title }" type="strip" />
</template>

<script>
import Vue from "vue";
import ListItem from "@/ui/list/list-item.vue";
import logoutIcon from "./image/logout.svg";

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
      try {
        uni.setStorageSync("token", "");
        uni.navigateTo({ url: "/pages/login/login" });
      } catch (e) {
        throw e;
      }
    },
  },
});
</script>
