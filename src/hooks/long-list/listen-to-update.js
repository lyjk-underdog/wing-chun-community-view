import PubSub from 'pubsub-js';

//参数：listener ， updateLongListOnInit

export default {
    data(){
        return {
            scrollTop:0
        }
    },
    created(){
        this.listener && PubSub.subscribe(this.listener, () => {
            this.updateLongListOnInit();
            this.scrollTop = 0;
        });
    }
}