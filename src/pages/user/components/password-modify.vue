<template>
  <view class="c-password-modify">
    <ListItem type="strip" :item="item" @click.native="() => $refs.dialog.open()" />
    <UniPopup ref="dialog">
      <UniPopupDialog
        mode="input"
        title="输入内容"
        placeholder="请输入密码"
        before-close
        @confirm="(val) => updatePassword(val)"
        @close="() => $refs.dialog.close()"
      ></UniPopupDialog>
    </UniPopup>
  </view>
</template>

<script>
import ListItem from "@/ui/list/list-item.vue";
import passwordIcon from "@/static/image/user/password.svg";
import UniPopup from "@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue";
import UniPopupDialog from "@dcloudio/uni-ui/lib/uni-popup-dialog/uni-popup-dialog.vue";

export default {
  components: {
    ListItem,
    UniPopup,
    UniPopupDialog,
  },
  data() {
    return {
      item: {
        iconSrc: passwordIcon,
        title: "密码修改",
      },
    };
  },
  methods: {
    updatePassword(val) {
      if(!val) uni.showToast({icon:'none' , title:'密码不能为空！'})
      else {
        console.log(val);
        this.$refs.dialog.close();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.c-password.modify_dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>

