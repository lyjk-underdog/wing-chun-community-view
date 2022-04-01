import PubSub from 'pubsub-js';

//参数：listener ， fetchListInit

export default {
    data(){
        return {
            scrollTop:0
        }
    },
    created(){
        this.listener && PubSub.subscribe(this.listener, () => {
            this.fetchListInit();
            this.scrollTop = 0;
        });
    }
}