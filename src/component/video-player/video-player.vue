<template>
  <view class="c-video-player">
    <video class="c-video-player_video" :src="video.src"></video>
    <view class="c-video-player_footer">
      <view class="c-video-player_title">{{ video.title }}</view>
      <UniCollapse>
        <UniCollapseItem :border="false" title-border="none">
          <template v-slot:title> 
              <span class="c-video-player_describe-title">内容描述:</span>
          </template>
          <span class="c-video-player_describe">{{ video.describe }}</span>
        </UniCollapseItem>
      </UniCollapse>
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import UniCollapse from "@dcloudio/uni-ui/lib/uni-collapse/uni-collapse.vue";
import UniCollapseItem from "@dcloudio/uni-ui/lib/uni-collapse-item/uni-collapse-item.vue";


export default Vue.extend({
  components: {
    UniCollapse,
    UniCollapseItem,
  },
  data() {
    return {
      video: {
        vid: 0,
        src: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
        title: "基础动作",
        describe:
          "咏春拳以实际的拳术战斗理论为主，以身体结构、关节活动及流体力学开始研究改进，脱离了传统的五行八卦及象形神意等玄学、非科学性质、近似哲学性的解释。前辈们进而设计了一套由浅入深的训练系统，由第一套拳小念头的单纯静态气功及一摊三伏的手部拉筋动作开始，直至意念反应全身总体运动为止。除了真正可以用于攻击及防守之用，及至其训练黐手阶段，由于是练习自然反应，不会硬套次序重复性的招式，更加容易使到练习者感到有兴趣。故此，咏春拳可以在擂台的项目上比赛，一般的训练亦可以被视作为长期健身强体运动。",
      },
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style/video-player.scss";
</style>
