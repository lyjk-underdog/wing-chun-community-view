<template>
  <view class="p-login">
      <img class="p-login_app-icon" :src="appIcon">
      <view class="p-login_app-title">{{appTitle}}</view>
      <section class="l-login-form">
          <LoginFrom />
      </section>
  </view>
</template>

<script>
import Vue from 'vue';
import wingchunIcon from '@/static/img/wing-chun.svg';
import LoginFrom from '@/features/user/login-form.vue';

export default Vue.extend({
    components:{
        LoginFrom
    },
    data(){
        return {
            appIcon:wingchunIcon,
            appTitle:'咏春论坛'
        }
    }
})

</script>

<style lang="scss" scoped>
@import './style/login.scss';
</style>