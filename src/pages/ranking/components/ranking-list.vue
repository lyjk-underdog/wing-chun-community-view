<template>
  <view class="c-ranking-list">
    <section class="l-ranking-list" v-for="(item, index) in list" :key="index">
      <RankingItem
        :index="index"
        :avatar="item.avatar"
        :score="item.score"
        :username="item.username"
      />
    </section>
  </view>
</template>

<script>
import RankingItem from "./ranking-item.vue";

export default {
  components: {
    RankingItem,
  },
  props: {
    type: {
      //month , week
      type: String,
      required: true,
    },
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    async updateRankingList() {
      try {
        const strategy = {
          week: [
            {
              username: "北上",
              avatar: "https://s3.bmp.ovh/imgs/2022/04/23/b642cda00597ccb2.jpg",
              score: 97,
            },
            {
              username: "南下",
              avatar: "https://s3.bmp.ovh/imgs/2022/04/23/db07646d16cef6d1.jpg",
              score: 93,
            },
            {
              username: "西北风",
              avatar: "https://s3.bmp.ovh/imgs/2022/04/23/d067557e12d78f9a.jpg",
              score: 89,
            },
            {
              username: "奥里给",
              avatar: null,
              score: 74,
            },
            {
              username: "西北风",
              avatar: null,
              score: 69,
            },
          ],
          month: [
            {
              username: "南下",
              avatar: "https://s3.bmp.ovh/imgs/2022/04/23/db07646d16cef6d1.jpg",
              score: 273,
            },
            {
              username: "北上",
              avatar: "https://s3.bmp.ovh/imgs/2022/04/23/b642cda00597ccb2.jpg",
              score: 257,
            },
            {
              username: "奥里给",
              avatar: null,
              score: 180,
            },
            {
              username: "西北风",
              avatar: "https://s3.bmp.ovh/imgs/2022/04/23/d067557e12d78f9a.jpg",
              score: 150,
            },
            {
              username: "西北风",
              avatar: null,
              score: 126,
            },
          ],
        };

        this.list = strategy[this.type];
      } catch (e) {
        throw e;
      }
    },
  },
  created(){
      this.updateRankingList();
  }
};
</script>

<style lang="scss" scoped>
.c-ranking-list {
  padding: 0 30rpx;
}
</style>