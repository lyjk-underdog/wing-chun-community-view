import { useFetchItems , useListenPublish } from "@/hooks/long-list/index.js";
import dynamicCommentApi from '../api/index.js';
import { getCurrentPage } from "@/utils/index.js";

export default {
    mixins:[useFetchItems , useListenPublish],
    data(){
        return {
            listener:'onDynamicReply'
        }
    },
    methods:{
        async metaFetch(page){
            let route = getCurrentPage();
            return await dynamicCommentApi.get(route.query.dynamicID , 'new' , page);
        }
    }
}