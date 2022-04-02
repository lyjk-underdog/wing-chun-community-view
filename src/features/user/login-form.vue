<template>
  <view class="c-login-form">
    <input
      class="c-login-from_input"
      placeholder="请输⼊⼿机号"
      type="number"
      :maxlength="11"
      v-model="phoneNumber"
    />
    <input
      class="c-login-from_input"
      placeholder="请输⼊密码"
      type="password"
      v-model="password"
    />
    <button class="c-login-from_btn" @click="() => login()">授权并登录</button>
  </view>
</template>

<script>
import Vue from "vue";
import { validator } from "@/utils/index.js";
import userApi from "./api/index.js";

export default Vue.extend({
  data() {
    return {
      phoneNumber: "",
      password: "",
    };
  },
  methods: {
    login() {
      let _validate = () =>
        validator([
          {
            value: this.phoneNumber,
            rule: /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,
            failCb() {
              uni.showModal({
                title: "手机号格式错误",
                showCancel: false,
              });
            },
          },
        ]);

      let _getUserInfo = ({ successCb, failCb }) => {
        uni.getUserProfile({
          desc: "获取信息用于头像和名字",
          success(res) {
            let { avatarUrl, nickName } = res.userInfo;
            successCb(avatarUrl, nickName);
          },
          fail() {
            failCb();
          },
        });
      };

      try {
        _validate();
        _getUserInfo({
          successCb: async (avatarUrl, nickName) => {
            
            //调用登录接口，登录成功返回token，并把token存储到Storage中
            //...
            try {
              let token = await userApi.login(
                this.phoneNumber,
                this.password,
                avatarUrl,
                nickName
              );
              uni.setStorageSync("token", token);
              uni.switchTab({ url: "home" });
            } catch (e) {}
          },
          failCb: () => {
            uni.showModal({
              title: "必须要授权才能登录",
              showCancel: false,
            });
          },
        });
      } catch (e) {}
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./style/login-form.scss";
</style>