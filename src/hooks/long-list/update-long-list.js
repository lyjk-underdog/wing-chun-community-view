//参数：getLongListInOnePage

export default {
    data() {
        return {
            list: [],
            totalPage: 0,
            curPage: 1,
        }
    },
    methods: {
        async updateLongListOnInit() {
            try {
                let { totalPage, items } = await this.getLongListInOnePage(1);

                this.totalPage = totalPage;
                this.curPage = 1;
                this.list = items;
            } catch (e) { throw e }
        },
        async updateLongListOnTurnPages() {
            try {
                let { items } = await this.getLongListInOnePage(this.curPage + 1);
                this.list.push(...items);
                this.curPage++;
            } catch (e) { throw e }
        }
    },
    mounted(){
        this.updateLongListOnInit();
    }
}