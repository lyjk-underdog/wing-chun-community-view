//参数：like , list

export const useLike = {
    methods: {
        async updateTargetLikeInfoOnlike(targetID, IDField) {
            try {
                await this.like(targetID);
                let target = this.list.find(item => item[IDField] === targetID);
                target.likeNum += 1;
                target.likeType = 1;
            } catch (e) {
                throw e;
            }
        },
    }
}