import PubSub from "pubsub-js";

export default {
    data() {
        return {
            list: [],
            totalPage: 0,
            curPage: 1,
            scrollTop: 0,
        }
    },
    computed: {
        fetchListStateStrategy() {
            return {
                init: async () => {
                    try {
                        let { totalPage, items } = await this.metaFetch(1);
                        
                        this.totalPage = totalPage;
                        this.curPage = 1;
                        this.list = items;
                    } catch (e) {console.log(e)}
                },
                turnPages: async () => {
                    try {
                        let { items } = await this.metaFetch(this.curPage + 1);
                        this.list.push(...items);
                        this.curPage++;
                    } catch (e) { }
                },
            };
        },
    },
    mounted() {
        console.log(2)
        this.fetchListStateStrategy["init"]();
        this.subscribeName && PubSub.subscribe(this.subscribeName, () => {
            this.fetchListStateStrategy["init"]();
            this.scrollTop = 0;
        });
    }
}