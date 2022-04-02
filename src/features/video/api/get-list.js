import config from "@/config/index.js";

export default (videoType) => new Promise((resolve, reject) => {
    uni.request({
        url: 'video/getlist',
        method: 'GET',
        data: {
            videoType,
        },
        success({ data }) {
            console.log(data);
            let _formater = data => {
                return data.map(item => ({...item , videoCover:config.ASSETS_URL + item.videoCover.slice(1)}))
            }

            data ? resolve(_formater(data)) : reject()
        }
    })
})