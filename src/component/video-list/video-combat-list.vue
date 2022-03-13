<template>
    <VideoList :list="list" />
</template>

<script>
import Vue from 'vue';
import VideoList from './video-list.vue';

export default Vue.extend({
    components:{
        VideoList
    },
    data(){
        return {
            list:[
                {
                    vid:0,
                    title:'实战视频'
                },
                {
                    vid:1,
                    title:'实战视频'
                },
                {
                    vid:2,
                    title:'实战视频'
                },
                {
                    vid:3,
                    title:'实战视频'
                },
                {
                    vid:4,
                    title:'基本动作'
                }
            ]
        }
    }
})
</script>
