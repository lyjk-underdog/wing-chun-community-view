<template>
  <view class="c-carousel">
    <i
      class="c-carousel_background"
      :style="{ background: imgList[current].backgroundColor }"
    ></i>
    <uni-swiper-dot :info="imgList" :current="current" mode="round">
      <swiper :current="current" @change="change" :autoplay="played" interval="3000">
        <swiper-item v-for="(item, index) in imgList" :key="index">
          <view class="c-carousel_item">
            <img class="c-carousel_image" :src="item.src" />
          </view>
        </swiper-item>
      </swiper>
    </uni-swiper-dot>
  </view>
</template>

<script>
import Vue from "vue";
import UniSwiperDot from "@dcloudio/uni-ui/lib/uni-swiper-dot/uni-swiper-dot.vue";

export default Vue.extend({
  components: {
    UniSwiperDot,
  },
  props:{
    //[{src:String,backgroundColor:String}]
    imgList:{
      type:Array,
      default:() => []
    },
    played:{
      type:Boolean,
      default:true
    }
  },
  data(){
    return {
      current:0
    }
  },
  methods: {
    change(e) {
      this.current = e.detail.current;
    },
  },
  onHide(){
    console.log(1)
  },
});
</script>

<style lang="scss" scoped>
@import "./style/carousel.scss";
</style>
