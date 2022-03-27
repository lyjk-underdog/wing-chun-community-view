<template>
  <DynamicList :list="[dynamic]" />
</template>

<script>
import Vue from "vue";
import DynamicListPresent from './present/dynamic-list.vue';
import avatarIcon from "@/static/img/avatar.svg";
import dynamicApi from '@/api/dynamic/index.js';
import { getCurrentPage } from "@/utils/index.js";

export default Vue.extend({
  components: {
    DynamicListPresent,
  },
  data() {
    return {
      dynamic: {
        id: "0",
        user: {
          avatar: avatarIcon,
          name: "李步东老师",
        },
        releaseTime: "1648312097526",
        content: "祝大家新年快乐，在牛年里顺顺利利，事业有成飞腾直上！！",
        commentsNum: "100",
        likeNum: "100",
      },
    };
  },
  methods:{
    async fetchDynamicState(){
      try{
        let route = getCurrentPage();
        this.dynamic = await dynamicApi.getdetail(route.query.dynamicID);
      }catch(e){}
    }
  },
  async mounted(){
    // await this.fetchDynamicState();
  }
});
</script>