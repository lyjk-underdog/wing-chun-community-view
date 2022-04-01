//参数：metaFetch

export default {
    data() {
        return {
            list: [],
            totalPage: 0,
            curPage: 1,
        }
    },
    methods: {
        async metaFetch(){
            throw new Error("metaFetch未实现")
        },
        async fetchListInit() {
            try {
                let { totalPage, items } = await this.metaFetch(1);

                this.totalPage = totalPage;
                this.curPage = 1;
                this.list = items;
            } catch (e) { throw e }
        },
        async fetchListTurnPages() {
            try {
                let { items } = await this.metaFetch(this.curPage + 1);
                this.list.push(...items);
                this.curPage++;
            } catch (e) { throw e }
        }
    },
    mounted(){
        this.fetchListInit();
    }
}