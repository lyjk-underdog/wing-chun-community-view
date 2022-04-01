import dynamicListApi from '../api/index.js';
import { useFetchItems, useListenPublish } from "@/hooks/long-list/index.js";

export default {
    mixins: [useFetchItems, useListenPublish],
    data() {
        return {
            listener: "onDynamicPublish",
        };
    },
    methods: {
        metaFetch: dynamicListApi.get,
    },
}