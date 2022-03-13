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
                    title:'基本动作'
                },
                {
                    vid:1,
                    title:'基本动作'
                },
                {
                    vid:2,
                    title:'基本动作'
                }
            ]
        }
    }
})
</script>
